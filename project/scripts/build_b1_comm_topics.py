#!/usr/bin/env python3
import os

OUTPUT_DIR = os.path.abspath("manuals/en/communication/b1/topics")
os.makedirs(OUTPUT_DIR, exist_ok=True)

TOPICS_DATA = [
    # 2. Handling Complaints
    {
        "slug": "handling-complaints",
        "title": "Handling Complaints",
        "eyebrow": "CEFR B1 Service & Support",
        "subtitle": "De-escalating issues professionally and offering immediate solutions.",
        "outcome": "You can acknowledge customer complaints empathetically and offer clear, professional resolutions.",
        "chips": [
            "I sincerely apologize for the inconvenience caused...",
            "Thank you for bringing this matter to our attention.",
            "I will personally look into this issue right away.",
            "To make things right, we would like to offer you..."
        ],
        "map": [
            ("Empathy & Apology", "I sincerely apologize for the inconvenience caused with your order delay."),
            ("Acknowledge Issue", "Thank you for bringing this matter to our attention. I understand how frustrating this must be."),
            ("Propose Solution", "I will personally make sure your replacement is dispatched today free of charge.")
        ],
        "examples": [
            "I take full responsibility for this misunderstanding and will resolve it immediately.",
            "Please rest assured that we are taking steps to prevent this error from happening again."
        ],
        "wrong": "It's not my fault, you should have checked earlier.",
        "right": "I sincerely apologize for the inconvenience caused, let me look into this right away.",
        "hint": "tap to see the professional resolution phrase",
        "checklist": [
            "De-escalate complaints using 'I sincerely apologize for the inconvenience caused...'",
            "Offer direct solutions with 'I will personally look into this...'"
        ],
        "quiz": [
            {
                "q": "Which phrase is best for professionally handling a customer complaint?",
                "opts": ["I sincerely apologize for the inconvenience caused.", "Why didn't you inform us sooner?", "That's not my concern."],
                "correct": 0,
                "explain": "'I sincerely apologize for the inconvenience caused' is the formal, empathetic opening frame."
            },
            {
                "q": "How do you reassure a customer that action will be taken?",
                "opts": ["Maybe someone will fix it.", "I will personally look into this right away.", "Just wait a few weeks."],
                "correct": 1,
                "explain": "'I will personally look into this...' demonstrates personal accountability."
            }
        ]
    },
    # 3. Giving Presentations
    {
        "slug": "giving-presentations",
        "title": "Giving Presentations",
        "eyebrow": "CEFR B1 Workplace & Public Speaking",
        "subtitle": "Structuring clear presentations with opening hooks, transitions, and conclusions.",
        "outcome": "You can open, structure, and conclude a formal presentation using professional signposting language.",
        "chips": [
            "Today I'd like to talk to you about...",
            "First, I will outline..., followed by...",
            "Turning now to our next point...",
            "To sum up, the key takeaway is..."
        ],
        "map": [
            ("Opening & Purpose", "Good morning everyone. Today I'd like to talk to you about our new project timeline."),
            ("Signposting Main Body", "First, I will outline our current progress, followed by a review of our budget."),
            ("Concluding", "To sum up, our project is on track, and the key takeaway is that early testing saved time.")
        ],
        "examples": [
            "As you can see on this chart, our performance has improved significantly.",
            "Thank you for your time; I'd be happy to take any questions now."
        ],
        "wrong": "Today I talk about the report. Also another thing is money.",
        "right": "Today I'd like to talk to you about our quarterly performance.",
        "hint": "tap to see structured signposting language",
        "checklist": [
            "Open presentations using 'Today I'd like to talk to you about...'",
            "Use clear transition markers like 'Turning now to...' and 'To sum up...'"
        ],
        "quiz": [
            {
                "q": "What is an effective opening line for a business presentation?",
                "opts": ["Listen to me now about work.", "Today I'd like to talk to you about...", "I guess I have some slides."],
                "correct": 1,
                "explain": "'Today I'd like to talk to you about...' is standard, polite signposting."
            },
            {
                "q": "Which phrase transitions smoothly to a new topic during a presentation?",
                "opts": ["Turning now to our next point...", "By the way I remembered something.", "Forget what I just said."],
                "correct": 0,
                "explain": "'Turning now to...' clearly signals a transition to the next topic."
            }
        ]
    },
    # 4. Expressing Uncertainty
    {
        "slug": "expressing-uncertainty",
        "title": "Expressing Uncertainty",
        "eyebrow": "CEFR B1 Opinions & Discussions",
        "subtitle": "Hesitating politely and qualifying statements when details are unconfirmed.",
        "outcome": "You can express doubt or lack of full conviction politely without sounding unprepared.",
        "chips": [
            "I'm not entirely convinced that...",
            "As far as I'm aware, but I'd need to check...",
            "It's difficult to say for certain, but...",
            "I have some reservations about..."
        ],
        "map": [
            ("Polite Hesitation", "I'm not entirely convinced that this timeline is realistic for the team."),
            ("Qualifying Knowledge", "As far as I'm aware, the budget was approved, but I'd need to double-check."),
            ("Balanced Doubt", "It's difficult to say for certain until we receive the final report.")
        ],
        "examples": [
            "I have some reservations about launching before testing is complete.",
            "Off the top of my head, I'd estimate around 50 attendees, though I'm not 100% sure."
        ],
        "wrong": "I don't know anything about this topic.",
        "right": "I'm not entirely convinced that we have all the data yet.",
        "hint": "tap to see nuanced uncertainty phrasing",
        "checklist": [
            "Express qualified agreement or hesitation using 'I'm not entirely convinced that...'",
            "State unconfirmed information politely with 'As far as I'm aware...'"
        ],
        "quiz": [
            {
                "q": "How can you politely express doubt about a proposal?",
                "opts": ["That's totally wrong and dumb.", "I'm not entirely convinced that this approach will work.", "I don't care."],
                "correct": 1,
                "explain": "'I'm not entirely convinced that...' expresses constructive, polite doubt."
            },
            {
                "q": "Which phrase signals that your information might need verification?",
                "opts": ["As far as I'm aware, but I'd need to check...", "This is 100% permanent fact.", "Never ask me again."],
                "correct": 0,
                "explain": "'As far as I'm aware...' shows you are sharing current knowledge subject to confirmation."
            }
        ]
    },
    # 5. Interrupting Politely
    {
        "slug": "interrupting-politely",
        "title": "Interrupting Politely",
        "eyebrow": "CEFR B1 Workplace & Discussions",
        "subtitle": "Interjecting smoothly in meetings to seek clarification or add key points.",
        "outcome": "You can interrupt ongoing discussions respectfully without appearing aggressive or rude.",
        "chips": [
            "Sorry to interrupt, but could I just clarify...?",
            "May I quickly jump in here for a second?",
            "Before we move on, could I add something?",
            "If I could just interject for a moment..."
        ],
        "map": [
            ("Polite Interjection", "Sorry to interrupt, but could I just clarify the deadline for Phase 1?"),
            ("Acknowledge Speaker", "Thank you, John. I just wanted to highlight that the client requested an update."),
            ("Yielding Back", "Thanks for letting me clarify that. Please go ahead with your presentation.")
        ],
        "examples": [
            "May I quickly jump in here? We actually addressed that point in yesterday's meeting.",
            "Before we move on to the next topic, I'd like to share a quick update."
        ],
        "wrong": "Stop talking! Listen to me now!",
        "right": "Sorry to interrupt, but could I just clarify one quick detail?",
        "hint": "tap to see the polite interjection phrase",
        "checklist": [
            "Interject in meetings using 'Sorry to interrupt, but could I just clarify...?'",
            "Yield the floor back smoothly with 'Please go ahead.'"
        ],
        "quiz": [
            {
                "q": "What is a polite way to join an ongoing discussion?",
                "opts": ["Be quiet, my turn!", "Sorry to interrupt, but could I just clarify...?", "I am speaking now."],
                "correct": 1,
                "explain": "'Sorry to interrupt, but could I just clarify...?' is the standard professional opener."
            },
            {
                "q": "Which expression allows you to add a quick thought before changing subjects?",
                "opts": ["Before we move on, could I add something?", "Forget what you said.", "Change the subject now."],
                "correct": 0,
                "explain": "'Before we move on...' signals a brief, relevant interjection."
            }
        ]
    },
    # 6. Negotiating Trade-Offs
    {
        "slug": "negotiating-trade-offs",
        "title": "Negotiating Trade-Offs",
        "eyebrow": "CEFR B1 Workplace & Business",
        "subtitle": "Balancing concessions, finding compromises, and agreeing conditional terms.",
        "outcome": "You can offer trade-offs and reach mutually beneficial conditional agreements in negotiations.",
        "chips": [
            "If you can meet us halfway on X, we could offer Y...",
            "We would be willing to compromise provided that...",
            "On the condition that you extend the deadline, we can...",
            "What if we agree to X in exchange for Y?"
        ],
        "map": [
            ("Propose Trade-Off", "If you can meet us halfway on the pricing, we could offer extended support."),
            ("Counter-Condition", "We would be willing to accept those terms provided that delivery is guaranteed by Friday."),
            ("Closing Deal", "That sounds like a fair compromise. Let's draft the agreement.")
        ],
        "examples": [
            "On the condition that payment is upfront, we can offer a 5% discount.",
            "What if we adjust the scope slightly in exchange for a lower overall cost?"
        ],
        "wrong": "Take it or leave it, no changes.",
        "right": "If you can meet us halfway on price, we can include extra training.",
        "hint": "tap to see the conditional negotiation frame",
        "checklist": [
            "Offer compromises using 'If you can meet us halfway on..., we could offer...'",
            "State conditions using 'provided that...' or 'on the condition that...'"
        ],
        "quiz": [
            {
                "q": "How do you frame a conditional offer in business negotiations?",
                "opts": ["You must give me everything.", "If you can meet us halfway on X, we could offer Y.", "I refuse to negotiate."],
                "correct": 1,
                "explain": "'If you can meet us halfway on X, we could offer Y' establishes a balanced trade-off."
            },
            {
                "q": "Which word introduces a mandatory requirement in a deal?",
                "opts": ["provided that", "maybe", "whatever"],
                "correct": 0,
                "explain": "'provided that' introduces the essential condition for accepting a trade-off."
            }
        ]
    },
    # 7. Persuading & Convincing
    {
        "slug": "persuading-and-convincing",
        "title": "Persuading & Convincing",
        "eyebrow": "CEFR B1 Opinions & Discussions",
        "subtitle": "Presenting compelling benefits and convincing others to adopt an idea.",
        "outcome": "You can persuade colleagues or partners by highlighting advantages and overcoming hesitancy.",
        "chips": [
            "Have you considered the potential benefits of...?",
            "Look at it this way: if we implement this,...",
            "There's no doubt that this will lead to...",
            "Wouldn't it make sense to test this first?"
        ],
        "map": [
            ("Opening Persuasion", "Have you considered the potential benefits of automating our weekly reports?"),
            ("Illustrate Value", "Look at it this way: if we implement this, we'll save over 5 hours every week."),
            ("Address Doubt", "There's no doubt that initial setup takes time, but the long-term ROI is huge.")
        ],
        "examples": [
            "Wouldn't it make sense to run a small trial before committing the entire budget?",
            "If you weigh the long-term gains against the initial investment, the choice is clear."
        ],
        "wrong": "You have to do this because I said so.",
        "right": "Have you considered the potential benefits of upgrading our equipment?",
        "hint": "tap to see the persuasive inquiry opener",
        "checklist": [
            "Invite consideration using 'Have you considered the potential benefits of...?'",
            "Reframe arguments with 'Look at it this way...'"
        ],
        "quiz": [
            {
                "q": "What is a persuasive, non-aggressive way to suggest an idea?",
                "opts": ["You must do what I say.", "Have you considered the potential benefits of...?", "Do it now."],
                "correct": 1,
                "explain": "'Have you considered the potential benefits of...?' gently guides the listener to evaluate advantages."
            },
            {
                "q": "Which phrase helps reframe an idea from a new perspective?",
                "opts": ["Look at it this way...", "Stop thinking.", "It doesn't matter."],
                "correct": 0,
                "explain": "'Look at it this way...' introduces an alternative perspective to persuade."
            }
        ]
    },
    # 8. Giving Constructive Feedback
    {
        "slug": "giving-constructive-feedback",
        "title": "Giving Constructive Feedback",
        "eyebrow": "CEFR B1 Workplace & Management",
        "subtitle": "Balancing positive praise with actionable areas for growth.",
        "outcome": "You can deliver balanced performance feedback that motivates and guides improvement.",
        "chips": [
            "What worked really well was X; one area for growth is Y.",
            "I really appreciated your effort on..., and next time...",
            "To build on your success, you might want to consider...",
            "One suggestion for future projects would be to..."
        ],
        "map": [
            ("Praise Strengths", "What worked really well was your thorough research on the market analysis."),
            ("Identify Growth Area", "One area for growth is presentation timing; we went slightly over schedule."),
            ("Actionable Advice", "To build on your success, you might want to rehearse with a timer next time.")
        ],
        "examples": [
            "I really appreciated your proactive communication throughout the sprint.",
            "One suggestion for future reports would be including a brief executive summary at the start."
        ],
        "wrong": "Your presentation was bad and too long.",
        "right": "What worked really well was the design; one area for growth is time management.",
        "hint": "tap to see the balanced feedback sandwich",
        "checklist": [
            "Frame feedback using 'What worked really well was X; one area for growth is Y.'",
            "Offer constructive suggestions with 'To build on your success, you might want to...'"
        ],
        "quiz": [
            {
                "q": "How should you structure constructive feedback?",
                "opts": ["Only list mistakes.", "What worked really well was X; one area for growth is Y.", "Say everything was perfect when it wasn't."],
                "correct": 1,
                "explain": "Combining praise with targeted growth areas ensures feedback is encouraging and actionable."
            },
            {
                "q": "Which phrase introduces a suggestion without sounding overly critical?",
                "opts": ["You failed at this.", "To build on your success, you might want to consider...", "Never do that again."],
                "correct": 1,
                "explain": "'To build on your success...' frames suggestions as continuous development."
            }
        ]
    },
    # 9. Accepting Criticism Gracefully
    {
        "slug": "accepting-criticism-gracefully",
        "title": "Accepting Criticism Gracefully",
        "eyebrow": "CEFR B1 Workplace & Professionalism",
        "subtitle": "Responding constructively to feedback without becoming defensive.",
        "outcome": "You can receive constructive criticism professionally and state concrete steps for improvement.",
        "chips": [
            "Thank you for pointing that out; I'll make sure to correct it.",
            "I appreciate the feedback and see where I can improve.",
            "That's a valid point; I'll incorporate those changes.",
            "I'm glad you brought that up; I'll adjust my approach."
        ],
        "map": [
            ("Acknowledge Feedback", "Thank you for pointing that out; I appreciate you taking the time to share this."),
            ("Validate Point", "That's a very valid point regarding the formatting inconsistencies."),
            ("Commit to Action", "I'll make sure to correct it immediately and double-check future documents.")
        ],
        "examples": [
            "I see where I can improve, and I'll focus on timing during our next presentation.",
            "I'm glad you brought that up; I'll adjust my workflow accordingly."
        ],
        "wrong": "That's not my fault, someone else messed up!",
        "right": "Thank you for pointing that out; I'll make sure to correct it right away.",
        "hint": "tap to see professional feedback acceptance",
        "checklist": [
            "Accept critique using 'Thank you for pointing that out; I'll make sure to correct it.'",
            "Demonstrate growth mindset with 'I appreciate the feedback and see where I can improve.'"
        ],
        "quiz": [
            {
                "q": "What is a professional response when receiving constructive criticism?",
                "opts": ["It wasn't my job anyway.", "Thank you for pointing that out; I'll make sure to correct it.", "You don't know what you're talking about."],
                "correct": 1,
                "explain": "'Thank you for pointing that out...' shows maturity, professionalism, and openness to learning."
            },
            {
                "q": "How can you validate a reviewer's comment?",
                "opts": ["That's a valid point; I'll incorporate those changes.", "I completely disagree.", "Whatever."],
                "correct": 0,
                "explain": "'That's a valid point...' acknowledges the reviewer's contribution gracefully."
            }
        ]
    },
    # 10. Rejecting Proposals Politely
    {
        "slug": "rejecting-proposals-politely",
        "title": "Rejecting Proposals Politely",
        "eyebrow": "CEFR B1 Workplace & Negotiations",
        "subtitle": "Declining offers or proposals firmly while preserving professional relationships.",
        "outcome": "You can politely turn down offers or proposals without causing offense or burning bridges.",
        "chips": [
            "I appreciate the offer, but unfortunately at this stage...",
            "While we see the value in this proposal, we are unable to...",
            "Regrettably, this does not align with our current priorities.",
            "Thank you for your proposal, but we have decided to..."
        ],
        "map": [
            ("Express Gratitude", "Thank you for putting together such a detailed proposal for our team."),
            ("Polite Rejection", "I appreciate the offer, but unfortunately at this stage, it falls outside our budget."),
            ("Keep Door Open", "We will certainly keep your details on file for potential future collaborations.")
        ],
        "examples": [
            "While we see the value in this partnership, we are unable to commit at this time.",
            "Regrettably, this project does not align with our current strategic goals."
        ],
        "wrong": "No way, your proposal is terrible.",
        "right": "I appreciate the offer, but unfortunately at this stage we cannot proceed.",
        "hint": "tap to see polite rejection framing",
        "checklist": [
            "Decline proposals politely with 'I appreciate the offer, but unfortunately at this stage...'",
            "State reasons softly using 'While we see the value..., we are unable to...'"
        ],
        "quiz": [
            {
                "q": "Which phrase allows you to decline a business offer politely?",
                "opts": ["This offer is useless.", "I appreciate the offer, but unfortunately at this stage...", "Don't contact us again."],
                "correct": 1,
                "explain": "'I appreciate the offer, but unfortunately...' cushions the refusal with professional courtesy."
            },
            {
                "q": "How can you explain a rejection diplomatically?",
                "opts": ["Regrettably, this does not align with our current priorities.", "Your ideas are wrong.", "We hate it."],
                "correct": 0,
                "explain": "'Regrettably, this does not align...' gives a clear, objective organizational reason."
            }
        ]
    },
    # 11. Delivering Bad News
    {
        "slug": "delivering-bad-news",
        "title": "Delivering Bad News",
        "eyebrow": "CEFR B1 Workplace & Communication",
        "subtitle": "Breaking difficult news clearly, empathetically, and constructively.",
        "outcome": "You can break bad news sensitivity in professional or personal contexts while providing helpful next steps.",
        "chips": [
            "I regret to inform you that...",
            "I'm afraid I have some disappointing news regarding...",
            "Unfortunately, despite our best efforts,...",
            "I wish I had better news, but..."
        ],
        "map": [
            ("Softened Warning", "I regret to inform you that your application was not successful this time."),
            ("Context / Reason", "We received an overwhelming number of highly qualified candidates for this role."),
            ("Support / Next Steps", "We would love to keep your resume on file for future openings that match your skills.")
        ],
        "examples": [
            "I'm afraid I have some disappointing news regarding our event launch date.",
            "I wish I had better news, but the shipment has been delayed due to severe weather."
        ],
        "wrong": "You failed. Project canceled.",
        "right": "I regret to inform you that the project launch has been postponed.",
        "hint": "tap to see professional bad news delivery",
        "checklist": [
            "Deliver disappointing news using 'I regret to inform you that...'",
            "Express empathy using 'I wish I had better news, but...'"
        ],
        "quiz": [
            {
                "q": "What is the standard professional formula for delivering bad news?",
                "opts": ["Bad news for you!", "I regret to inform you that...", "Too bad, so sad."],
                "correct": 1,
                "explain": "'I regret to inform you that...' is the formal and respectful opening phrase."
            },
            {
                "q": "Which phrase prepares the listener for unfortunate news in a sympathetic tone?",
                "opts": ["I'm afraid I have some disappointing news regarding...", "Listen to this failure.", "You won't like this at all."],
                "correct": 0,
                "explain": "'I'm afraid I have some disappointing news...' softens the impact with polite empathy."
            }
        ]
    },
    # 12. Congratulating & Celebrating
    {
        "slug": "congratulating-and-celebrating",
        "title": "Congratulating & Celebrating",
        "eyebrow": "CEFR B1 Social & Interpersonal",
        "subtitle": "Expressing warm congratulations, pride, and best wishes for milestones.",
        "outcome": "You can celebrate achievements and milestones with warm, sincere congratulations.",
        "chips": [
            "Heartfelt congratulations on your achievements!",
            "I was thrilled to hear about your promotion!",
            "You should be immensely proud of yourself.",
            "Wishing you continued success in your new role!"
        ],
        "map": [
            ("Enthusiastic Opening", "Heartfelt congratulations on passing your board exams!"),
            ("Acknowledge Hard Work", "I know how hard you worked for this, and you should be immensely proud."),
            ("Best Wishes", "Wishing you all the very best and continued success in your career!")
        ],
        "examples": [
            "I was thrilled to hear about your new job offer in London!",
            "Kudos to you and the entire team for winning the contract!"
        ],
        "wrong": "Okay good job I guess.",
        "right": "Heartfelt congratulations on your well-deserved promotion!",
        "hint": "tap to see warm congratulatory phrasing",
        "checklist": [
            "Congratulate others warmly using 'Heartfelt congratulations on...'",
            "Acknowledge personal effort with 'You should be immensely proud of yourself.'"
        ],
        "quiz": [
            {
                "q": "What is an expressive and formal way to congratulate someone?",
                "opts": ["Heartfelt congratulations on your achievements!", "Fine work.", "About time!"],
                "correct": 0,
                "explain": "'Heartfelt congratulations on your achievements!' conveys genuine warmth and respect."
            },
            {
                "q": "How can you compliment someone's hard work on a major success?",
                "opts": ["You got lucky.", "You should be immensely proud of yourself.", "Anyone could do that."],
                "correct": 1,
                "explain": "'You should be immensely proud of yourself' validates their dedication."
            }
        ]
    },
    # 13. Expressing Deep Sympathy
    {
        "slug": "expressing-deep-sympathy",
        "title": "Expressing Deep Sympathy",
        "eyebrow": "CEFR B1 Social & Interpersonal",
        "subtitle": "Offering genuine condolences and support during difficult moments.",
        "outcome": "You can offer sincere sympathy and condolences during times of grief or personal hardship.",
        "chips": [
            "Please accept my deepest condolences...",
            "My thoughts and prayers are with you and your family.",
            "I was deeply saddened to hear about your loss.",
            "Please know that I am here for you if you need anything."
        ],
        "map": [
            ("Sincere Condolence", "Please accept my deepest condolences during this difficult time."),
            ("Personal Support", "I was deeply saddened to hear about your loss; she was a wonderful person."),
            ("Offer Assistance", "Please know that I am here for you if you need anything at all.")
        ],
        "examples": [
            "My thoughts are with you and your family as you go through this sad loss.",
            "Words cannot express how sorry I am for your loss."
        ],
        "wrong": "That's life, don't worry about it.",
        "right": "Please accept my deepest condolences; my thoughts are with you.",
        "hint": "tap to see respectful sympathy phrasing",
        "checklist": [
            "Offer formal condolences using 'Please accept my deepest condolences...'",
            "Express personal support with 'Please know that I am here for you...'"
        ],
        "quiz": [
            {
                "q": "Which expression is appropriate when sending condolences?",
                "opts": ["Please accept my deepest condolences.", " Cheer up soon!", "That happens to everyone."],
                "correct": 0,
                "explain": "'Please accept my deepest condolences' is standard, formal, and respectful."
            },
            {
                "q": "How can you offer emotional or practical support to a grieving friend?",
                "opts": ["Call me only next month.", "Please know that I am here for you if you need anything.", "Try not to think about it."],
                "correct": 1,
                "explain": "'Please know that I am here for you...' offers open-ended, supportive care."
            }
        ]
    },
    # 14. Telephone Professional English
    {
        "slug": "telephone-professional-english",
        "title": "Telephone Professional English",
        "eyebrow": "CEFR B1 Phone & Remote",
        "subtitle": "Managing phone calls, transferring lines, and handling audio issues politely.",
        "outcome": "You can conduct professional telephone interactions, connect callers, and manage call flow smoothly.",
        "chips": [
            "Could you put me through to the accounts department?",
            "May I ask who is calling, please?",
            "Hold the line, please, while I transfer your call.",
            "I'm afraid the line is bad; could you repeat that?"
        ],
        "map": [
            ("Call Request", "Good morning. Could you put me through to the accounts department, please?"),
            ("Identify Caller", "Certainly! May I ask who is calling so I can inform Mr. Davis?"),
            ("Transfer Call", "Hold the line, please, while I connect you to his extension.")
        ],
        "examples": [
            "I'm afraid her line is currently busy. Would you like to leave a message?",
            "Thank you for calling. Have a great rest of your day!"
        ],
        "wrong": "Give me Mr. Davis right now. What?",
        "right": "Could you put me through to Mr. Davis, please? Hold the line.",
        "hint": "tap to see professional phone phrases",
        "checklist": [
            "Request call transfers using 'Could you put me through to...?'",
            "Ask callers to wait politely using 'Hold the line, please...'"
        ],
        "quiz": [
            {
                "q": "What is the polite way to ask to speak to a specific department on the phone?",
                "opts": ["Connect me now!", "Could you put me through to the accounts department?", "I want accounts."],
                "correct": 1,
                "explain": "'Could you put me through to...?' is standard business phone English."
            },
            {
                "q": "How do you ask a caller to wait while you transfer them?",
                "opts": ["Wait there.", "Hold the line, please, while I transfer your call.", "Stay."],
                "correct": 1,
                "explain": "'Hold the line, please...' is courteous telephone etiquette."
            }
        ]
    },
    # 15. Video Call Etiquette
    {
        "slug": "video-call-etiquette",
        "title": "Video Call Etiquette",
        "eyebrow": "CEFR B1 Phone & Remote",
        "subtitle": "Navigating online meetings, screen sharing, and audio/video troubleshooting.",
        "outcome": "You can host and participate in video calls efficiently, managing technical checks and audio etiquette.",
        "chips": [
            "You're currently on mute; could you unmute your microphone?",
            "Can everyone see my shared screen okay?",
            "There's a slight lag on your audio; let me turn off my video.",
            "Shall we wait another minute for others to join?"
        ],
        "map": [
            ("Audio/Video Check", "Good morning! You're currently on mute; could you unmute your microphone?"),
            ("Screen Sharing", "I'm going to share my presentation now. Can everyone see my shared screen okay?"),
            ("Troubleshooting", "There's a slight lag on your connection; I'll post the slides in the chat as well.")
        ],
        "examples": [
            "Could everyone please mute their microphones when not speaking to reduce background noise?",
            "Thanks for joining, everyone. Let me drop the meeting link in the chat."
        ],
        "wrong": "Unmute! I can't see your screen!",
        "right": "You're currently on mute; could you unmute? Can everyone see my screen?",
        "hint": "tap to see virtual meeting phrases",
        "checklist": [
            "Alert colleagues to audio settings with 'You're currently on mute...'",
            "Confirm screen sharing using 'Can everyone see my shared screen okay?'"
        ],
        "quiz": [
            {
                "q": "How do you politely notify someone that their mic is turned off?",
                "opts": ["You are silent!", "You're currently on mute; could you unmute your microphone?", "Speak louder!"],
                "correct": 1,
                "explain": "'You're currently on mute...' is standard digital meeting etiquette."
            },
            {
                "q": "What phrase verifies that your visual presentation is working?",
                "opts": ["Can everyone see my shared screen okay?", "Look at my computer.", "Is my laptop on?"],
                "correct": 0,
                "explain": "'Can everyone see my shared screen okay?' checks screen broadcast functionality."
            }
        ]
    },
    # 16. Job Interview Performance
    {
        "slug": "job-interview-performance",
        "title": "Job Interview Performance",
        "eyebrow": "CEFR B1 Workplace & Career",
        "subtitle": "Articulating key strengths, past achievements, and career motivations clearly.",
        "outcome": "You can highlight professional strengths, articulate past experience, and answer interview questions confidently.",
        "chips": [
            "My primary strength lies in my ability to...",
            "In my previous role at X, I was responsible for...",
            "What motivates me most about this position is...",
            "A notable achievement in my career was when I..."
        ],
        "map": [
            ("Highlight Strength", "My primary strength lies in my ability to solve complex problems under tight deadlines."),
            ("Provide Experience", "In my previous role at Acme Corp, I was responsible for managing customer relations."),
            ("Express Motivation", "What motivates me most about this position is the opportunity to innovate in green energy.")
        ],
        "examples": [
            "A notable achievement in my career was leading a project that increased efficiency by 20%.",
            "I am eager to bring my analytical skills to your dynamic team."
        ],
        "wrong": "I'm good at everything. Give me the job.",
        "right": "My primary strength lies in my ability to organize cross-functional teams.",
        "hint": "tap to see professional interview phrasing",
        "checklist": [
            "State core competencies using 'My primary strength lies in my ability to...'",
            "Describe work background using 'In my previous role at..., I was responsible for...'"
        ],
        "quiz": [
            {
                "q": "Which phrase is effective for introducing a core professional strength?",
                "opts": ["I am the best at work.", "My primary strength lies in my ability to...", "I know how to do stuff."],
                "correct": 1,
                "explain": "'My primary strength lies in my ability to...' is structured and professional."
            },
            {
                "q": "How do you frame past work experience in an interview?",
                "opts": ["In my previous role at X, I was responsible for...", "I used to do things at my old job.", "My last boss was okay."],
                "correct": 0,
                "explain": "'In my previous role at X, I was responsible for...' clearly defines duties and scope."
            }
        ]
    },
    # 17. Networking at Conferences
    {
        "slug": "networking-at-conferences",
        "title": "Networking at Conferences",
        "eyebrow": "CEFR B1 Workplace & Networking",
        "subtitle": "Initiating conversations, exchanging contacts, and establishing business rapport.",
        "outcome": "You can break the ice at professional events, discuss professional background, and exchange contact details.",
        "chips": [
            "What line of work are you in?",
            "Are you attending any particular sessions today?",
            "Here's my business card; let's connect on LinkedIn!",
            "It was a pleasure meeting you; enjoy the conference!"
        ],
        "map": [
            ("Icebreaker Question", "Hello! Is this your first time at this conference? What line of work are you in?"),
            ("Sharing Background", "I'm in software product design. Are you attending any particular keynote sessions today?"),
            ("Contact Exchange", "That sounds fascinating! Here's my business card; let me connect with you on LinkedIn.")
        ],
        "examples": [
            "What brings you to this year's summit?",
            "It was a pleasure meeting you; I look forward to keeping in touch!"
        ],
        "wrong": "Who are you? Give me your phone number.",
        "right": "What line of work are you in? Here's my business card; let's connect on LinkedIn.",
        "hint": "tap to see professional icebreakers",
        "checklist": [
            "Inquire about someone's career using 'What line of work are you in?'",
            "Exchange contacts gracefully using 'Here's my business card; let's connect...'"
        ],
        "quiz": [
            {
                "q": "What is a polite icebreaker question when meeting someone at a conference?",
                "opts": ["How much money do you make?", "What line of work are you in?", "Why are you here?"],
                "correct": 1,
                "explain": "'What line of work are you in?' is the standard professional inquiry about someone's industry."
            },
            {
                "q": "How do you propose staying in touch after a conversation?",
                "opts": ["Here's my business card; let's connect on LinkedIn!", "Bye forever.", "Write down my name."],
                "correct": 0,
                "explain": "'Here's my business card; let's connect...' is the modern standard for networking."
            }
        ]
    },
    # 18. Asking for Clarification
    {
        "slug": "asking-for-clarification",
        "title": "Asking for Clarification",
        "eyebrow": "CEFR B1 Opinions & Discussions",
        "subtitle": "Seeking detailed explanations and checking understanding without causing confusion.",
        "outcome": "You can request further explanation or elaboration politely when instructions or ideas are unclear.",
        "chips": [
            "Could you elaborate on what you mean by...?",
            "If I understand correctly, you are saying that...",
            "Could you clarify the distinction between X and Y?",
            "Am I right in thinking that...?"
        ],
        "map": [
            ("Request Elaboration", "Could you elaborate on what you mean by 'streamlining the process'?"),
            ("Paraphrase Meaning", "If I understand correctly, you are saying that we should automate testing first."),
            ("Confirm Accuracy", "Exactly. Am I right in thinking that this will reduce manual errors?")
        ],
        "examples": [
            "Could you clarify the distinction between the standard and premium tiers?",
            "I didn't quite catch that last point; could you explain it once more?"
        ],
        "wrong": "I don't get it. Say it again.",
        "right": "Could you elaborate on what you mean by that? If I understand correctly...",
        "hint": "tap to see polite clarification frames",
        "checklist": [
            "Ask for deeper explanation using 'Could you elaborate on what you mean by...?'",
            "Check comprehension by paraphrasing with 'If I understand correctly...'"
        ],
        "quiz": [
            {
                "q": "How can you ask someone to explain a complex concept in more detail?",
                "opts": ["Explain that better.", "Could you elaborate on what you mean by...?", "You are not clear."],
                "correct": 1,
                "explain": "'Could you elaborate on what you mean by...?' requests details respectfully."
            },
            {
                "q": "Which phrase helps you double-check your understanding of a statement?",
                "opts": ["If I understand correctly, you are saying that...", "I guessed what you meant.", "You said something weird."],
                "correct": 0,
                "explain": "'If I understand correctly...' paraphrases to confirm comprehension."
            }
        ]
    },
    # 19. Explaining Complex Opinions
    {
        "slug": "explaining-complex-opinions",
        "title": "Explaining Complex Opinions",
        "eyebrow": "CEFR B1 Opinions & Discussions",
        "subtitle": "Articulating multi-layered viewpoints with structured supporting arguments.",
        "outcome": "You can explain nuanced opinions clearly by connecting main claims with logical supporting evidence.",
        "chips": [
            "From my perspective, the key issue is...",
            "The main reason I take this view is that...",
            "While I understand the opposing argument, I believe...",
            "Taking everything into account, my position is..."
        ],
        "map": [
            ("State Core View", "From my perspective, the key issue is not cost, but long-term sustainability."),
            ("Provide Justification", "The main reason I take this view is that eco-friendly policies attract younger customers."),
            ("Acknowledge Counterpoint", "While I understand the concern about short-term expense, the long-term gains outweigh it.")
        ],
        "examples": [
            "Taking everything into account, my position is that investing in staff training yields the best return.",
            "I firmly believe that remote work enhances productivity when managed effectively."
        ],
        "wrong": "My opinion is right because it is.",
        "right": "From my perspective, the key issue is quality. The main reason I take this view is...",
        "hint": "tap to see structured opinion phrasing",
        "checklist": [
            "Introduce complex perspectives using 'From my perspective, the key issue is...'",
            "Support arguments logically with 'The main reason I take this view is that...'"
        ],
        "quiz": [
            {
                "q": "What is an effective way to introduce a structured opinion in a meeting?",
                "opts": ["Listen to my opinion now.", "From my perspective, the key issue is...", "I think stuff."],
                "correct": 1,
                "explain": "'From my perspective, the key issue is...' focuses discussion on core priorities."
            },
            {
                "q": "How do you introduce supporting evidence for your viewpoint?",
                "opts": ["Because I said so.", "The main reason I take this view is that...", "No reason needed."],
                "correct": 1,
                "explain": "'The main reason I take this view is that...' provides structured logical backing."
            }
        ]
    },
    # 20. Participating in Group Discussions
    {
        "slug": "participating-in-group-discussions",
        "title": "Participating in Group Discussions",
        "eyebrow": "CEFR B1 Workplace & Discussions",
        "subtitle": "Building on colleagues' ideas, bringing in quiet participants, and guiding discussion.",
        "outcome": "You can participate actively in group discussions by piggybacking on ideas and encouraging team input.",
        "chips": [
            "I'd like to echo what Sarah just said...",
            "Building on John's point, we could also...",
            "I'd love to hear what David thinks about this.",
            "That brings us back to our main topic..."
        ],
        "map": [
            ("Build on Idea", "I'd like to echo what Sarah just said about improving our onboarding workflow."),
            ("Add Contribution", "Building on her point, we could also record short video tutorials for new hires."),
            ("Include Others", "I'd love to hear what David thinks about this from a technical standpoint.")
        ],
        "examples": [
            "That's a fascinating point, and it aligns closely with our customer feedback.",
            "That brings us back to our main question regarding budget allocation."
        ],
        "wrong": "Forget what Sarah said, listen to me.",
        "right": "I'd like to echo what Sarah just said. Building on her point, we could also...",
        "hint": "tap to see collaborative discussion chips",
        "checklist": [
            "Support team members' ideas using 'I'd like to echo what... just said...'",
            "Include colleagues in conversations with 'I'd love to hear what... thinks about this.'"
        ],
        "quiz": [
            {
                "q": "How do you build collaboratively on a team member's previous statement?",
                "opts": ["Building on John's point, we could also...", "John was wrong, but anyway...", "Ignore John."],
                "correct": 0,
                "explain": "'Building on John's point...' demonstrates active listening and collaborative teamwork."
            },
            {
                "q": "What is a great phrase for inviting a quiet colleague to share their view?",
                "opts": ["David, talk now.", "I'd love to hear what David thinks about this.", "David has no opinion."],
                "correct": 1,
                "explain": "'I'd love to hear what... thinks...' invites participation warmly."
            }
        ]
    },
    # 21. Making Reservations
    {
        "slug": "making-reservations",
        "title": "Making Reservations",
        "eyebrow": "CEFR B1 Service & Hospitality",
        "subtitle": "Booking venues, confirming availability, and specifying requirements.",
        "outcome": "You can make formal reservations for venues, hotels, or restaurants and specify special requests.",
        "chips": [
            "I'd like to inquire about booking a conference hall...",
            "Do you have any availability for a party of six on...?",
            "We have a few dietary requirements, specifically...",
            "Could you confirm the cancellation policy for this booking?"
        ],
        "map": [
            ("Initial Inquiry", "Good afternoon. I'd like to inquire about booking a conference hall for October 15th."),
            ("Check Details", "Do you have availability for a party of thirty, including catering services?"),
            ("Special Request", "We also have a few dietary requirements, specifically two vegetarian meals.")
        ],
        "examples": [
            "Could you send through a written confirmation of our reservation via email?",
            "What is your cancellation policy in case our schedule changes?"
        ],
        "wrong": "Give me a room on Friday.",
        "right": "I'd like to inquire about booking a room. Do you have availability for Friday?",
        "hint": "tap to see formal reservation phrases",
        "checklist": [
            "Inquire about bookings politely using 'I'd like to inquire about booking...'",
            "Specify requirements using 'We have a few dietary/special requirements...'"
        ],
        "quiz": [
            {
                "q": "What is a polite opening phrase when booking a venue or service?",
                "opts": ["Give me a venue now.", "I'd like to inquire about booking a conference hall...", "Save me space."],
                "correct": 1,
                "explain": "'I'd like to inquire about booking...' is formal and courteous."
            },
            {
                "q": "How do you ask about open dates or slots for a group?",
                "opts": ["Do you have any availability for a party of six on...?", "Is there room for people?", "Are you open?"],
                "correct": 0,
                "explain": "'Do you have any availability for a party of [number] on [date]?' is standard reservation language."
            }
        ]
    },
    # 22. Asking for Advice
    {
        "slug": "asking-for-advice",
        "title": "Asking for Advice",
        "eyebrow": "CEFR B1 Social & Interpersonal",
        "subtitle": "Seeking guidance, recommendations, and expert opinions on choices.",
        "outcome": "You can ask for guidance and recommendations effectively when facing decisions.",
        "chips": [
            "What would you recommend I do in this situation?",
            "I'd really appreciate your advice on how to handle...",
            "If you were in my shoes, what steps would you take?",
            "Do you think it would be wise to...?"
        ],
        "map": [
            ("Present Dilemma", "I'm trying to decide whether to accept the new transfer offer or stay in my current department."),
            ("Direct Advice Request", "What would you recommend I do in this situation?"),
            ("Specific Perspective", "If you were in my shoes, would you speak with HR first?")
        ],
        "examples": [
            "I'd really appreciate your advice on how to negotiate this contract extension.",
            "Do you think it would be wise to consult a financial advisor before investing?"
        ],
        "wrong": "Tell me what to do right now.",
        "right": "What would you recommend I do in this situation? I'd appreciate your advice.",
        "hint": "tap to see advice-seeking frames",
        "checklist": [
            "Seek recommendations using 'What would you recommend I do in this situation?'",
            "Frame hypothetical choices with 'If you were in my shoes, what...?'"
        ],
        "quiz": [
            {
                "q": "Which phrase is standard for asking a colleague for their recommendation?",
                "opts": ["Tell me the answer.", "What would you recommend I do in this situation?", "Decide for me."],
                "correct": 1,
                "explain": "'What would you recommend I do...?' asks for guidance politely."
            },
            {
                "q": "How can you ask someone to imagine themselves in your position?",
                "opts": ["If you were in my shoes, what steps would you take?", "Put on my shoes.", "Think like me."],
                "correct": 0,
                "explain": "'If you were in my shoes...' invites empathetic, practical advice."
            }
        ]
    },
    # 23. Giving Advice
    {
        "slug": "giving-advice",
        "title": "Giving Advice",
        "eyebrow": "CEFR B1 Social & Interpersonal",
        "subtitle": "Offering constructive recommendations, suggestions, and friendly guidance.",
        "outcome": "You can offer non-prescriptive, helpful advice using appropriate modal structures.",
        "chips": [
            "If I were in your shoes, I would consider...",
            "Have you thought about speaking directly to...?",
            "It might be worth taking a look at...",
            "My advice would be to start with..."
        ],
        "map": [
            ("Empathize & Frame", "That sounds like a tricky situation with your workload."),
            ("Offer Advice", "If I were in your shoes, I would consider speaking directly to your project manager."),
            ("Suggest Soft Action", "It might also be worth prioritizing your top three urgent tasks first.")
        ],
        "examples": [
            "Have you thought about taking a brief weekend retreat to recharge?",
            "My advice would be to get a second opinion before signing the contract."
        ],
        "wrong": "You must do this immediately without question.",
        "right": "If I were in your shoes, I would consider talking to your manager.",
        "hint": "tap to see gentle advice structures",
        "checklist": [
            "Offer advice using 'If I were in your shoes, I would consider...'",
            "Suggest actions softly using 'It might be worth...'"
        ],
        "quiz": [
            {
                "q": "What is a polite and empathetic structure for giving advice?",
                "opts": ["You have no choice but to...", "If I were in your shoes, I would consider...", "Do this now."],
                "correct": 1,
                "explain": "'If I were in your shoes, I would consider...' gives advice without sounding bossy."
            },
            {
                "q": "Which phrase gently suggests a useful action?",
                "opts": ["It might be worth taking a look at...", "You must read this immediately.", "Don't ignore this."],
                "correct": 0,
                "explain": "'It might be worth...' frames advice as a helpful possibility."
            }
        ]
    },
    # 24. Expressing Agreement
    {
        "slug": "expressing-agreement",
        "title": "Expressing Agreement",
        "eyebrow": "CEFR B1 Opinions & Discussions",
        "subtitle": "Validating others' opinions enthusiastically or with nuanced agreement.",
        "outcome": "You can agree strongly or partially with colleagues' views during discussions.",
        "chips": [
            "I couldn't agree more with your assessment.",
            "You've hit the nail on the head regarding...",
            "That's a very valid point; I share your view.",
            "I am completely on the same page as you."
        ],
        "map": [
            ("Strong Agreement", "I couldn't agree more with your assessment of our market strategy."),
            ("Highlight Shared View", "You've hit the nail on the head regarding our customer retention challenges."),
            ("Reaffirm Alignment", "I am completely on the same page as you; let's move forward with this plan.")
        ],
        "examples": [
            "That's a very valid point; I share your view on simplifying our product line.",
            "I second that proposal wholeheartedly!"
        ],
        "wrong": "Yes you are right yes yes.",
        "right": "I couldn't agree more with your assessment. You've hit the nail on the head.",
        "hint": "tap to see expressive agreement phrases",
        "checklist": [
            "Express emphatic agreement using 'I couldn't agree more with your assessment.'",
            "Use idioms like 'You've hit the nail on the head' appropriately."
        ],
        "quiz": [
            {
                "q": "Which phrase expresses strong, polished agreement with someone's point?",
                "opts": ["I couldn't agree more with your assessment.", "I guess you're okay.", "Sure whatever."],
                "correct": 0,
                "explain": "'I couldn't agree more...' is an articulate, high-level expression of complete agreement."
            },
            {
                "q": "What idiom means someone has accurately identified the exact truth or problem?",
                "opts": ["You've hit the nail on the head.", "You hit the wall.", "You nailed the door shut."],
                "correct": 0,
                "explain": "'You've hit the nail on the head' means pinpointing the exact truth."
            }
        ]
    },
    # 25. Expressing Polite Disagreement
    {
        "slug": "expressing-polite-disagreement",
        "title": "Expressing Polite Disagreement",
        "eyebrow": "CEFR B1 Opinions & Discussions",
        "subtitle": "Countering viewpoints diplomatically using softening markers and contrast.",
        "outcome": "You can disagree politely without causing friction or sounding confrontational.",
        "chips": [
            "I see where you're coming from, but I take a slightly different view.",
            "With respect, I'm not sure that would be effective because...",
            "That's an interesting point, but have we considered...?",
            "I understand your rationale; however, my concern is..."
        ],
        "map": [
            ("Acknowledge Partner", "I see where you're coming from regarding reducing marketing expenses."),
            ("Softened Disagreement", "However, I take a slightly different view. Cutting ad spend might reduce lead volume."),
            ("Propose Alternative", "Perhaps we could optimize our campaigns rather than cutting the budget entirely?")
        ],
        "examples": [
            "With respect, I'm not sure that launching in Q4 would be effective due to holiday closures.",
            "I understand your rationale; however, my concern is team capacity."
        ],
        "wrong": "You are completely wrong and make no sense.",
        "right": "I see where you're coming from, but I take a slightly different view.",
        "hint": "tap to see diplomatic disagreement structures",
        "checklist": [
            "Soft-land disagreement using 'I see where you're coming from, but...'",
            "Express respectful contrast using 'With respect, I'm not sure that...'"
        ],
        "quiz": [
            {
                "q": "How do you diplomatically disagree with a colleague's proposal?",
                "opts": ["Your idea makes no sense.", "I see where you're coming from, but I take a slightly different view.", "I refuse to accept that."],
                "correct": 1,
                "explain": "'I see where you're coming from, but...' validates the speaker before offering a counter-perspective."
            },
            {
                "q": "Which phrase softens a critical objection politely?",
                "opts": ["With respect, I'm not sure that would be effective...", "That's stupid.", "You are wrong."],
                "correct": 0,
                "explain": "'With respect, I'm not sure that...' introduces disagreement politely."
            }
        ]
    },
    # 26. Making Suggestions
    {
        "slug": "making-suggestions",
        "title": "Making Suggestions",
        "eyebrow": "CEFR B1 Workplace & Discussions",
        "subtitle": "Proposing creative ideas, alternatives, and collaborative action plans.",
        "outcome": "You can offer constructive suggestions and propose new approaches during discussions.",
        "chips": [
            "Why don't we try approaching this from a different angle?",
            "How about we conduct a quick survey among clients?",
            "It might be a good idea to set up a shared document.",
            "I suggest we schedule a brief catch-up meeting tomorrow."
        ],
        "map": [
            ("Propose New Angle", "Why don't we try approaching this problem from a different angle?"),
            ("Concrete Idea", "How about we conduct a quick survey among existing clients to gather feedback?"),
            ("Action Step", "It might be a good idea to draft the questions by this afternoon.")
        ],
        "examples": [
            "I suggest we schedule a brief catch-up meeting tomorrow to finalize the details.",
            "What if we divide the research tasks across the three team members?"
        ],
        "wrong": "We must do my plan now.",
        "right": "Why don't we try approaching this from a different angle? How about a quick survey?",
        "hint": "tap to see constructive suggestion frames",
        "checklist": [
            "Propose new perspectives using 'Why don't we try approaching this from...?'",
            "Suggest practical steps using 'How about we...?' or 'It might be a good idea to...'"
        ],
        "quiz": [
            {
                "q": "What is an open, collaborative way to offer a suggestion?",
                "opts": ["Do what I say.", "Why don't we try approaching this from a different angle?", "There is only one way."],
                "correct": 1,
                "explain": "'Why don't we try...' invites group collaboration on a new approach."
            },
            {
                "q": "Which structure is followed by a verb in the '-ing' form?",
                "opts": ["How about we conducting...", "How about conducting a quick survey...?", "Why don't we conducting..."],
                "correct": 1,
                "explain": "'How about [verb-ing]...?' takes a gerund when proposing an action."
            }
        ]
    },
    # 27. Asking for Permission
    {
        "slug": "asking-for-permission",
        "title": "Asking for Permission",
        "eyebrow": "CEFR B1 Service & Workplace",
        "subtitle": "Requesting authorization politely in formal or professional environments.",
        "outcome": "You can seek permission politely using formal modal verb structures.",
        "chips": [
            "Would there be any objection if I...?",
            "May I have your permission to...?",
            "Would it be alright if I took tomorrow morning off?",
            "Do you mind if I record this video call?"
        ],
        "map": [
            ("Formal Request", "Would there be any objection if I left slightly early today for a personal appointment?"),
            ("Explain Reason", "I have completed all my assigned tasks for the day."),
            ("Confirm Approval", "Thank you! I will ensure I am reachable by email if anything urgent arises.")
        ],
        "examples": [
            "May I have your permission to access the archived financial records?",
            "Do you mind if I record this webinar for absent team members?"
        ],
        "wrong": "I am leaving early today, bye.",
        "right": "Would there be any objection if I left slightly early today?",
        "hint": "tap to see polite permission structures",
        "checklist": [
            "Request permission formally using 'Would there be any objection if I...?'",
            "Ask permission respectfully using 'Would it be alright if I...?'"
        ],
        "quiz": [
            {
                "q": "Which phrase is a highly polite, formal request for permission?",
                "opts": ["I'm doing this now.", "Would there be any objection if I...?", "Let me do this."],
                "correct": 1,
                "explain": "'Would there be any objection if I...?' is a very respectful permission request."
            },
            {
                "q": "How do you ask permission using 'mind'?",
                "opts": ["Do you mind if I record this call?", "Do you mind I record?", "Are you minding if I record?"],
                "correct": 0,
                "explain": "'Do you mind if I [present simple verb]...?' is the correct structure."
            }
        ]
    },
    # 28. Giving Instructions
    {
        "slug": "giving-instructions",
        "title": "Giving Instructions",
        "eyebrow": "CEFR B1 Service & Workplace",
        "subtitle": "Sequencing step-by-step guidance, procedures, and clear directions.",
        "outcome": "You can deliver clear, sequential instructions for technical or administrative procedures.",
        "chips": [
            "First, ensure X is connected; then, proceed to Y.",
            "Once you have completed step one, make sure to...",
            "Before continuing, verify that...",
            "Finally, don't forget to save your changes."
        ],
        "map": [
            ("Step One", "First, ensure the printer is connected to the Wi-Fi network; then, open the settings panel."),
            ("Step Two", "Once you have opened settings, verify that the IP address matches your network."),
            ("Final Step", "Finally, don't forget to run a test print to confirm the setup.")
        ],
        "examples": [
            "Before continuing, verify that all safety switches are turned off.",
            "Once you've filled out the form, submit it directly to the portal."
        ],
        "wrong": "Do this then that then do another thing.",
        "right": "First, ensure X is connected; then, proceed to Y. Finally, save your work.",
        "hint": "tap to see clear instruction sequencing",
        "checklist": [
            "Sequence instructions using 'First, ensure...; then, proceed to...'",
            "Highlight final steps with 'Finally, don't forget to...'"
        ],
        "quiz": [
            {
                "q": "What is an effective way to sequence procedural instructions?",
                "opts": ["Do everything at once.", "First, ensure X is connected; then, proceed to Y.", "Just figure it out."],
                "correct": 1,
                "explain": "Using sequence markers ('First', 'then', 'Next', 'Finally') ensures clarity."
            },
            {
                "q": "Which phrase emphasizes a safety or verification step before proceeding?",
                "opts": ["Before continuing, verify that...", "Skip everything.", "Whatever happens happens."],
                "correct": 0,
                "explain": "'Before continuing, verify that...' ensures key prerequisites are met."
            }
        ]
    },
    # 29. Summarizing Meetings
    {
        "slug": "summarizing-meetings",
        "title": "Summarizing Meetings",
        "eyebrow": "CEFR B1 Workplace & Meetings",
        "subtitle": "Wrapping up discussions, confirming key action items, and assigning deadlines.",
        "outcome": "You can summarize meeting outcomes, confirm action items, and establish accountability.",
        "chips": [
            "To wrap up, our main action items are...",
            "Just to recap what we've agreed on today,...",
            "John will take charge of X, while Sarah handles Y.",
            "Our next milestone deadline is set for..."
        ],
        "map": [
            ("Wrap-Up Signal", "To wrap up, our main action items from today's discussion are clear."),
            ("Recap & Assignments", "Just to recap: John will take charge of the market research, while Sarah handles the design."),
            ("Deadline Confirmation", "Our next milestone deadline is set for next Thursday. Thank you everyone!")
        ],
        "examples": [
            "To summarize our key takeaways: we are proceeding with Option B subject to client approval.",
            "I will circulate the meeting minutes along with assigned deadlines by end of day."
        ],
        "wrong": "Meeting over, bye.",
        "right": "To wrap up, our main action items are... Just to recap what we agreed on...",
        "hint": "tap to see professional meeting summaries",
        "checklist": [
            "Conclude meetings using 'To wrap up, our main action items are...'",
            "Recap responsibilities with 'Just to recap what we've agreed on...'"
        ],
        "quiz": [
            {
                "q": "What is the ideal opener when concluding a business meeting?",
                "opts": ["Go home now.", "To wrap up, our main action items are...", "We talked too much."],
                "correct": 1,
                "explain": "'To wrap up, our main action items are...' signals a structured, actionable conclusion."
            },
            {
                "q": "How do you confirm assigned responsibilities during a summary?",
                "opts": ["Just to recap what we've agreed on today...", "Who cares who does it.", "Figure it out later."],
                "correct": 0,
                "explain": "'Just to recap what we've agreed on...' ensures all participants are aligned on duties."
            }
        ]
    },
    # 30. Asking for Favors
    {
        "slug": "asking-for-favors",
        "title": "Asking for Favors",
        "eyebrow": "CEFR B1 Social & Interpersonal",
        "subtitle": "Requesting personal or professional assistance politely and softly.",
        "outcome": "You can ask for favors politely without imposing on others.",
        "chips": [
            "Would you mind doing me a huge favor?",
            "I know you're busy, but could you possibly give me a hand with...?",
            "I'd be extremely grateful if you could spare ten minutes to...",
            "Would it be too much trouble to ask you for...?"
        ],
        "map": [
            ("Softened Request", "Hi Sarah! Would you mind doing me a huge favor if you have a moment?"),
            ("Acknowledge Workload", "I know you're busy, but could you possibly give me a hand with proofreading this slide?"),
            ("Express Gratitude", "I'd be extremely grateful! I owe you one!")
        ],
        "examples": [
            "Would it be too much trouble to ask you to cover my desk for twenty minutes?",
            "I was wondering if you might have time to take a quick look at my report?"
        ],
        "wrong": "Do this for me right now.",
        "right": "Would you mind doing me a huge favor? I know you're busy, but could you give me a hand?",
        "hint": "tap to see polite favor requests",
        "checklist": [
            "Request favors gently using 'Would you mind doing me a huge favor?'",
            "Acknowledge the other person's time using 'I know you're busy, but...'"
        ],
        "quiz": [
            {
                "q": "Which phrase is a courteous, soft opening for asking a favor?",
                "opts": ["Do this for me.", "Would you mind doing me a huge favor?", "You must help me."],
                "correct": 1,
                "explain": "'Would you mind doing me a huge favor?' asks respectfully without being demanding."
            },
            {
                "q": "How do you show respect for someone's schedule when asking for help?",
                "opts": ["I know you're busy, but could you possibly give me a hand with...?", "Stop working and help me.", "You have nothing better to do."],
                "correct": 0,
                "explain": "Acknowledging their busy schedule shows tact and politeness."
            }
        ]
    },
    # 31. Expressing Gratitude
    {
        "slug": "expressing-gratitude",
        "title": "Expressing Gratitude",
        "eyebrow": "CEFR B1 Social & Interpersonal",
        "subtitle": "Conveying heartfelt appreciation for support, guidance, and favors.",
        "outcome": "You can express deep, professional gratitude beyond basic 'thank you' phrases.",
        "chips": [
            "I'm extremely grateful for your guidance.",
            "I can't thank you enough for all your support during...",
            "Your assistance has been invaluable to our team.",
            "I truly appreciate you taking the time to help me."
        ],
        "map": [
            ("Formal Thanks", "I'm extremely grateful for your guidance throughout this project."),
            ("Highlight Value", "Your assistance has been invaluable to our team during a challenging week."),
            ("Closing Appreciation", "I truly appreciate you taking the time to mentor me. Thank you again!")
        ],
        "examples": [
            "I can't thank you enough for stepping in on such short notice.",
            "Words cannot express how much I appreciate your generosity."
        ],
        "wrong": "Thanks bye.",
        "right": "I'm extremely grateful for your guidance; your help was invaluable.",
        "hint": "tap to see formal gratitude expressions",
        "checklist": [
            "Express formal gratitude using 'I'm extremely grateful for your guidance.'",
            "Acknowledge significant help with 'Your assistance has been invaluable.'"
        ],
        "quiz": [
            {
                "q": "What is an elevated, professional expression of gratitude?",
                "opts": ["Thanks a lot.", "I'm extremely grateful for your guidance.", "Good job."],
                "correct": 1,
                "explain": "'I'm extremely grateful for your guidance' is polished and formal."
            },
            {
                "q": "How can you compliment the importance of someone's help?",
                "opts": ["Your assistance has been invaluable to our team.", "You did okay.", "Thanks for nothing."],
                "correct": 0,
                "explain": "'Your assistance has been invaluable' conveys deep appreciation for impactful support."
            }
        ]
    },
    # 32. Apologizing for Errors
    {
        "slug": "apologizing-for-errors",
        "title": "Apologizing for Errors",
        "eyebrow": "CEFR B1 Workplace & Professionalism",
        "subtitle": "Taking full ownership of mistakes, offering sincere apologies, and outlining corrective actions.",
        "outcome": "You can apologize professionally for errors, accept responsibility, and outline immediate solutions.",
        "chips": [
            "I take full responsibility for the oversight.",
            "Please accept my sincere apologies for the delay in...",
            "It was an unfortunate mistake on my part, and I am taking steps to...",
            "I assure you this will not happen again."
        ],
        "map": [
            ("Ownership & Apology", "I take full responsibility for the oversight in yesterday's financial report."),
            ("Sincere Regret", "Please accept my sincere apologies for the delay this caused your team."),
            ("Corrective Measure", "I have updated the figures and put safeguards in place to ensure this does not happen again.")
        ],
        "examples": [
            "It was an unfortunate mistake on my part, and I appreciate your patience while I rectify it.",
            "I assure you this was an isolated incident and will not recur."
        ],
        "wrong": "It wasn't a big deal, don't worry.",
        "right": "I take full responsibility for the oversight and offer my sincere apologies.",
        "hint": "tap to see professional apology framing",
        "checklist": [
            "Take ownership of errors using 'I take full responsibility for the oversight.'",
            "Offer formal apologies using 'Please accept my sincere apologies for...'"
        ],
        "quiz": [
            {
                "q": "What is the most professional way to take accountability for a mistake at work?",
                "opts": ["Blame the intern.", "I take full responsibility for the oversight.", "Mistakes happen to anyone."],
                "correct": 1,
                "explain": "'I take full responsibility for the oversight' shows leadership and accountability."
            },
            {
                "q": "Which phrase provides a formal, sincere apology?",
                "opts": ["My bad!", "Please accept my sincere apologies for the delay in...", "Sorry I guess."],
                "correct": 1,
                "explain": "'Please accept my sincere apologies...' is formal workplace English."
            }
        ]
    },
    # 33. Speculating on Options
    {
        "slug": "speculating-on-options",
        "title": "Speculating on Options",
        "eyebrow": "CEFR B1 Opinions & Discussions",
        "subtitle": "Exploring possibilities, hypothetical scenarios, and potential choices.",
        "outcome": "You can speculate on potential options and evaluate hypothetical scenarios during discussions.",
        "chips": [
            "One possibility might be to...",
            "Assuming that X happens, we could potentially...",
            "It's conceivable that we might need to...",
            "What if we were to explore...?"
        ],
        "map": [
            ("Propose Possibility", "One possibility might be to partner with a local distribution agency."),
            ("Hypothetical Outcome", "Assuming that market demand increases, we could potentially double our orders."),
            ("Evaluate Scenario", "It's conceivable that initial costs might be higher, but long-term gains look promising.")
        ],
        "examples": [
            "What if we were to explore alternative suppliers in Europe?",
            "There's a strong chance that regulations might change next year."
        ],
        "wrong": "We will do X 100% no doubt.",
        "right": "One possibility might be to partner with a local supplier. Assuming that happens, we could...",
        "hint": "tap to see speculative phrasing",
        "checklist": [
            "Speculate on potential choices using 'One possibility might be to...'",
            "Build hypothetical scenarios with 'Assuming that..., we could potentially...'"
        ],
        "quiz": [
            {
                "q": "Which phrase is useful for opening a speculative discussion on solutions?",
                "opts": ["There is only one solution.", "One possibility might be to...", "Don't guess."],
                "correct": 1,
                "explain": "'One possibility might be to...' introduces a potential option without committing prematurely."
            },
            {
                "q": "How do you frame a conditional assumption when exploring choices?",
                "opts": ["Assuming that X happens, we could potentially...", "X is happening for sure.", "Forget X."],
                "correct": 0,
                "explain": "'Assuming that X happens...' sets up a hypothetical premise for speculation."
            }
        ]
    },
    # 34. Comparing Alternatives
    {
        "slug": "comparing-alternatives",
        "title": "Comparing Alternatives",
        "eyebrow": "CEFR B1 Opinions & Discussions",
        "subtitle": "Weighing competing options, costs, and value propositions systematically.",
        "outcome": "You can compare different alternatives side-by-side using structured comparative expressions.",
        "chips": [
            "While Option A offers speed, Option B provides better value.",
            "In comparison to X, Y is far more cost-effective.",
            "When you weigh X against Y, the advantages of Y become clear.",
            "On the one hand X, but on the other hand Y..."
        ],
        "map": [
            ("Side-by-Side Comparison", "While Option A offers faster delivery, Option B provides far better long-term value."),
            ("Cost-Benefit Contrast", "In comparison to traditional advertising, digital marketing is far more targetable."),
            ("Decision Synthesis", "When you weigh the initial setup cost against ongoing efficiency, Option B is the clear choice.")
        ],
        "examples": [
            "On the one hand, staying in-house gives us control, but on the other hand, outsourcing saves time.",
            "Compared to last year's figures, our customer satisfaction scores are noticeably higher."
        ],
        "wrong": "A is good B is bad.",
        "right": "While Option A offers speed, Option B provides better value. In comparison to X, Y is better.",
        "hint": "tap to see comparative structure frames",
        "checklist": [
            "Contrast alternatives using 'While Option A offers..., Option B provides...'",
            "Weigh options side-by-side with 'In comparison to X, Y is...'"
        ],
        "quiz": [
            {
                "q": "How do you balance two contrasting features of competing proposals?",
                "opts": ["A is better.", "While Option A offers speed, Option B provides better value.", "I choose both."],
                "correct": 1,
                "explain": "'While Option A offers [feature], Option B provides [feature]' balances both options fairly."
            },
            {
                "q": "Which transition clearly highlights comparative cost-effectiveness?",
                "opts": ["In comparison to X, Y is far more cost-effective.", "X and Y are words.", "Don't compare."],
                "correct": 0,
                "explain": "'In comparison to X, Y is...' sets up a clear side-by-side evaluation."
            }
        ]
    },
    # 35. Expressing Preferences
    {
        "slug": "expressing-preferences",
        "title": "Expressing Preferences",
        "eyebrow": "CEFR B1 Opinions & Discussions",
        "subtitle": "Stating personal or strategic preferences using nuanced structures.",
        "outcome": "You can express strong or conditional preferences clearly using 'would rather' and 'prefer'.",
        "chips": [
            "I would much rather invest in X than Y.",
            "My personal preference would be to...",
            "Given the choice between X and Y, I'd favor...",
            "I'd strongly lean towards Option A because..."
        ],
        "map": [
            ("State Direct Preference", "I would much rather invest in staff training than new software right now."),
            ("Provide Rationale", "Given the choice between the two, I'd favor training because human skills last longer."),
            ("Confirm Choice", "I'd strongly lean towards Option A for our quarterly focus.")
        ],
        "examples": [
            "My personal preference would be to hold the meeting online to save travel time.",
            "I would prefer to launch in spring rather than late winter."
        ],
        "wrong": "I want X not Y.",
        "right": "I would much rather invest in X than Y. Given the choice, I'd favor Option A.",
        "hint": "tap to see preference grammar structures",
        "checklist": [
            "State preferences clearly using 'I would much rather... than...'",
            "Express inclination using 'I'd strongly lean towards... because...'"
        ],
        "quiz": [
            {
                "q": "What is the correct grammatical structure using 'would rather'?",
                "opts": ["I would rather to invest in X.", "I would much rather invest in X than Y.", "I would rather investing in X."],
                "correct": 1,
                "explain": "'would rather [bare infinitive] ... than [bare infinitive]' is the correct structure."
            },
            {
                "q": "How do you express a soft inclination toward a decision?",
                "opts": ["I'd strongly lean towards Option A because...", "I am forcing Option A.", "Option A is only option."],
                "correct": 0,
                "explain": "'I'd strongly lean towards...' expresses a clear preference diplomatically."
            }
        ]
    },
    # 36. Checking Progress
    {
        "slug": "checking-progress",
        "title": "Checking Progress",
        "eyebrow": "CEFR B1 Workplace & Management",
        "subtitle": "Inquiring about project milestones, status updates, and potential delays.",
        "outcome": "You can check project progress and request status reports professionally.",
        "chips": [
            "How are we coming along with the quarterly targets?",
            "Could you give me a quick status update on...?",
            "Are we still on track to meet Friday's deadline?",
            "Has there been any progress on resolving the issue with...?"
        ],
        "map": [
            ("Progress Inquiry", "Good morning team! How are we coming along with the quarterly targets?"),
            ("Status Update", "Could you give me a quick status update on the software testing phase?"),
            ("Deadline Verification", "Are we still on track to deliver the final report by Friday afternoon?")
        ],
        "examples": [
            "Has there been any progress on resolving the customer login bug?",
            "Please let me know if you encounter any roadblocks that might delay delivery."
        ],
        "wrong": "Are you finished yet? Hurry up.",
        "right": "How are we coming along with the targets? Could you give me a quick status update?",
        "hint": "tap to see progress inquiry frames",
        "checklist": [
            "Inquire about status using 'How are we coming along with...?'",
            "Verify deadlines using 'Are we still on track to meet...?'"
        ],
        "quiz": [
            {
                "q": "What is a natural workplace phrase for asking about progress on a goal?",
                "opts": ["Why aren't you done?", "How are we coming along with the quarterly targets?", "Do your work."],
                "correct": 1,
                "explain": "'How are we coming along with...?' is encouraging and professional."
            },
            {
                "q": "How do you check if a project is adhering to its schedule?",
                "opts": ["Are we still on track to meet Friday's deadline?", "Is Friday coming?", "Are you slow?"],
                "correct": 0,
                "explain": "'Are we still on track to meet...?' verifies schedule alignment."
            }
        ]
    },
    # 37. Leaving Professional Messages
    {
        "slug": "leaving-professional-messages",
        "title": "Leaving Professional Messages",
        "eyebrow": "CEFR B1 Phone & Remote",
        "subtitle": "Voicemail etiquette, leaving clear callbacks, and detailing reasons for calling.",
        "outcome": "You can leave concise, professional voicemail messages with clear callback details.",
        "chips": [
            "Please ask him to return my call regarding the contract.",
            "This is [Name] calling from [Company] regarding...",
            "You can reach me at [Phone Number] until 5 PM today.",
            "I'm calling to follow up on our previous discussion about..."
        ],
        "map": [
            ("Identify & Purpose", "Hello, this is Mark calling from COSYlanguages regarding our upcoming training proposal."),
            ("Call to Action", "Please ask him to return my call when he is available."),
            ("Contact & Window", "You can reach me at 555-0192 until 5 PM today. Thank you, and have a good day!")
        ],
        "examples": [
            "I'm calling to follow up on the invoice sent last Tuesday.",
            "No urgent action is needed; I will try calling back tomorrow morning."
        ],
        "wrong": "Call me back now. Bye.",
        "right": "Please ask him to return my call regarding the contract. You can reach me at...",
        "hint": "tap to see voicemail message frames",
        "checklist": [
            "Request callbacks politely using 'Please ask him/her to return my call regarding...'",
            "Provide contact info clearly with 'You can reach me at... until...'"
        ],
        "quiz": [
            {
                "q": "What is the standard phrase for requesting a phone callback via a receptionist?",
                "opts": ["Tell him to call me.", "Please ask him to return my call regarding the contract.", "I demand a call."],
                "correct": 1,
                "explain": "'Please ask him to return my call regarding...' is professional and gives context."
            },
            {
                "q": "How should you state your phone number and availability in a voicemail?",
                "opts": ["You can reach me at [Number] until 5 PM today.", "My phone is on.", "Call whenever."],
                "correct": 0,
                "explain": "Providing phone number and precise availability window ensures effective follow-up."
            }
        ]
    },
    # 38. Public Announcements Handling
    {
        "slug": "public-announcements-handling",
        "title": "Public Announcements Handling",
        "eyebrow": "CEFR B1 Travel & Public Services",
        "subtitle": "Understanding and responding to travel, airport, and public venue announcements.",
        "outcome": "You can comprehend and communicate critical information from public announcements.",
        "chips": [
            "Attention passengers on flight BA302 to London...",
            "We regret to announce a delay due to weather conditions.",
            "Please proceed to Gate 14 immediately for boarding.",
            "Passengers requiring special assistance are invited to board first."
        ],
        "map": [
            ("Attention Call", "Attention passengers on flight BA302 to London Heathrow."),
            ("Announcement Reason", "We regret to announce a 20-minute delay due to adverse weather conditions."),
            ("Boarding Call", "Passengers for Gate 14 are now invited to proceed to the boarding area.")
        ],
        "examples": [
            "Please have your boarding pass and passport ready for inspection.",
            "This is the final call for passenger Smith traveling to Paris."
        ],
        "wrong": "Flight delayed. Go gate.",
        "right": "Attention passengers on flight BA302... Please proceed to Gate 14 immediately.",
        "hint": "tap to see formal public announcement language",
        "checklist": [
            "Identify public broadcast structures using 'Attention passengers on...'",
            "Understand delay notices using 'We regret to announce a delay due to...'"
        ],
        "quiz": [
            {
                "q": "What is the standard opening phrase for airport public announcements?",
                "opts": ["Listen everybody!", "Attention passengers on flight BA302...", "Hey passengers!"],
                "correct": 1,
                "explain": "'Attention passengers on...' is the formal universal opening call."
            },
            {
                "q": "Which phrase directs passengers to move to their departure area?",
                "opts": ["Please proceed to Gate 14 immediately for boarding.", "Walk away.", "Go somewhere else."],
                "correct": 0,
                "explain": "'Please proceed to [Gate] immediately for boarding' is clear directional instructions."
            }
        ]
    },
    # 39. Describing Problems in Detail
    {
        "slug": "describing-problems-in-detail",
        "title": "Describing Problems in Detail",
        "eyebrow": "CEFR B1 Service & Technical",
        "subtitle": "Explaining root causes, technical failures, and operational breakdowns accurately.",
        "outcome": "You can describe complex problems and technical malfunctions with precision.",
        "chips": [
            "The primary issue stems from a failure in...",
            "We have encountered a major malfunction with...",
            "The problem seems to be caused by a glitch in...",
            "Upon further investigation, we discovered that..."
        ],
        "map": [
            ("Identify Malfunction", "We have encountered a major malfunction with our online payment gateway."),
            ("Root Cause Analysis", "The primary issue stems from a failure in the database server synchronization."),
            ("Discovery & Action", "Upon further investigation, our engineers discovered a bug in the recent update.")
        ],
        "examples": [
            "The problem seems to be caused by an unexpected spike in web traffic.",
            "We are working diligently to restore full service within the hour."
        ],
        "wrong": "It is broken and doesn't work at all.",
        "right": "The primary issue stems from a failure in the server. Upon further investigation...",
        "hint": "tap to see precise problem description frames",
        "checklist": [
            "Describe root causes using 'The primary issue stems from a failure in...'",
            "Report technical discoveries using 'Upon further investigation, we discovered that...'"
        ],
        "quiz": [
            {
                "q": "What is a sophisticated way to explain the root cause of an issue?",
                "opts": ["It broke down.", "The primary issue stems from a failure in...", "Things went bad."],
                "correct": 1,
                "explain": "'The primary issue stems from...' identifies the fundamental cause of a problem."
            },
            {
                "q": "How do you introduce diagnostic findings after examining a problem?",
                "opts": ["Upon further investigation, we discovered that...", "I looked at it.", "We found stuff."],
                "correct": 0,
                "explain": "'Upon further investigation...' is formal and professional."
            }
        ]
    },
    # 40. Formal vs Informal Register Switch
    {
        "slug": "formal-vs-informal-register-switch",
        "title": "Formal vs Informal Register Switch",
        "eyebrow": "CEFR B1 Register & Style",
        "subtitle": "Adapting vocabulary, greetings, and syntax between casual and professional contexts.",
        "outcome": "You can switch registers seamlessly between casual conversation and formal business situations.",
        "chips": [
            "Casual: Hi mate ➔ Formal: Dear Mr. Smith",
            "Casual: Thanks a lot ➔ Formal: I sincerely appreciate it",
            "Casual: Sorry about that ➔ Formal: Please accept my apologies",
            "Casual: See ya later ➔ Formal: I look forward to our next meeting"
        ],
        "map": [
            ("Greeting Switch", "Casual: 'Hey John, what's up?' ➔ Formal: 'Dear Mr. Davis, I hope this email finds you well.'"),
            ("Request Switch", "Casual: 'Can you fix this?' ➔ Formal: 'I would appreciate it if you could review this document.'"),
            ("Closing Switch", "Casual: 'Cheers!' ➔ Formal: 'Sincerely yours, / Best regards,'")
        ],
        "examples": [
            "Informal: 'Got it, thanks!' ➔ Formal: 'I acknowledge receipt of your document, thank you.'",
            "Informal: 'Need any help?' ➔ Formal: 'Please let me know if I can be of any assistance.'"
        ],
        "wrong": "Writing 'Hey mate, fix this asap' to a corporate CEO client.",
        "right": "Dear Mr. Davis, I would appreciate it if you could assist with this matter at your convenience.",
        "hint": "tap to see register transformation examples",
        "checklist": [
            "Switch greetings between 'Hi mate' and 'Dear Mr. Smith'",
            "Adapt gratitude expressions between 'Thanks a lot' and 'I sincerely appreciate it'"
        ],
        "quiz": [
            {
                "q": "What is the formal equivalent of 'Thanks a lot'?",
                "opts": ["Thanks!", "I sincerely appreciate it.", "Cheerio."],
                "correct": 1,
                "explain": "'I sincerely appreciate it' is the formal register equivalent."
            },
            {
                "q": "Which formal greeting replaces 'Hey mate' in professional correspondence?",
                "opts": ["Dear Mr. Smith,", "Yo Smith,", "What's up Smith?"],
                "correct": 0,
                "explain": "'Dear Mr. Smith,' is standard formal correspondence."
            }
        ]
    }
]

