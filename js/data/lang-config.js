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
    menuLinks: [
      { href: '#learn', label: 'Learn' },
      { href: '#practice-free', label: 'Practice free' },
      { href: '#explore', label: 'Explore English' },
      { href: '#blog-guides', label: 'Articles & Top 100' },
      { href: '#events', label: 'Events' },
      { href: '#reviews', label: 'Reviews' }
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
    menuLinks: [
      { href: '#learn', label: 'Apprendre' },
      { href: '#practice-free', label: 'Pratique gratuite' },
      { href: '#explore', label: 'Explorer le français' },
      { href: '#blog-guides', label: 'Articles & Guides' },
      { href: '#events', label: 'Événements' },
      { href: '#reviews', label: 'Avis' }
    ]
  },
  ru: {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    greeting: 'Добро пожаловать в ТАКОЙрусский',
    tagline: 'Говорите по-русски свободно, уверенно и живым языком.',
    accent: '#3a5298',
    accentDark: '#1e2f6b',
    accentPale: '#eef1fb',
    flag: '🇷🇺',
    motifSvg: '<svg class="lang-motif" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="25" y="25" width="50" height="50" rx="8" stroke="currentColor" stroke-width="2"/><path d="M25 50H75M50 25V75" stroke="currentColor" stroke-width="2"/></svg>',
    levels: 'A1 → C2',
    menuLinks: [
      { href: '#learn', label: 'Обучение' },
      { href: '#practice-free', label: 'Бесплатная практика' },
      { href: '#explore', label: 'Изучайте русский' },
      { href: '#blog-guides', label: 'Статьи и Гиды' },
      { href: '#events', label: 'Мероприятия' },
      { href: '#reviews', label: 'Отзывы' }
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
    menuLinks: [
      { href: '#learn', label: 'Impara' },
      { href: '#practice-free', label: 'Pratica gratuita' },
      { href: '#explore', label: 'Esplora l\'italiano' },
      { href: '#blog-guides', label: 'Articoli & Guide' },
      { href: '#events', label: 'Eventi' },
      { href: '#reviews', label: 'Recensioni' }
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
    menuLinks: [
      { href: '#learn', label: 'Μάθηση' },
      { href: '#practice-free', label: 'Δωρεάν εξάσκηση' },
      { href: '#explore', label: 'Εξερευνήστε τα ελληνικά' },
      { href: '#blog-guides', label: 'Άρθρα & Οδηγοί' },
      { href: '#events', label: 'Εκδηλώσεις' },
      { href: '#reviews', label: 'Αξιολογήσεις' }
    ]
  }
};

window.getLangConfig = function(langCode) {
  const code = (langCode || '').toLowerCase().trim();
  return window.COSY_LANG_CONFIG[code] || window.COSY_LANG_CONFIG['en'];
};
