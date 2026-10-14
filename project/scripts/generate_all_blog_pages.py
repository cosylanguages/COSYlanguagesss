import os
import json

LANGUAGES = [
    {"code": "en", "name": "English", "flag": "🇬🇧", "slug": "english"},
    {"code": "fr", "name": "French", "flag": "🇫🇷", "slug": "french"},
    {"code": "it", "name": "Italian", "flag": "🇮🇹", "slug": "italian"},
    {"code": "ru", "name": "Russian", "flag": "🇷🇺", "slug": "russian"},
    {"code": "el", "name": "Greek", "flag": "🇬🇷", "slug": "greek"},
    {"code": "es", "name": "Spanish", "flag": "🇪🇸", "slug": "spanish"},
    {"code": "de", "name": "German", "flag": "🇩🇪", "slug": "german"},
    {"code": "pt", "name": "Portuguese", "flag": "🇵🇹", "slug": "portuguese"},
    {"code": "hy", "name": "Armenian", "flag": "🇦🇲", "slug": "armenian"},
    {"code": "ka", "name": "Georgian", "flag": "🇬🇪", "slug": "georgian"},
    {"code": "tt", "name": "Tatar", "flag": "🏴", "slug": "tatar"},
    {"code": "ba", "name": "Bashkir", "flag": "🏴", "slug": "bashkir"},
    {"code": "br", "name": "Breton", "flag": "🏴", "slug": "breton"},
]

# Generate 100 A0-A1 Nouns, Verbs, Adjectives, Phrases data per language
# For English and target language translations

DATA = {
    "en": {
        "nouns": [
            # People & Family
            {"theme": "People & Family", "word": "Person", "trans": "Person", "ant": "Crowd", "ex": "I am a person."},
            {"theme": "People & Family", "word": "Family", "trans": "Family", "ant": "Stranger", "ex": "My family is here."},
            {"theme": "People & Family", "word": "Mother / Father", "trans": "Mother / Father", "ant": "Child", "ex": "My mother and father are kind."},
            {"theme": "People & Family", "word": "Son / Daughter", "trans": "Son / Daughter", "ant": "Parent", "ex": "They have one son and one daughter."},
            {"theme": "People & Family", "word": "Brother / Sister", "trans": "Brother / Sister", "ant": "Only child", "ex": "My brother and sister live in London."},
            {"theme": "People & Family", "word": "Friend", "trans": "Friend", "ant": "Enemy", "ex": "She is a good friend."},
            {"theme": "People & Family", "word": "Child / Adult", "trans": "Child / Adult", "ant": "Adult / Child", "ex": "The child is playing."},
            {"theme": "People & Family", "word": "Man / Woman", "trans": "Man / Woman", "ant": "Woman / Man", "ex": "A man and a woman arrived."},

            # Home & Objects
            {"theme": "Home & Objects", "word": "House", "trans": "House", "ant": "Street", "ex": "This is my house."},
            {"theme": "Home & Objects", "word": "Room", "trans": "Room", "ant": "Outdoors", "ex": "The room is clean."},
            {"theme": "Home & Objects", "word": "Table", "trans": "Table", "ant": "Floor", "ex": "The book is on the table."},
            {"theme": "Home & Objects", "word": "Chair", "trans": "Chair", "ant": "Bed", "ex": "Please sit on the chair."},
            {"theme": "Home & Objects", "word": "Door", "trans": "Door", "ant": "Window", "ex": "Open the door."},
            {"theme": "Home & Objects", "word": "Window", "trans": "Window", "ant": "Wall", "ex": "Close the window."},
            {"theme": "Home & Objects", "word": "Book", "trans": "Book", "ant": "Notebook", "ex": "I have a new book."},
            {"theme": "Home & Objects", "word": "Phone", "trans": "Phone", "ant": "Computer", "ex": "Where is my phone?"},

            # Food & Drink
            {"theme": "Food & Drink", "word": "Water", "trans": "Water", "ant": "Fire", "ex": "I drink water."},
            {"theme": "Food & Drink", "word": "Bread", "trans": "Bread", "ant": "Butter", "ex": "Fresh bread is delicious."},
            {"theme": "Food & Drink", "word": "Food", "trans": "Food", "ant": "Hunger", "ex": "The food is ready."},
            {"theme": "Food & Drink", "word": "Tea / Coffee", "trans": "Tea / Coffee", "ant": "Juice", "ex": "Do you prefer tea or coffee?"},
            {"theme": "Food & Drink", "word": "Apple / Fruit", "trans": "Apple / Fruit", "ant": "Vegetable", "ex": "An apple a day keeps the doctor away."},

            # Time & Places
            {"theme": "Time & Places", "word": "Day / Night", "trans": "Day / Night", "ant": "Night / Day", "ex": "I study during the day."},
            {"theme": "Time & Places", "word": "Morning / Evening", "trans": "Morning / Evening", "ant": "Evening / Morning", "ex": "Good morning!"},
            {"theme": "Time & Places", "word": "City", "trans": "City", "ant": "Village", "ex": "London is a large city."},
            {"theme": "Time & Places", "word": "Street", "trans": "Street", "ant": "Park", "ex": "Walk along this street."},
            {"theme": "Time & Places", "word": "School", "trans": "School", "ant": "Office", "ex": "The school is open."}
        ]
    }
}

print("Base generator script structured.")
