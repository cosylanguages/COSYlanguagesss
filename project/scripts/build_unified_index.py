#!/usr/bin/env python3
"""
scripts/build_unified_index.py

Parses vocabulary files (vocabulary/{lang}/**/*.js) and reference grammar files
(reference-grammar/{lang}/**/*.json) across all languages and levels.

Derives normalized, globally unique canonical IDs using the schema:
  [lang]-[domain]-[level]-[topic]-[slug]
Optionally appends a disambiguator hash if collision occurs.

Generates automated cross-reference index files under data/index/[lang]_index.json.
"""

import os
import glob
import json
import re
import hashlib
import subprocess

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def slugify(text):
    if not text:
        return "item"
    text = str(text).strip().lower()
    # Replace non-alphanumeric/non-word characters (preserving Unicode letters) with hyphens
    text = re.sub(r'[^\w]+', '-', text)
    text = text.strip('-')
    return text if text else "item"

def normalize_level(level):
    if not level:
        return "a1"
    lvl = str(level).strip().lower()
    mapping = {
        "starter": "a1",
        "elementary": "a2",
        "intermediate": "b1",
        "upper_intermediate": "b2",
        "upper-intermediate": "b2",
        "advanced": "c1",
        "proficiency": "c2"
    }
    return mapping.get(lvl, lvl)

def load_vocab_js_file(filepath):
    js_runner = r"""
const fs = require('fs');
const vm = require('vm');

const file = process.argv[1];
const code = fs.readFileSync(file, 'utf8');
const window = { speakingData: {}, vocabData: {}, vocabularyData: {} };
const sandbox = { window, console: { log: ()=>{}, error: ()=>{} } };

vm.createContext(sandbox);
vm.runInContext(code, sandbox);

let items = null;
if (sandbox.data) {
  items = sandbox.data;
} else {
  for (const rootKey of Object.keys(window)) {
    const root = window[rootKey];
    if (root && typeof root === 'object') {
      for (const langKey of Object.keys(root)) {
        const langObj = root[langKey];
        if (Array.isArray(langObj)) {
          items = (items || []).concat(langObj);
        } else if (langObj && typeof langObj === 'object') {
          for (const categoryKey of Object.keys(langObj)) {
            if (Array.isArray(langObj[categoryKey])) {
              items = (items || []).concat(langObj[categoryKey]);
            }
          }
        }
      }
    }
  }
}

process.stdout.write(JSON.stringify(items || []));
"""
    try:
        res = subprocess.run(["node", "-e", js_runner, filepath], capture_output=True, text=True, check=True)
        return json.loads(res.stdout)
    except Exception as e:
        print(f"Error executing Node loader for {filepath}: {e}")
        return []

