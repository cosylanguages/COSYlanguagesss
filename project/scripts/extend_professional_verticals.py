#!/usr/bin/env python3
"""
Extend the professional English course with IT, marketing and career
verticals (gap-analysis A5). Adds a `vertical` field to units so the track
is identifiable/filterable, appends new IT + marketing units at B1 and B2,
and tags the existing career unit.

Additive only: existing units and lessons are untouched except for the new
`vertical` field on units that already mapped to a vertical (Unit 6 = career).
"""
import json
from pathlib import Path

PROF = Path("curriculum/en/professional")

def L(num, type_, title, grammar, vocab, code, cando, domain, recycled):
    return {
        "lesson": num,
        "type": type_,
        "title": title,
        "grammar": grammar,
        "vocabulary": vocab,
        "teacher_notes": f'code: "{code}"\ncando: "{cando}"\ndomain_hints: "{domain}"',
        "recycled": recycled,
    }

def unit(n, title, vertical, lessons):
    return {"unit": n, "vertical": vertical, "title": title, "lessons": lessons}

# ---- B1 IT ----
B1_IT = unit(7, "IT: Support, Tickets & Technical Walkthroughs", "it", [
    L(1, "vocab", "IT Support & Helpdesk Language",
      ["Present Simple for routine tech tasks", "Modals for troubleshooting steps (should, might)"],
      ["Ticket", "Issue", "Troubleshoot", "Restart", "Update", "Password"],
      "EN-PRO-B1-IT-001",
      "Can log and describe routine IT support issues and troubleshooting steps.",
      "Education: LMS access; Medical: EHR login; Business: SaaS accounts; Crafts: design software.",
      "Formal request phrasing, Present Simple"),
    L(2, "gv", "Explaining Software & System Issues",
      ["Passive voice for system errors (The server was restarted)", "Cause/effect connectors (because, due to, so)"],
      ["Error", "Crash", "Recover", "Backup", "Restart", "Log"],
      "EN-PRO-B1-IT-002",
      "Can explain a software problem, its cause, and the recovery steps taken.",
      "Education: Platform outage; Legal: Case system; Business: App downtime.",
      "Passive voice, Cause/effect connectors"),
    L(3, "spoken", "Walkthroughs: Guiding Users Through Steps",
      ["Imperatives and sequencers for instructions (First, click, then select)", "Modal verbs for polite guidance (you may, you can)"],
      ["Click", "Select", "Menu", "Settings", "Confirm", "Apply"],
      "EN-PRO-B1-IT-003",
      "Can guide a non-technical user step-by-step through a simple software procedure.",
      "Education: Guiding students to submit work; Business: Onboarding clients.",
      "Imperatives, Sequencers"),
    L(4, "gv", "IT Documentation & Change Notes",
      ["Present Perfect for recent changes (The system has been updated)", "Bullet-point structures for release notes"],
      ["Release", "Patch", "Version", "Deploy", "Note", "Changelog"],
      "EN-PRO-B1-IT-004",
      "Can write concise change notes and release documentation for an IT update.",
      "Education: LMS update; Medical: System upgrade; Business: Feature rollout.",
      "Present Perfect, Bullet-point structures"),
])

# ---- B1 Marketing ----
B1_MKT = unit(8, "Marketing: Campaigns, Content & Customer Outreach", "marketing", [
    L(1, "vocab", "Marketing Campaign Vocabulary & Brand Messaging",
      ["Present Simple for brand facts", "Adjective order for product descriptions"],
      ["Campaign", "Brand", "Target", "Audience", "Launch", "Message"],
      "EN-PRO-B1-MKT-001",
      "Can describe a marketing campaign, its target audience, and core message.",
      "Business: Product launch; Crafts: Handmade goods; Education: Course promotion.",
      "Present Simple, Adjective order"),
    L(2, "gv", "Writing Promotional Copy & Product Descriptions",
      ["Imperatives and persuasive modals for calls to action (Discover, You can, Try)", "Comparative adjectives (better, faster, more affordable)"],
      ["Feature", "Benefit", "Discount", "Offer", "Limited", "Exclusive"],
      "EN-PRO-B1-MKT-002",
      "Can write short promotional copy highlighting product benefits and a call to action.",
      "Business: Sales copy; Crafts: Etsy listings; Education: Program ads.",
      "Imperatives, Comparatives"),
    L(3, "spoken", "Pitching Ideas & Presenting Campaign Concepts",
      ["Present Continuous for ongoing campaigns (We are launching)", "Future arrangements (We will roll out)"],
      ["Pitch", "Concept", "Strategy", "Reach", "Engagement", "Goal"],
      "EN-PRO-B1-MKT-003",
      "Can pitch a simple marketing concept and describe its goals and expected reach.",
      "Business: Internal pitch; Education: Funding proposal.",
      "Present Continuous, Future arrangements"),
    L(4, "gv", "Social Media Posts & Customer Engagement",
      ["Question tags and direct address for engagement (Isn't it?, You)", "Present Perfect for results (We have reached)"],
      ["Post", "Follower", "Comment", "Share", "Trend", "Feedback"],
      "EN-PRO-B1-MKT-004",
      "Can draft social media posts and respond to basic customer comments.",
      "Business: Brand social; Crafts: Maker accounts; Education: School page.",
      "Question tags, Present Perfect"),
])

