import json, re

with open('vocabulary/_canonical/en/B1_idioms_candidates.json', 'r') as f:
    raw_data = json.load(f)

# Idioms that are A1/A2 elementary phrases or basic collocations/phrasals to exclude
EXCLUDE_ELEMENTARY_OR_NON_IDIOM = {
    "no problem", "never mind", "good luck", "have a good time", "you are welcome", "by the way",
    "in fact", "at last", "on time", "in time", "for ever", "all day long", "from time to time",
    "again and again", "little by little", "side by side", "hand in hand", "face to face",
    "out of order", "at home", "at work", "in a hurry", "in love", "in trouble", "on foot",
    "on holiday", "on sale", "on tv", "on the phone", "out of town", "up to date",
    "as soon as possible", "all the best", "take a break", "take a seat", "take care",
    "have fun", "have a look", "make a decision", "make a mistake", "make friends",
    "make noise", "pay attention", "keep quiet", "keep clean", "get ready", "get lost",
    "get married", "get up", "go home", "go shopping", "go to sleep", "come in", "come on",
    "call back", "turn on", "turn off", "look for", "look at", "listen to", "wait for",
    "ask for", "talk about", "think about", "worry about", "care about", "belong to",
    "depend on", "laugh at", "smile at", "shout at", "point at", "arrive at", "arrive in",
    "believe in", "fill in", "find out", "grow up", "pick up", "put on", "take off",
    "throw away", "try on", "wake up", "write down", "at first", "at least", "at once",
    "at night", "by car", "by train", "by chance", "by mistake", "in a good mood",
    "in a bad mood", "in general", "in future", "in person", "in public", "on purpose",
    "on the way", "out of stock", "under control", "without doubt", "all the time",
    "and so on", "as well", "as well as", "at the moment", "at the same time", "for example",
    "in the end", "in my opinion", "to sum up", "first of all", "last but not least",
    "step by step", "right now"
}

# Advanced/obscure C1/C2 idioms to exclude from B1 set
EXCLUDE_C1_C2 = {
    "shot across the bows", "close the stable door after the horse has bolted", "at loggerheads",
    "in the offing", "not playing with a full deck", "a snowball's chance in hell",
    "barking up the wrong tree", "burn the candle at both ends", "curiosity killed the cat",
    "dime a dozen", "fly off the handle", "hear it through the grapevine", "jump on the bandwagon",
    "kick the bucket", "let sleeping dogs lie", "bite the dust", "method to one's madness",
    "penny wise and pound foolish", "steal someone's thunder", "straight from the horse's mouth",
    "throw caution to the wind", "when pigs fly"
}