def render_topbar():
    return """<header class="topbar">
 <div class="topbar-inner">
 <a class="brand" href="../index.html">
 <span class="brand-mark">cl</span>
 <span class="brand-name">COSY<em>languages</em> · Comm B1</span>
 </a>
 <nav class="topbar-nav">
 <a href="../../../../english-b1.html" style="font-weight:700;">← English Hub</a>
 <a href="../part-1.html">System 1</a>
<a href="../part-2.html">System 2</a>
<a href="../part-3.html">System 3</a>
<a href="../part-4.html">System 4</a>
<a href="../part-5.html">System 5</a>
<a href="../part-6.html">System 6</a>
<a href="../part-7.html">System 7</a>
<a href="../part-8.html">System 8</a>
<a href="../part-9.html">System 9</a>
<a href="../part-10.html">System 10</a>
 </nav>
 </div>
</header>"""

def render_footer():
    return """<footer class="site">
 <div class="container">
 <div>COSYlanguages · English Communication Manual (Level B1)</div>
 <div><a href="../../../../index.html">&larr; Back to cosylanguages.github.io</a></div>
 </div>
</footer>"""

def build_topic_page(t):
    chips_html = "\n    ".join([f'<span class="chip">{c}</span>' for c in t["chips"]])

    map_html_steps = []
    for idx, (step_title, step_text) in enumerate(t["map"], 1):
        map_html_steps.append(f'<div class="map-step"><span class="step-num">{idx}</span><div class="step-text"><b>{step_title}:</b> "{step_text}"</div></div>')
    map_steps_str = "\n  ".join(map_html_steps)

    examples_list = "\n  ".join([f'<li>{ex}</li>' for ex in t["examples"]])

    checklist_items = "\n ".join([f'<label class="check-item"><input type="checkbox"><span>{item}</span></label>' for item in t["checklist"]])

    quiz_json_data = []
    quiz_items_html = []
    for q_idx, q in enumerate(t["quiz"], 1):
        quiz_json_data.append({"correct": q["correct"]})
        opts_buttons = "".join([f'<button class="qopt">{opt}</button>' for opt in q["opts"]])
        quiz_items_html.append(f''' <div class="qitem">
  <div class="qtext">{q_idx}. '{q["q"]}'</div>
  <div class="qopts">{opts_buttons}</div>
  <div class="qexplain">{q["explain"]}</div>
 </div>''')

    quiz_json_str = str(quiz_json_data).replace("'", '"')
    quiz_items_str = "\n".join(quiz_items_html)

    html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{t["title"]} · COSYlanguages B1 Communication</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
{render_topbar()}
<main class="container">
<div class="page-head">
 <span class="eyebrow">{t["eyebrow"]}</span>
 <h1>{t["title"]}</h1>
 <p class="subtitle">{t["subtitle"]}</p>
 <hr class="rule">
