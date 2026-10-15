/**
 * js/data/lang-config.js
 * Unified Language Page Configuration Matrix
 * Central data-driven store for language accent colors, greetings, native script titles, cultural taglines, and SVG motifs.
 */

window.COSY_LANG_CONFIG = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    greeting: 'Welcome to COSYenglish',
    tagline: 'Speak English with confidence. From Baby to Professor, speaking-first always.',
    accent: '#2a6099',
    accentDark: '#1a3f5c',
    accentPale: '#eef1fb',
    flag: '🇬🇧',
    motifSvg: '<svg class="lang-motif" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4"/><path d="M30 50H70M50 30V70" stroke="currentColor" stroke-width="2"/></svg>',
    levels: 'A1 → C2',
    megaMenu: [
      {
        group: 'Learn',
        accentKey: 'learn-free',
        items: [
          { key: 'grammar', title: 'Grammar Manuals', icon: '⚡', promise: 'Comprehensive rule explanations & form blueprints', href: 'grammar.html' },
          { key: 'vocabulary', title: 'Vocabulary & Collocations', icon: '📚', promise: 'Essential word lists, phrasal verbs & idioms', href: 'vocabulary.html' },
          { key: 'pronunciation', title: 'Pronunciation & Accent', icon: '🗣️', promise: 'IPA recipes, stress patterns & audio drills', href: 'pronunciation.html' },
          { key: 'curriculum', title: 'Full Curriculum Track', icon: '📖', promise: 'Structured A1–C2 communicative units', href: 'curriculum.html' }
        ]
      },
      {
        group: 'Practice free',
        accentKey: 'learn-free',
        items: [
          { key: 'practice', title: 'Interactive Practice', icon: '💡', promise: 'Free English exercises, quizzes & listening tasks', href: '../../practice/index.html?lang=EN' },
          { key: 'dictionary', title: 'COSYdata Dictionary', icon: '📖', promise: 'Centralized English vocabulary repository', href: 'https://cosylanguages.github.io/COSYdata/' },
          { key: 'tools', title: 'Verbs & Prepositions', icon: '⚙️', promise: 'Interactive engine for dependent prepositions', href: 'https://cosylanguages.github.io/COSYtools/en-verb-prep/index.html' },
          { key: 'games', title: 'Language Games', icon: '🎮', promise: 'Vocabulary & grammar games to test fluency', href: 'https://cosylanguages.github.io/COSYgames/?lang=EN' }
        ]
      },
      {
        group: 'Explore',
        accentKey: 'your-classes',
        items: [
          { key: 'blog', title: 'Blog & Top 100 Guides', icon: '📝', promise: 'Top 100 master lists, articles & podcasts', href: '../../blog/posts/top-100-a0-a1-english.html' },
          { key: 'media_culture', title: 'Media & Culture', icon: '🎭', promise: 'Live English radio, TV & streaming channels', href: '#media-culture' },
          { key: 'daily_life', title: 'Daily Life & Shopping', icon: '🛒', promise: 'Explore UK, US, CA & AU shops and services', href: '#daily-life' }
        ]
      },
      {
        group: 'Join in',
        accentKey: 'join-in',
        items: [
          { key: 'events', title: 'Events & Speaking Clubs', icon: '🎉', promise: 'Structured group speaking sessions with native tutors', href: '../../apps/premium-events/index.html' },
          { key: 'placement_quiz', title: 'Placement Quiz', icon: '📝', promise: 'Determine your English level in 5 minutes', href: '../../placement-quiz.html' },
          { key: 'book_now', title: 'Book English Lessons', icon: '💬', promise: 'Start 1-to-1 or group online lessons', href: 'https://wa.me/330766784195?text=Hi!%20I%27d%20like%20to%20start%20English%20lessons.' }
        ]
      }
    ]
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    greeting: 'Bienvenue sur COSYfrançais',
    tagline: 'Parlez français avec assurance et élégance dès le premier jour.',
    accent: '#4a6b50',
    accentDark: '#2e4a33',
    accentPale: '#e8f0e9',
    flag: '🇫🇷',
    motifSvg: '<svg class="lang-motif" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 20L80 80H20L50 20Z" stroke="currentColor" stroke-width="2"/><circle cx="50" cy="55" r="12" stroke="currentColor" stroke-width="2"/></svg>',
    levels: 'A1 → C2',
    megaMenu: [
      {
        group: 'Learn',
        accentKey: 'learn-free',
        items: [
          { key: 'grammar', title: 'Grammar Manuals', icon: '⚡', promise: 'French grammar rules & structural forms', href: 'grammar.html' },
          { key: 'vocabulary', title: 'Vocabulary & Collocations', icon: '📚', promise: 'Essential French vocabulary & collocations', href: 'vocabulary.html' },
          { key: 'pronunciation', title: 'Pronunciation & Accent', icon: '🗣️', promise: 'IPA sound recipes & French phonetic drills', href: 'pronunciation.html' },
          { key: 'curriculum', title: 'Full Curriculum Track', icon: '📖', promise: 'Structured A1–C2 French communicative units', href: 'curriculum.html' }
        ]
      },
      {
        group: 'Practice free',
        accentKey: 'learn-free',
        items: [
          { key: 'practice', title: 'Interactive Practice', icon: '💡', promise: 'Free French exercises & quizzes', href: '../../practice/index.html?lang=FR' },
          { key: 'dictionary', title: 'COSYdata Dictionary', icon: '📖', promise: 'Centralized French vocabulary repository', href: 'https://cosylanguages.github.io/COSYdata/' },
          { key: 'tools', title: 'Verbs & Prepositions', icon: '⚙️', promise: 'Interactive engine for French prepositions', href: 'https://cosylanguages.github.io/COSYtools/fr-verb-prep/index.html' },
          { key: 'games', title: 'Language Games', icon: '🎮', promise: 'French vocabulary & grammar games', href: 'https://cosylanguages.github.io/COSYgames/?lang=FR' }
        ]
      },
      {
        group: 'Explore',
        accentKey: 'your-classes',
        items: [
          { key: 'blog', title: 'Blog & Guides', icon: '📝', promise: 'French articles, guides & podcasts', href: '../../blog/index.html?lang=fr' },
          { key: 'media_culture', title: 'Media & Culture', icon: '🎭', promise: 'Live French radio, TV & culture', href: '#media-culture' },
          { key: 'daily_life', title: 'Daily Life & Shopping', icon: '🛒', promise: 'Practical French in daily context', href: '#daily-life' }
        ]
      },
      {
        group: 'Join in',
        accentKey: 'join-in',
        items: [
          { key: 'events', title: 'Events & Speaking Clubs', icon: '🎉', promise: 'French speaking clubs with native tutors', href: '../../apps/premium-events/index.html' },
          { key: 'placement_quiz', title: 'Placement Quiz', icon: '📝', promise: 'Determine your French level', href: '../../placement-quiz.html' },
          { key: 'book_now', title: 'Book French Lessons', icon: '💬', promise: 'Start 1-to-1 or group lessons', href: 'https://wa.me/330766784195?text=Hi!%20I%27d%20like%20to%20start%20French%20lessons.' }
        ]
      }
    ]
  },
  ru: {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    greeting: 'Добро пожаловать в COSYrussian',
    tagline: 'Говорите по-русски свободно, уверенно и живым языком.',
    accent: '#3a5298',
    accentDark: '#1e2f6b',
    accentPale: '#eef1fb',
    flag: '🇷🇺',
    motifSvg: '<svg class="lang-motif" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="25" y="25" width="50" height="50" rx="8" stroke="currentColor" stroke-width="2"/><path d="M25 50H75M50 25V75" stroke="currentColor" stroke-width="2"/></svg>',
    levels: 'A1 → C2',
    megaMenu: [
      {
        group: 'Learn',
        accentKey: 'learn-free',
        items: [
          { key: 'grammar', title: 'Grammar Manuals', icon: '⚡', promise: 'Russian cases & verb aspect rules', href: 'grammar.html' },
          { key: 'vocabulary', title: 'Vocabulary & Collocations', icon: '📚', promise: 'Essential Russian word lists & idioms', href: 'vocabulary.html' },
          { key: 'pronunciation', title: 'Pronunciation & Accent', icon: '🗣️', promise: 'Cyrillic phonetics & accent drills', href: 'pronunciation.html' },
          { key: 'curriculum', title: 'Full Curriculum Track', icon: '📖', promise: 'Structured A1–C2 Russian units', href: 'curriculum.html' }
        ]
      },
      {
        group: 'Practice free',
        accentKey: 'learn-free',
        items: [
          { key: 'practice', title: 'Interactive Practice', icon: '💡', promise: 'Free Russian exercises & quizzes', href: '../../practice/index.html?lang=RU' },
          { key: 'dictionary', title: 'COSYdata Dictionary', icon: '📖', promise: 'Centralized Russian vocabulary repository', href: 'https://cosylanguages.github.io/COSYdata/' },
          { key: 'games', title: 'Language Games', icon: '🎮', promise: 'Russian vocabulary & grammar games', href: 'https://cosylanguages.github.io/COSYgames/?lang=RU' }
        ]
      },
      {
        group: 'Explore',
        accentKey: 'your-classes',
        items: [
          { key: 'blog', title: 'Blog & Guides', icon: '📝', promise: 'Russian language guides & articles', href: '../../blog/index.html?lang=ru' },
          { key: 'media_culture', title: 'Media & Culture', icon: '🎭', promise: 'Russian media & cultural resources', href: '#media-culture' },
          { key: 'daily_life', title: 'Daily Life & Shopping', icon: '🛒', promise: 'Practical Russian in context', href: '#daily-life' }
        ]
      },
      {
        group: 'Join in',
        accentKey: 'join-in',
        items: [
          { key: 'events', title: 'Events & Speaking Clubs', icon: '🎉', promise: 'Russian speaking clubs & gatherings', href: '../../apps/premium-events/index.html' },
          { key: 'placement_quiz', title: 'Placement Quiz', icon: '📝', promise: 'Test your Russian level', href: '../../placement-quiz.html' },
          { key: 'book_now', title: 'Book Russian Lessons', icon: '💬', promise: 'Start Russian lessons today', href: 'https://wa.me/330766784195?text=Hi!%20I%27d%20like%20to%20start%20Russian%20lessons.' }
        ]
      }
    ]
  },
  it: {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    greeting: 'Benvenuti su COSYitaliano',
    tagline: 'Parla italiano con passione e naturalezza fin dalla prima lezione.',
    accent: '#9e2a2a',
    accentDark: '#7a1d1d',
    accentPale: '#fbeeee',
    flag: '🇮🇹',
    motifSvg: '<svg class="lang-motif" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="35" stroke="currentColor" stroke-width="2"/><path d="M50 15C60 30 60 70 50 85M50 15C40 30 40 70 50 85" stroke="currentColor" stroke-width="2"/></svg>',
    levels: 'A1',
    megaMenu: [
      {
        group: 'Learn',
        accentKey: 'learn-free',
        items: [
          { key: 'grammar', title: 'Grammar Manuals', icon: '⚡', promise: 'Italian grammar rules & verb tenses', href: 'grammar.html' },
          { key: 'vocabulary', title: 'Vocabulary & Collocations', icon: '📚', promise: 'Essential Italian words & phrases', href: 'vocabulary.html' },
          { key: 'pronunciation', title: 'Pronunciation & Accent', icon: '🗣️', promise: 'Italian phonetics & sound recipes', href: 'pronunciation.html' },
          { key: 'curriculum', title: 'Full Curriculum Track', icon: '📖', promise: 'Structured Italian course units', href: 'curriculum.html' }
        ]
      },
      {
        group: 'Practice free',
        accentKey: 'learn-free',
        items: [
          { key: 'practice', title: 'Interactive Practice', icon: '💡', promise: 'Free Italian drills & quizzes', href: '../../practice/index.html?lang=IT' },
          { key: 'dictionary', title: 'COSYdata Dictionary', icon: '📖', promise: 'Centralized Italian vocabulary repository', href: 'https://cosylanguages.github.io/COSYdata/' },
          { key: 'games', title: 'Language Games', icon: '🎮', promise: 'Italian vocabulary & grammar games', href: 'https://cosylanguages.github.io/COSYgames/?lang=IT' }
        ]
      },
      {
        group: 'Explore',
        accentKey: 'your-classes',
        items: [
          { key: 'blog', title: 'Blog & Guides', icon: '📝', promise: 'Italian articles & guides', href: '../../blog/index.html?lang=it' },
          { key: 'media_culture', title: 'Media & Culture', icon: '🎭', promise: 'Italian radio, TV & culture', href: '#media-culture' },
          { key: 'daily_life', title: 'Daily Life & Shopping', icon: '🛒', promise: 'Practical Italian in context', href: '#daily-life' }
        ]
      },
      {
        group: 'Join in',
        accentKey: 'join-in',
        items: [
          { key: 'events', title: 'Events & Speaking Clubs', icon: '🎉', promise: 'Italian speaking clubs', href: '../../apps/premium-events/index.html' },
          { key: 'placement_quiz', title: 'Placement Quiz', icon: '📝', promise: 'Test your Italian level', href: '../../placement-quiz.html' },
          { key: 'book_now', title: 'Book Italian Lessons', icon: '💬', promise: 'Start Italian lessons', href: 'https://wa.me/330766784195?text=Hi!%20I%27d%20like%20to%20start%20Italian%20lessons.' }
        ]
      }
    ]
  },
  el: {
    code: 'el',
    name: 'Greek',
    nativeName: 'Ελληνικά',
    greeting: 'Καλώς ἤρθατε στο COSYgreek',
    tagline: 'Μιλήστε ελληνικά με αυτοπεποίθηση από το πρώτο μάθημα.',
    accent: '#5a2d82',
    accentDark: '#3a1d5a',
    accentPale: '#f4eef9',
    flag: '🇬🇷',
    motifSvg: '<svg class="lang-motif" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 30H80M20 50H80M20 70H80" stroke="currentColor" stroke-width="2"/><path d="M35 20V80" stroke="currentColor" stroke-width="2"/></svg>',
    levels: 'A1',
    megaMenu: [
      {
        group: 'Learn',
        accentKey: 'learn-free',
        items: [
          { key: 'grammar', title: 'Grammar Manuals', icon: '⚡', promise: 'Greek alphabet & grammar rules', href: 'grammar.html' },
          { key: 'vocabulary', title: 'Vocabulary & Collocations', icon: '📚', promise: 'Essential Greek word lists', href: 'vocabulary.html' },
          { key: 'pronunciation', title: 'Pronunciation & Accent', icon: '🗣️', promise: 'Greek sound recipes & pronunciation', href: 'pronunciation.html' },
          { key: 'curriculum', title: 'Full Curriculum Track', icon: '📖', promise: 'Structured Greek course units', href: 'curriculum.html' }
        ]
      },
      {
        group: 'Practice free',
        accentKey: 'learn-free',
        items: [
          { key: 'practice', title: 'Interactive Practice', icon: '💡', promise: 'Free Greek exercises & quizzes', href: '../../practice/index.html?lang=EL' },
          { key: 'dictionary', title: 'COSYdata Dictionary', icon: '📖', promise: 'Centralized Greek vocabulary repository', href: 'https://cosylanguages.github.io/COSYdata/' },
          { key: 'games', title: 'Language Games', icon: '🎮', promise: 'Greek vocabulary & grammar games', href: 'https://cosylanguages.github.io/COSYgames/?lang=EL' }
        ]
      },
      {
        group: 'Explore',
        accentKey: 'your-classes',
        items: [
          { key: 'blog', title: 'Blog & Guides', icon: '📝', promise: 'Greek articles & learning guides', href: '../../blog/index.html?lang=el' },
          { key: 'media_culture', title: 'Media & Culture', icon: '🎭', promise: 'Greek culture & media', href: '#media-culture' },
          { key: 'daily_life', title: 'Daily Life & Shopping', icon: '🛒', promise: 'Practical Greek in context', href: '#daily-life' }
        ]
      },
      {
        group: 'Join in',
        accentKey: 'join-in',
        items: [
          { key: 'events', title: 'Events & Speaking Clubs', icon: '🎉', promise: 'Greek speaking clubs', href: '../../apps/premium-events/index.html' },
          { key: 'placement_quiz', title: 'Placement Quiz', icon: '📝', promise: 'Test your Greek level', href: '../../placement-quiz.html' },
          { key: 'book_now', title: 'Book Greek Lessons', icon: '💬', promise: 'Start Greek lessons', href: 'https://wa.me/330766784195?text=Hi!%20I%27d%20like%20to%20start%20Greek%20lessons.' }
        ]
      }
    ]
  }
};

window.getLangConfig = function(langCode) {
  const code = (langCode || '').toLowerCase().trim();
  return window.COSY_LANG_CONFIG[code] || window.COSY_LANG_CONFIG['en'];
};