# Clean definitions & example generator mapping for standard core B1 idioms
CURATED_B1_DEFINITIONS = {
    "piece of cake": ("Something that is very easy to do.", "The English test was a piece of cake."),
    "break a leg": ("Good luck (wished to a performer before a show).", "Break a leg at your concert tonight!"),
    "so far so good": ("Things have gone well up to now.", "How is the new job? So far so good!"),
    "time flies": ("Time passes surprisingly quickly.", "Time flies when you are having fun with friends."),
    "easy come, easy go": ("Money or success easily gained is easily lost.", "I lost my winnings, but easy come, easy go."),
    "better late than never": ("It is better to do something late than not at all.", "You finally arrived! Better late than never."),
    "make up your mind": ("To decide or make a decision.", "Please make up your mind about which course to take."),
    "keep in touch": ("To maintain contact with someone.", "Let us keep in touch after the course ends."),
    "day in, day out": ("Continuously; every single day.", "He practiced guitar day in, day out to improve."),
    "all in all": ("Considering everything; overall.", "All in all, the vacation was a great success."),
    "safe and sound": ("Unarmed and free from danger.", "They arrived home safe and sound after the long storm."),
    "first come, first served": ("People are served in the order of their arrival.", "Tickets are allocated first come, first served."),
    "give it a try": ("To attempt or try something.", "Even if it looks difficult, give it a try."),
    "cross your fingers": ("To hope for good luck or a favorable outcome.", "Cross your fingers that we win the game!"),
    "long time no see": ("It has been a long time since we last met.", "Long time no see! How have you been?"),
    "make yourself at home": ("To feel comfortable and relaxed in someone else's home.", "Please sit down and make yourself at home."),
    "take it easy": ("To relax and rest.", "Take it easy this weekend after a busy week at work."),
    "as good as new": ("In very good condition, like new.", "After repairs, the bicycle was as good as new."),
    "take your time": ("Do not hurry; work at a comfortable pace.", "Take your time answering the test questions."),
    "sooner or later": ("Eventually; at some point in the future.", "Sooner or later, you will master English grammar."),
    "over and over": "Repeatedly many times.",
    "under the weather": ("Feeling slightly unwell or sick.", "I am feeling a bit under the weather today."),
    "once in a blue moon": ("Very rarely or almost never.", "He visits the museum once in a blue moon."),
    "spill the beans": ("To reveal a secret unexpectedly.", "Don't spill the beans about the surprise party!"),
    "lend a hand": ("To help someone.", "Could you lend me a hand with these heavy boxes?"),
    "in the same boat": ("In the same difficult situation as others.", "We are all in the same boat during these exams."),
    "see eye to eye": ("To agree with someone completely.", "My brother and I do not always see eye to eye."),
    "cost an arm and a leg": ("To be extremely expensive.", "Buying a brand new car can cost an arm and a leg."),
    "rule of thumb": ("A practical, approximate rule for doing something.", "As a rule of thumb, review vocabulary every morning."),
    "sleep on it": ("To delay making a decision until the next day.", "Don't decide now; sleep on it and tell me tomorrow."),
    "break the ice": ("To make people feel more comfortable in a new situation.", "An icebreaker game helps break the ice in class."),
    "out of the blue": ("Suddenly and unexpectedly.", "She called me out of the blue after five years."),
    "a drop in the ocean": ("A tiny amount compared to what is needed.", "One dollar is just a drop in the ocean."),
    "back to square one": ("Back to the very beginning after a failure.", "The experiment failed, so we are back to square one."),
    "on the fence": ("Undecided between two options.", "He is still on the fence about moving to London."),
    "miss the boat": ("To miss an opportunity.", "If you don't apply today, you will miss the boat."),
    "keep an eye on": ("To watch or look after carefully.", "Please keep an eye on my bag while I buy water."),
    "pain in the neck": ("Someone or something that is annoying.", "Traffic jams during rush hour are a pain in the neck."),
    "beat the clock": ("To finish something before time runs out.", "We worked fast and managed to beat the clock."),
    "call it a day": ("To stop working on something for the rest of the day.", "We have worked for eight hours; let's call it a day."),
    "face the music": ("To accept the unpleasant consequences of one's actions.", "He broke the window and had to face the music."),
    "fish out of water": ("Someone who feels uncomfortable in a strange environment.", "I felt like a fish out of water at the formal dinner."),
    "hot potato": ("A controversial or difficult subject.", "The topic of taxes is a political hot potato."),
    "in hot water": ("In trouble or facing difficulty.", "He got into hot water for forgetting his homework."),
    "keep your chin up": ("To remain cheerful and confident in tough times.", "Keep your chin up! Things will get better soon."),
    "make ends meet": ("To earn just enough money to pay for basic needs.", "It can be tough for students to make ends meet."),
    "no pain, no gain": ("You must work hard to achieve success.", "Exercising is tough, but no pain, no gain!"),
    "off the record": ("Unofficial and not meant to be published.", "The manager spoke off the record about the plans."),
    "on cloud nine": ("Extremely happy and joyful.", "She was on cloud nine after passing her driving test."),
    "peace of mind": ("A feeling of calm and freedom from worry.", "Knowing the car is insured gives me peace of mind."),
    "pull yourself together": ("To calm down and control your emotions.", "Stop crying, pull yourself together, and try again."),
    "raining cats and dogs": ("Raining very heavily.", "Don't forget your umbrella; it is raining cats and dogs!"),
    "save for a rainy day": ("To save money for future unexpected needs.", "It is wise to save a portion of your income for a rainy day."),
    "speak of the devil": ("Said when a person appears just as they are mentioned.", "Speak of the devil! We were just talking about you."),
    "take with a grain of salt": ("To view something with skepticism.", "Take online rumors with a grain of salt."),
    "the best of both worlds": ("An ideal situation enjoying two different advantages.", "Working remotely gives her the best of both worlds."),
    "under lock and key": ("Stored securely and locked away.", "Important documents are kept under lock and key."),
    "walking on air": ("Feeling extremely happy and excited.", "After winning the award, he was walking on air."),
    "all ears": ("Eager and attentive to listen.", "Tell me your story; I am all ears."),
    "bite your tongue": ("To stop yourself from saying something rude or unwise.", "I wanted to argue, but I decided to bite my tongue."),
    "blow off steam": ("To release stress or pent-up energy.", "He goes running after work to blow off steam."),
    "call the shots": ("To make the important decisions.", "The director is the one who calls the shots here."),
    "change one's mind": ("To alter one's opinion or decision.", "She changed her mind and chose the green dress."),
    "cool as a cucumber": ("Calm and composed under pressure.", "During the job interview, she remained cool as a cucumber."),
    "down in the dumps": ("Feeling sad or depressed.", "He has been down in the dumps since losing the game."),
    "drive someone crazy": ("To annoy or frustrate someone greatly.", "Loud noise late at night drives me crazy."),
    "easier said than done": ("Easier to talk about than to actually accomplish.", "Losing weight is definitely easier said than done."),
    "lose one's temper": ("To become suddenly very angry.", "Try not to lose your temper when solving conflicts."),
    "shed light on": ("To clarify or provide new information about a topic.", "The study shed new light on language learning."),
    "arm in arm": ("Walking together with arms linked.", "The couple walked arm in arm along the beach."),
    "count on someone": ("To rely on or trust someone for support.", "You can always count on your best friends."),
    "fall in love": ("To begin to feel romantic love for someone.", "They fell in love while attending university together."),
    "go viral": ("To become popular very quickly on the internet.", "The funny cat video went viral overnight."),
    "learn by heart": ("To memorize something completely.", "In school, we had to learn poems by heart."),
    "show up": ("To arrive or appear at a place.", "He finally showed up an hour late to the meeting."),
    "bite the bullet": ("To face a difficult situation with courage.", "I hate going to the dentist, but I had to bite the bullet."),
    "a shot in the dark": ("A complete guess without firm evidence.", "His answer was just a shot in the dark, but it was right."),
    "beat around the bush": ("To avoid speaking directly about a topic.", "Stop beating around the bush and tell me the truth."),
    "down to earth": ("Practical, realistic, and unpretentious.", "Despite her fame, the author is very down to earth."),
    "in a nutshell": ("In a very brief and concise summary.", "In a nutshell, the project was a complete success."),
    "up in the air": ("Uncertain or not yet settled.", "Our holiday travel plans are still up in the air."),
    "ignorance is bliss": ("Sometimes it is happier not knowing uncomfortable facts.", "I didn't know about the delay, but ignorance is bliss."),
    "drive someone up the wall": ("To annoy or irritate someone intensely.", "The sound of dripping water drives me up the wall."),
    "on a roll": ("Experiencing a continuous period of success.", "Our team has won five matches in a row; we are on a roll."),
    "sit on the fence": ("To remain neutral and refrain from choosing sides.", "You can't sit on the fence forever; make a choice."),
    "foot the bill": ("To pay the costs or expense for something.", "The company agreed to foot the bill for the dinner."),
    "keep your cool": ("To stay calm in a stressful situation.", "It is crucial to keep your cool during emergencies."),
    "dig one's heels in": ("To stubbornly refuse to change one's position.", "He dug his heels in and refused to compromise."),
    "meet halfway": ("To reach a compromise with someone.", "We managed to meet halfway on the price of the car."),
    "leave no stone unturned": ("To search thoroughly and try every possible option.", "Investigators left no stone unturned during the search."),
    "drive a hard bargain": ("To negotiate firmly and insist on favorable terms.", "The seller drove a hard bargain during negotiations."),
    "pass the baton": ("To hand over responsibility to a successor.", "The veteran manager passed the baton to the young executive."),
    "take the bull by the horns": ("To confront a difficult situation directly.", "She decided to take the bull by the horns and deal with the issue."),
    "no hard feelings": ("No resentment or anger after a disagreement.", "We lost the contract, but there are no hard feelings."),
    "on the go": ("Very busy and constantly active.", "As a working mother, she is always on the go."),
    "a penny for your thoughts": ("A way of asking what someone is thinking about.", "You look quiet today; a penny for your thoughts?"),
    "fine line": ("A subtle distinction between two different concepts.", "There is a fine line between confidence and arrogance.")
}