</div>
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid #1c8f56; padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> {t["outcome"]}
</div>
<div class="building-blocks">
  <h3>🧩 Building Blocks: Key Functional Chips</h3>
  <div class="chip-grid">
    {chips_html}
  </div>
</div>
<div class="conversation-map">
  <h3>🗺️ {t["title"]} Dialogue Flow</h3>
  {map_steps_str}
</div>
<div class="examples">
  <span class="label">More Authentic Examples</span>
  <ul>
  {examples_list}
  </ul>
</div>
<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
 <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">{t["wrong"]}</span></div>
  <span class="hint">{t["hint"]}</span>
  <div class="right-line"><span class="c">✅</span><span>{t["right"]}</span></div>
 </div>
</div>
<div class="checklist" data-key="comm-{t['slug']}-b1">
 <h3>🎯 Can you already use this?</h3>
 {checklist_items}
 <div class="check-progress"></div>
</div>
<div class="quiz-panel" data-quiz='{quiz_json_str}'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / 2</span></div>
{quiz_items_str}
 <button class="quiz-reset">Reset quiz</button>
</div>
<div class="pager">
  <a class="prev" href="../index.html"><span class="dir">&larr; Back to Index</span><span class="ttl">COSYlanguages B1 Communication Index</span></a>
  <a class="next" href="../index.html"><span class="dir">Next Topic &rarr;</span><span class="ttl">Return to Master Manual</span></a>
</div>
</main>
{render_footer()}
<script src="../assets/app.js"></script>
</body>
</html>"""

    filepath = os.path.join(OUTPUT_DIR, f"{t['slug']}.html")
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)

def main():
    print(f"Generating {len(TOPICS_DATA)} topic pages in {OUTPUT_DIR}...")
    for t in TOPICS_DATA:
        build_topic_page(t)
    print("Done generating topic pages!")

if __name__ == "__main__":
    main()