def main():
    print("Starting build_unified_index.py...")
    vocab_files = glob.glob(os.path.join(PROJECT_ROOT, "vocabulary", "**", "*.js"), recursive=True)
    ref_gram_files = glob.glob(os.path.join(PROJECT_ROOT, "reference-grammar", "**", "*.json"), recursive=True)

    print(f"Found {len(vocab_files)} vocabulary files and {len(ref_gram_files)} reference grammar files.")

    # Dictionary mapping lang -> list of index entries
    indexes_by_lang = {}

    # Global seen canonical IDs to ensure strict global uniqueness
    global_ids = set()

    # 1. Process Vocabulary Files
    for file in sorted(vocab_files):
        rel_path = os.path.relpath(file, PROJECT_ROOT).replace("\\", "/")
        parts = rel_path.split("/")
        # expected format: vocabulary/<lang>/<level>/[intermediate...]/<topic>.js
        if len(parts) < 4:
            continue
        lang = parts[1]
        file_level = parts[2]
        topic_file = os.path.splitext(parts[-1])[0]
        intermediate_parts = parts[3:-1]

        items = load_vocab_js_file(file)
        if not items:
            continue

        if lang not in indexes_by_lang:
            indexes_by_lang[lang] = []

        for idx, item in enumerate(items):
            word_text = item.get("word") or item.get("text") or item.get("topic") or "item"
            pos = item.get("form") or item.get("pos") or "word"
            item_level = normalize_level(item.get("level") or file_level)
            item_theme = slugify(item.get("theme") or topic_file)
            item_slug = slugify(word_text)[:40] or "item"

            domain = "phrase" if pos == "phrase" else "word"
            base_id = f"{lang}-{domain}-{item_level}-{item_theme}-{item_slug}"

            canonical_id = base_id
            counter = 1
            while canonical_id in global_ids:
                h = hashlib.md5(f"{rel_path}:{word_text}:{item.get('id', '')}:{idx}:{counter}".encode('utf-8')).hexdigest()[:6]
                canonical_id = f"{base_id}-{h}"
                counter += 1

            global_ids.add(canonical_id)

            vocab_obj = {
                "file": rel_path,
                "topic": item.get("theme") or topic_file
            }
            if intermediate_parts:
                vocab_obj["path_detail"] = "/".join(intermediate_parts)

            entry = {
                "word_id": canonical_id,
                "legacy_id": item.get("id"),
                "word": word_text,
                "pos": pos,
                "level": item_level.upper(),
                "vocab": vocab_obj,
                "grammar_refs": item.get("grammar_refs", [])
            }
            indexes_by_lang[lang].append(entry)

    # 2. Process Reference Grammar Files
    for file in sorted(ref_gram_files):
        rel_path = os.path.relpath(file, PROJECT_ROOT).replace("\\", "/")
        parts = rel_path.split("/")
        # expected format: reference-grammar/<lang>/<layer>/<category>.json
        if len(parts) < 4:
            continue
        lang = parts[1]
        layer = parts[2]
        category = os.path.splitext(parts[3])[0]

        try:
            with open(file, 'r', encoding='utf-8') as f:
                gram_data = json.load(f)
        except Exception as e:
            print(f"Error reading reference grammar file {file}: {e}")
            continue

        if lang not in indexes_by_lang:
            indexes_by_lang[lang] = []

        if layer == "lessons":
            unit_id = gram_data.get("unitId") or category
            unit_level = normalize_level(gram_data.get("level", "a1"))
            unit_title = gram_data.get("title") or unit_id
            unit_slug = slugify(unit_title)[:40] or slugify(category)

            base_id = f"{lang}-gram-{unit_level}-lesson-{unit_slug}"
            canonical_id = base_id
            counter = 1
            while canonical_id in global_ids:
                h = hashlib.md5(f"{rel_path}:{unit_id}:{counter}".encode('utf-8')).hexdigest()[:6]
                canonical_id = f"{base_id}-{h}"
                counter += 1

            global_ids.add(canonical_id)

            entry = {
                "word_id": canonical_id,
                "legacy_id": unit_id,
                "word": unit_title,
                "pos": "lesson_unit",
                "level": unit_level.upper(),
                "grammar": {
                    "file": rel_path,
                    "layer": layer,
                    "category": category,
                    "group_id": unit_id
                },
                "grammar_refs": []
            }
            indexes_by_lang[lang].append(entry)
        else:
            groups = gram_data.get("groups", [])
            for idx, grp in enumerate(groups):
                grp_id = grp.get("id") or "group"
                grp_level = normalize_level(grp.get("level", "a1"))
                grp_title = grp.get("title") or grp.get("name") or grp_id
                grp_slug = slugify(grp_title)[:40] or slugify(grp_id)

                base_id = f"{lang}-gram-{grp_level}-{slugify(category)}-{grp_slug}"
                canonical_id = base_id
                counter = 1
                while canonical_id in global_ids:
                    h = hashlib.md5(f"{rel_path}:{grp_id}:{idx}:{counter}".encode('utf-8')).hexdigest()[:6]
                    canonical_id = f"{base_id}-{h}"
                    counter += 1

                global_ids.add(canonical_id)

                entry = {
                    "word_id": canonical_id,
                    "legacy_id": grp_id,
                    "word": grp_title,
                    "pos": "grammar_rule",
                    "level": grp_level.upper(),
                    "grammar": {
                        "file": rel_path,
                        "layer": layer,
                        "category": category,
                        "group_id": grp_id
                    },
                    "grammar_refs": []
                }
                indexes_by_lang[lang].append(entry)

    # 3. Write index files under data/index/[lang]_index.json
    output_dir = os.path.join(PROJECT_ROOT, "data", "index")
    os.makedirs(output_dir, exist_ok=True)

    for lang, entries in indexes_by_lang.items():
        out_file = os.path.join(output_dir, f"{lang}_index.json")
        with open(out_file, 'w', encoding='utf-8') as f:
            json.dump(entries, f, ensure_ascii=False, indent=2)
        print(f"Wrote {len(entries)} entries to {out_file}")

    print("Successfully built all cross-reference index files!")

if __name__ == "__main__":
    main()
