#!/usr/bin/env python3
"""
scripts/verify_index_and_ids.py

Verifies the integrity of generated cross-reference index files under data/index/[lang]_index.json:
1. Validates that every `word_id` across all index files is globally unique.
2. Checks that every entry conforms to the canonical ID schema ([lang]-[domain]-[level]-[topic/category]-[slug]).
3. Verifies that referenced source files exist on disk.
"""

import os
import glob
import json
import re
import sys

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INDEX_DIR = os.path.join(PROJECT_ROOT, "data", "index")

ID_REGEX = re.compile(r'^[a-z]{2,3}-(word|phrase|gram|manual|exercise|game|app)-[a-c][1-2]-(?:\w|-)+$', re.UNICODE)

def main():
    print("Starting index and ID verification...")
    index_files = glob.glob(os.path.join(INDEX_DIR, "*_index.json"))

    if not index_files:
        print(f"Error: No index files found in {INDEX_DIR}")
        sys.exit(1)

    all_word_ids = set()
    total_entries = 0
    errors = []

    for index_file in index_files:
        rel_index_path = os.path.relpath(index_file, PROJECT_ROOT)
        try:
            with open(index_file, 'r', encoding='utf-8') as f:
                entries = json.load(f)
        except Exception as e:
            errors.append(f"Failed to read/parse JSON in {rel_index_path}: {e}")
            continue

        if not isinstance(entries, list):
            errors.append(f"Root structure in {rel_index_path} must be a list")
            continue

        for i, entry in enumerate(entries):
            total_entries += 1
            word_id = entry.get("word_id")
            if not word_id:
                errors.append(f"Entry {i} in {rel_index_path} missing 'word_id'")
                continue

            if word_id in all_word_ids:
                errors.append(f"Duplicate word_id found: '{word_id}' in {rel_index_path}")
            else:
                all_word_ids.add(word_id)

            if not ID_REGEX.match(word_id):
                errors.append(f"Invalid ID format '{word_id}' in {rel_index_path}")

            # Verify file references
            if "vocab" in entry and isinstance(entry["vocab"], dict):
                v_file = entry["vocab"].get("file")
                if v_file and not os.path.exists(os.path.join(PROJECT_ROOT, v_file)):
                    errors.append(f"Referenced vocab file missing on disk: '{v_file}' (in {word_id})")

            if "grammar" in entry and isinstance(entry["grammar"], dict):
                g_file = entry["grammar"].get("file")
                if g_file and not os.path.exists(os.path.join(PROJECT_ROOT, g_file)):
                    errors.append(f"Referenced grammar file missing on disk: '{g_file}' (in {word_id})")

    print(f"Scanned {len(index_files)} index files containing {total_entries} total entries.")

    if errors:
        print(f"\nFAIL: Found {len(errors)} error(s):")
        for err in errors[:20]:
            print(f"  - {err}")
        if len(errors) > 20:
            print(f"  ... and {len(errors) - 20} more errors.")
        sys.exit(1)

    print("PASS: All index files and IDs verified successfully with 0 collisions or broken references!")

if __name__ == "__main__":
    main()
