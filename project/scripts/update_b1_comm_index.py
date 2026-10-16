#!/usr/bin/env python3
import os

INDEX_FILE = os.path.abspath("manuals/en/communication/b1/index.html")

# 10 Core Systems
SYSTEMS = [
    ("part-1.html", "System 1", "System 1 · Narrating Complex Past Experiences", "Mixing past simple, continuous, and perfect naturally in spoken story narrative.", "#3562e0"),
    ("part-2.html", "System 2", "System 2 · Describing & Comparing a Photo (Long Turn)", "Sustaining a 1-minute visual description, speculating about context, and structuring long turns.", "#1c8f56"),
    ("part-3.html", "System 3", "System 3 · Negotiating a Joint Decision", "Discussing options with a partner, exploring tradeoffs, and concluding an agreed outcome.", "#c9740a"),
    ("part-4.html", "System 4", "System 4 · Giving & Justifying Opinions", "Structuring opinion + reason + concrete example beyond basic one-line views.", "#7c4fd6"),
    ("part-5.html", "System 5", "System 5 · Discussing Advantages & Disadvantages", "Weighing both sides of an issue before forming a balanced conclusion.", "#a3195b"),
    ("part-6.html", "System 6", "System 6 · Future Plans & Predictions", "Expressing degrees of certainty (sure to, might, there's a chance) in natural conversation.", "#3562e0"),
    ("part-7.html", "System 7", "System 7 · Expressing Hypothetical Situations", "Speaking hypothetically in natural conversation (if I were you, imagine if, what if).", "#1c8f56"),
    ("part-8.html", "System 8", "System 8 · Making Formal Requests & Complaints", "Shifting register for service situations (I was wondering if..., I'm afraid there's a problem with...).", "#c9740a"),
    ("part-9.html", "System 9", "System 9 · Reporting What Someone Said", "Natural reported speech in conversation (he mentioned that..., she claimed that...).", "#7c4fd6"),
    ("part-10.html", "System 10", "System 10 · Giving a Short Structured Talk", "Integration capstone: 1-2 minute mini-presentation on a familiar topic with signposting language.", "#a3195b")
]