# ---- B2 IT ----
B2_IT = unit(5, "IT: Systems, Security & Technical Communication", "it", [
    L(1, "gv", "Describing System Architecture & Infrastructure",
      ["Passive voice and relative clauses for technical descriptions (which is used to, that connects)", "Present Simple for established architecture"],
      ["Infrastructure", "Server", "Database", "Network", "Firewall", "Cloud"],
      "EN-PRO-B2-IT-001",
      "Can describe a system's architecture and the role of its main components.",
      "Business: SaaS infra; Medical: Health systems; Education: EdTech platform.",
      "Relative clauses, Passive voice"),
    L(2, "spoken", "Explaining Technical Issues to Non-Technical Stakeholders",
      ["Hedging and analogies (It's like..., essentially)", "Modal verbs for possibility (may, could)"],
      ["Stakeholder", "Simplify", "Analogy", "Risk", "Impact", "Mitigation"],
      "EN-PRO-B2-IT-002",
      "Can explain a technical issue and its business impact to non-technical stakeholders.",
      "Business: Executive briefings; Legal: Tech evidence; Medical: Clinician update.",
      "Hedging, Modals of possibility"),
    L(3, "gv", "Security Incidents & Incident Response",
      ["Past Simple / Present Perfect for incident reporting (occurred, has been contained)", "Conditional for response (If detected, we would)"],
      ["Breach", "Vulnerability", "Incident", "Contain", "Investigate", "Patch"],
      "EN-PRO-B2-IT-003",
      "Can report a security incident, the response taken, and preventive next steps.",
      "Legal: Compliance; Medical: Data protection; Business: Customer comms.",
      "Past Simple/Present Perfect, Conditionals"),
    L(4, "gv", "Technical Specs & Requirements Documentation",
      ["Modal verbs for requirements (must, shall, should)", "Passive voice for specifications"],
      ["Requirement", "Specification", "Constraint", "Interface", "Comply", "Validate"],
      "EN-PRO-B2-IT-004",
      "Can write clear technical requirements and specifications for a feature or system.",
      "Business: Vendor specs; Education: LMS requirements; Legal: Compliance specs.",
      "Modals for requirements, Passive voice"),
])

# ---- B2 Marketing ----
B2_MKT = unit(6, "Marketing: Strategy, Analytics & Positioning", "marketing", [
    L(1, "gv", "Market Analysis & Competitor Positioning",
      ["Comparatives and superlatives for positioning (more established, the leading)", "Present Perfect for trends (have shifted)"],
      ["Segment", "Competitor", "Positioning", "Share", "Trend", "Differentiator"],
      "EN-PRO-B2-MKT-001",
      "Can analyze a market segment and position a product against key competitors.",
      "Business: Strategy; Crafts: Niche positioning; Education: Course market.",
      "Comparatives/superlatives, Present Perfect"),
    L(2, "spoken", "Presenting Campaign Performance & KPIs",
      ["Verbs of change and degree (rose steadily, declined slightly)", "Percentages and fractions"],
      ["Conversion", "Retention", "Funnel", "Metric", "ROI", "Target"],
      "EN-PRO-B2-MKT-002",
      "Can present campaign performance metrics and interpret key results.",
      "Business: Stakeholder review; Education: Program outcomes.",
      "Verbs of change, Percentages"),
    L(3, "gv", "Content Strategy & SEO Basics",
      ["Infinitive of purpose (in order to rank, to attract)", "Passive for optimization (is optimized, are targeted)"],
      ["Keyword", "Ranking", "Organic", "Content", "Optimize", "Traffic"],
      "EN-PRO-B2-MKT-003",
      "Can outline a content strategy with SEO goals and target keywords.",
      "Business: Blog strategy; Crafts: Shop SEO; Education: Course discoverability.",
      "Infinitive of purpose, Passive voice"),
    L(4, "gv", "Email Marketing & Lead Nurturing",
      ["Conditional structures for nurture flows (If they click, they receive)", "Sequence adverbs (then, subsequently)"],
      ["Lead", "Nurture", "Subscribe", "Sequence", "Open rate", "Convert"],
      "EN-PRO-B2-MKT-004",
      "Can design a simple email nurture sequence and describe its conversion goals.",
      "Business: CRM; Education: Prospect nurture; Crafts: Newsletter growth.",
      "Conditionals, Sequence adverbs"),
])

def extend(level_file, new_units):
    data = json.loads((PROF / level_file).read_text(encoding="utf-8"))
    units = data.get("units", [])
    next_n = max((u.get("unit", 0) for u in units), default=0) + 1
    for i, u in enumerate(new_units):
        u["unit"] = next_n + i
    # tag existing career unit (title contains 'Career')
    for u in units:
        if "career" not in u.get("title", "").lower():
            continue
        if "vertical" not in u:
            u["vertical"] = "career"
    units.extend(new_units)
    data["units"] = units
    (PROF / level_file).write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"{level_file}: now {len(units)} units (added {len(new_units)})")

extend("B1.json", [B1_IT, B1_MKT])
extend("B2.json", [B2_IT, B2_MKT])
print("done")