words_schema = []

seen = set()

for entry in raw_data:
    w = entry['word'].strip()
    w_lower = w.lower()

    if w_lower in EXCLUDE_ELEMENTARY_OR_NON_IDIOM or w_lower in EXCLUDE_C1_C2:
        continue
    if w_lower in seen:
        continue
    seen.add(w_lower)

    # Check if curated
    def_text = f"Idiomatic expression: '{w}'"
    example_text = f"Example sentence using '{w}'."

    if w_lower in CURATED_B1_DEFINITIONS:
        val = CURATED_B1_DEFINITIONS[w_lower]
        if isinstance(val, tuple):
            def_text, example_text = val
        else:
            def_text = val

    # Generate normalized word_id
    normalized_id = re.sub(r'[^a-z0-9]+', '_', w_lower).strip('_')
    word_id = f"en_idiom_{normalized_id}"

    words_schema.append({
        "word": w,
        "word_id": word_id,
        "pos": "idiom",
        "definition": def_text,
        "example": example_text
    })

schema_payload = {
    "language": "en",
    "level": "B1",
    "topic": "Idioms & Expressions",
    "words": words_schema
}

with open('vocabulary/_canonical/en/b1_idioms_cleaned.json', 'w') as out_f:
    json.dump(schema_payload, out_f, indent=2)

print(f"Generated clean B1 idioms file with {len(words_schema)} entries at vocabulary/_canonical/en/b1_idioms_cleaned.json")