CATEGORIES = [
    {
        "title": "💼 Workplace & Professional Meetings",
        "description": "Functional English for presentations, job interviews, feedback, negotiations, and workplace collaboration.",
        "stripe": "#3562e0",
        "units": [
            ("topics/giving-presentations.html", "Giving Presentations", "Today I'd like to talk to you about..."),
            ("topics/job-interview-performance.html", "Job Interview Performance", "My primary strength lies in my ability to..."),
            ("topics/networking-at-conferences.html", "Networking at Conferences", "What line of work are you in?"),
            ("topics/participating-in-group-discussions.html", "Participating in Group Discussions", "I'd like to echo what Sarah just said..."),
            ("topics/summarizing-meetings.html", "Summarizing Meetings", "To wrap up, our main action items are..."),
            ("topics/giving-constructive-feedback.html", "Giving Constructive Feedback", "What worked really well was X; one area for growth is Y..."),
            ("topics/accepting-criticism-gracefully.html", "Accepting Criticism Gracefully", "Thank you for pointing that out; I'll make sure to correct it."),
            ("topics/negotiating-trade-offs.html", "Negotiating Trade-Offs", "If you can meet us halfway on X, we could offer Y..."),
            ("topics/rejecting-proposals-politely.html", "Rejecting Proposals Politely", "I appreciate the offer, but unfortunately at this stage..."),
            ("topics/delivering-bad-news.html", "Delivering Bad News", "I regret to inform you that..."),
            ("topics/checking-progress.html", "Checking Progress", "How are we coming along with the quarterly targets?"),
            ("topics/formal-vs-informal-register-switch.html", "Formal vs Informal Register Switch", "Hi mate ➔ Dear Mr. Smith; Thanks a lot ➔ I sincerely appreciate it.")
        ]
    },
    {
        "title": "📞 Phone, Video Calls & Remote Work",
        "description": "Essential phrases for professional telephone management, video calls, voicemails, and announcements.",
        "stripe": "#1c8f56",
        "units": [
            ("topics/telephone-professional-english.html", "Telephone Professional English", "Could you put me through to the accounts department?"),
            ("topics/video-call-etiquette.html", "Video Call Etiquette", "You're currently on mute; could you unmute your microphone?"),
            ("topics/leaving-professional-messages.html", "Leaving Professional Messages", "Please ask him to return my call regarding the contract."),
            ("topics/public-announcements-handling.html", "Public Announcements Handling", "Attention passengers on flight BA302...")
        ]
    },
    {
        "title": "🛎️ Service, Reservations & Problem Solving",
        "description": "Polite service communication, registering or handling complaints, reservations, and detailed problem reporting.",
        "stripe": "#c9740a",
        "units": [
            ("topics/making-formal-requests-and-complaints.html", "Making Complaints", "I'm writing to express my strong dissatisfaction with..."),
            ("topics/handling-complaints.html", "Handling Complaints", "I sincerely apologize for the inconvenience caused..."),
            ("topics/making-reservations.html", "Making Reservations", "I'd like to inquire about booking a conference hall..."),
            ("topics/describing-problems-in-detail.html", "Describing Problems in Detail", "The primary issue stems from a failure in..."),
            ("topics/asking-for-permission.html", "Asking for Permission", "Would there be any objection if I...?"),
            ("topics/giving-instructions.html", "Giving Instructions", "First, ensure X is connected; then, proceed to Y.")
        ]
    },
    {
        "title": "🤝 Social, Interpersonal & Personal Expressions",
        "description": "Social formulas for congratulations, sympathy, gratitude, apologies, advice, and asking favors.",
        "stripe": "#7c4fd6",
        "units": [
            ("topics/congratulating-and-celebrating.html", "Congratulating & Celebrating", "Heartfelt congratulations on your achievements!"),
            ("topics/expressing-deep-sympathy.html", "Expressing Deep Sympathy", "Please accept my deepest condolences..."),
            ("topics/expressing-gratitude.html", "Expressing Gratitude", "I'm extremely grateful for your guidance."),
            ("topics/apologizing-for-errors.html", "Apologizing for Errors", "I take full responsibility for the oversight."),
            ("topics/asking-for-favors.html", "Asking for Favors", "Would you mind doing me a huge favor?"),
            ("topics/asking-for-advice.html", "Asking for Advice", "What would you recommend I do in this situation?"),
            ("topics/giving-advice.html", "Giving Advice", "If I were in your shoes, I would consider...")
        ]
    },
    {
        "title": "🗣️ Opinions, Persuasion & Discussion Dynamics",
        "description": "Articulating complex views, persuading, agreeing/disagreeing diplomatically, and managing conversation flow.",
        "stripe": "#a3195b",
        "units": [
            ("topics/explaining-complex-opinions.html", "Explaining Complex Opinions", "From my perspective, the key issue is..."),
            ("topics/persuading-and-convincing.html", "Persuading & Convincing", "Have you considered the potential benefits of...?"),
            ("topics/expressing-agreement.html", "Expressing Agreement", "I couldn't agree more with your assessment."),
            ("topics/expressing-polite-disagreement.html", "Expressing Polite Disagreement", "I see where you're coming from, but I take a slightly different view."),
            ("topics/making-suggestions.html", "Making Suggestions", "Why don't we try approaching this from a different angle?"),
            ("topics/interrupting-politely.html", "Interrupting Politely", "Sorry to interrupt, but could I just clarify...?"),
            ("topics/asking-for-clarification.html", "Asking for Clarification", "Could you elaborate on what you mean by...?"),
            ("topics/expressing-uncertainty.html", "Expressing Uncertainty", "I'm not entirely convinced that..."),
            ("topics/speculating-on-options.html", "Speculating on Options", "One possibility might be to..."),
            ("topics/comparing-alternatives.html", "Comparing Alternatives", "While Option A offers speed, Option B provides better value."),
            ("topics/expressing-preferences.html", "Expressing Preferences", "I would much rather invest in X than Y.")
        ]
    }
]

