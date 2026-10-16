#!/usr/bin/env python3
"""
scripts/build_cefr_outcomes.py

Derive a per-CEFR-level outcome + hour summary from the existing curriculum
JSON (curriculum/{lang}/{course}/{level}.json). This gives COSY the
marketing-clarity Skyeng has (a clean "A1 = N lessons, can-do X, ~M hours"
table) without losing the richer per-lesson data.

Outputs:
  data/levels/cefr-outcomes.json   (machine-readable)
Prints a Markdown summary table to stdout.

Hour estimate = sum of lesson durations (default 50 min if absent) × a
homework/self-study multiplier (1.5), rounded up to the nearest 5 h.
CEFR benchmark hours (Skyeng-published reference) are included for context.
"""
import json, glob, os, re, math

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

CEFR_BENCHMARK_HOURS = {
    "A1": (90, 100),
    "A2": (180, 200),
    "B1": (350, 400),
    "B2": (500, 600),
    "C1": (700, 800),
    "C2": (1000, 1200),
}

LEVEL_ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"]
HOMEWORK_MULTIPLIER = 1.5
DEFAULT_LESSON_MIN = 50


def extract_candos(teacher_notes: str) -> list[str]:
    if not teacher_notes:
        return []
    m = re.search(r'cando:\s*"([^"]+)"', teacher_notes)
    return [m.group(1).strip()] if m else []


def summarize_file(path: str) -> dict | None:
    with open(path, "r", encoding="utf-8") as f:
        d = json.load(f)
    course = d.get("course_type") or os.path.basename(os.path.dirname(path))
    level = (d.get("level") or "").upper()
    units = d.get("units", [])
    n_units = len(units)
    n_lessons = 0
    n_grammar = 0
    n_vocab = 0
    candos = []
    lesson_minutes = 0
    has_duration = False
    for u in units:
        for l in u.get("lessons", []):
            n_lessons += 1
            n_grammar += len(l.get("grammar", []) or [])
            n_vocab += len(l.get("vocabulary", []) or [])
            candos.extend(extract_candos(l.get("teacher_notes", "")))
            dm = l.get("duration_minutes")
            if isinstance(dm, (int, float)) and dm > 0:
                lesson_minutes += dm
                has_duration = True
    if not has_duration:
        lesson_minutes = n_lessons * DEFAULT_LESSON_MIN
    # Estimated total hours incl. homework/self-study
    contact_hours = lesson_minutes / 60.0
    est_hours = math.ceil(contact_hours * HOMEWORK_MULTIPLIER / 5) * 5
    bench = CEFR_BENCHMARK_HOURS.get(level)
    return {
        "course": course,
        "level": level,
        "units": n_units,
        "lessons": n_lessons,
        "grammar_items": n_grammar,
        "vocabulary_items": n_vocab,
        "lesson_duration_min": (lesson_minutes // n_lessons) if n_lessons else 0,
        "contact_hours": round(contact_hours, 1),
        "estimated_total_hours": est_hours,
        "cefr_benchmark_hours": f"{bench[0]}–{bench[1]}" if bench else None,
        "can_do_statements": candos,
    }


def main():
    files = sorted(glob.glob(os.path.join(ROOT, "curriculum", "en", "*", "*.json")))
    entries = []
    by_course: dict[str, list] = {}
    for f in files:
        s = summarize_file(f)
        if not s:
            continue
        entries.append(s)
        by_course.setdefault(s["course"], []).append(s)

    out_dir = os.path.join(ROOT, "data", "levels")
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, "cefr-outcomes.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(
            {
                "language": "en",
                "generated_from": "curriculum/en/**/*.json",
                "homework_multiplier": HOMEWORK_MULTIPLIER,
                "cefr_benchmark_source": "Skyeng-published CEFR hour targets (engblog.ru/skyeng-review)",
                "courses": by_course,
            },
            f,
            ensure_ascii=False,
            indent=2,
        )
        f.write("\n")

    # Markdown summary table
    print(f"Generated {out_path} with {len(entries)} course-level entries.\n")
    for course, items in sorted(by_course.items()):
        print(f"### {course}\n")
        print("| Level | Units | Lessons | Grammar | Vocab | Lesson min | Contact h | Est. total h (incl. HW) | CEFR benchmark | Can-do examples |")
        print("|---|---:|---:|---:|---:|---:|---:|---:|---|---|")
        for it in sorted(items, key=lambda x: LEVEL_ORDER.index(x["level"]) if x["level"] in LEVEL_ORDER else 99):
            cando = (it["can_do_statements"][0][:50] + "…") if it["can_do_statements"] else "—"
            bench = it["cefr_benchmark_hours"] or "—"
            print(f"| {it['level']} | {it['units']} | {it['lessons']} | {it['grammar_items']} | {it['vocabulary_items']} | {it['lesson_duration_min']} | {it['contact_hours']} | ~{it['estimated_total_hours']} | {bench} | {cando} |")
        print()


if __name__ == "__main__":
    main()