def generate_index_html():
    sys_cards = []
    for href, pnum, title, desc, stripe in SYSTEMS:
        sys_cards.append(f'''<a class="part-card" href="{href}">
 <div class="stripe" style="background:{stripe};"></div>
 <span class="pnum">{pnum}</span>
 <h2>{title}</h2>
 <p>{desc}</p>
 <span class="topics-count">Explore System &rarr;</span>
</a>''')

    systems_html = "\n".join(sys_cards)

    cat_sections = []
    for cat in CATEGORIES:
        unit_cards = []
        for href, title, desc in cat["units"]:
            unit_cards.append(f'''<a class="part-card" href="{href}">
 <div class="stripe" style="background:{cat["stripe"]};"></div>
 <h2>{title}</h2>
 <p>{desc}</p>
 <span class="topics-count">Study Unit &rarr;</span>
</a>''')
        units_html = "\n".join(unit_cards)

        cat_sections.append(f'''<section style="margin-top: 48px;">
 <h2 style="font-family: var(--font-display); font-size: 26px; font-weight: 800; margin-bottom: 6px;">{cat["title"]}</h2>
 <p style="color: var(--ink-soft); font-size: 16px; margin-bottom: 20px;">{cat["description"]}</p>
 <div class="parts-grid">
 {units_html}
 </div>
</section>''')

    categories_html = "\n".join(cat_sections)

    index_content = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>COSYlanguages English Communication Manual (Level B1) · COSYlanguages</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
<header class="topbar">
 <div class="topbar-inner">
 <a class="brand" href="index.html">
 <span class="brand-mark">cl</span>
 <span class="brand-name">COSY<em>languages</em> · Comm B1</span>
 </a>
 <nav class="topbar-nav">
 <a href="../../../english-b1.html" style="font-weight:700;">← English Hub</a>
 <a href="part-1.html">System 1</a>
<a href="part-2.html">System 2</a>
<a href="part-3.html">System 3</a>
<a href="part-4.html">System 4</a>
<a href="part-5.html">System 5</a>
<a href="part-6.html">System 6</a>
<a href="part-7.html">System 7</a>
<a href="part-8.html">System 8</a>
<a href="part-9.html">System 9</a>
<a href="part-10.html">System 10</a>
 </nav>
 </div>
</header>
<section class="hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages · Level B1</span>
 <h1>English Communication Manual · Level B1</h1>
 <p class="lead">Extended, Structured Speech. 10 Core Conversation Systems aligned with PET task formats, plus 40 Functional Situational Masterclass Units.</p>
 </div>
</section>
<main class="container">
 <section style="margin-top: 36px;">
 <h2 style="font-family: var(--font-display); font-size: 28px; font-weight: 800; margin-bottom: 6px;">🎙️ Core Conversation Systems (PET & Exam Prep)</h2>
 <p style="color: var(--ink-soft); font-size: 16px; margin-bottom: 20px;">Structured speech frameworks aligned with CEFR B1 Informal Discussion and Cambridge B1 Preliminary tasks.</p>
 <div class="parts-grid">
 {systems_html}
 </div>
 </section>

 <section style="margin-top: 56px; border-top: 2px dashed var(--line); padding-top: 36px;">
 <h1 style="font-family: var(--font-display); font-size: 32px; font-weight: 900; margin-bottom: 8px;">💼 Functional English Masterclass (40 Situational Units)</h1>
 <p style="color: var(--ink-soft); font-size: 18px; margin-bottom: 24px;">Comprehensive situational units covering workplace negotiations, phone & video call etiquette, social formulas, and opinion frameworks.</p>
 {categories_html}
 </section>
</main>
<footer class="site">
 <div class="container">
 <div>COSYlanguages · English Communication Manual (Level B1)</div>
 <div><a href="../../../index.html">&larr; Back to cosylanguages.github.io</a></div>
 </div>
</footer>
<script src="assets/app.js"></script>
</body>
</html>'''

    with open(INDEX_FILE, "w", encoding="utf-8") as f:
        f.write(index_content)
    print("Successfully updated manuals/en/communication/b1/index.html!")

if __name__ == "__main__":
    generate_index_html()
