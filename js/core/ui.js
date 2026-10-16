/**
 * js/core/ui.js
 * Shared UI helpers including toasts, modals, FAQ toggles, and scroll effects.
 * Consolidated with mobile handlers and theme configuration.
 */
(function() {
    'use strict';

    window.COSY = window.COSY || {};

    /* ─── THEME CONFIGURATION ────────────────────────────────────── */
    window.COMMON_THEMES = [
        { id: "numbers_math", label: "common_theme_numbers_math" },
        { id: "time", label: "common_theme_time" },
        { id: "personal_identity", label: "common_theme_personal_identity" },
        { id: "family_relationships", label: "common_theme_family_relationships" },
        { id: "home_living", label: "common_theme_home_living" },
        { id: "food_drink", label: "common_theme_food_drink" },
        { id: "health_body", label: "common_theme_health_body" },
        { id: "work_employment", label: "common_theme_work_employment" },
        { id: "education_learning", label: "common_theme_education_learning" },
        { id: "transport_travel", label: "common_theme_transport_travel" },
        { id: "shopping_money", label: "common_theme_shopping_money" },
        { id: "technology_media", label: "common_theme_technology_media" },
        { id: "environment_nature", label: "common_theme_environment_nature" },
        { id: "society_politics", label: "common_theme_society_politics" },
        { id: "culture_arts", label: "common_theme_culture_arts" },
        { id: "science_tech", label: "common_theme_science_tech" },
        { id: "language_communication", label: "common_theme_language_communication" },
        { id: "sport_leisure", label: "common_theme_sport_leisure" },
        { id: "feelings_emotions", label: "common_theme_feelings_emotions" },
        { id: "places_geography", label: "common_theme_places_geography" },
        { id: "describing_things", label: "common_theme_describing_things" },
        { id: "clothes_appearance", label: "common_theme_clothes_appearance" },
        { id: "prepositions_grammar", label: "common_theme_prepositions_grammar" },
        { id: "modifiers_intensifiers", label: "common_theme_modifiers_intensifiers" },
        { id: "ethics_philosophy", label: "common_theme_ethics_philosophy" },
        { id: "opinion_debate", label: "common_theme_opinion_debate" }
    ];

    window.COSY_THEME_TREE = {
      animals:             ['pets','farm','wild','insects','birds','sea','mammals','reptiles_amphibians','animal_groups','crustaceans_mollusks','fishes'],
      body:                ['face','limbs','organs','senses','health','appearance','digestive_system','anatomy'],
      clothes:             ['everyday','formal','accessories','weather_gear','winter_clothing','jewelry','sleepwear','sewing','traditional'],
      colours:             ['basic','shades','materials'],
      describing:          ['size_shape','texture','quality','quantity','comparing'],
      emotions:            ['positive','negative','complex','expressing'],
      environment:         ['ecology','climate','recycling','natural_disasters','pollution','biosphere'],
      food_drink:          ['fruit','vegetables','drinks','cooking','meals','snacks','diet','breakfast','meat','sweets','spices_condiments','kitchen_utensils','packaging','dairy_fats'],
      furniture:           ['rooms','furniture_items','appliances','household_items','doors_locks','garden','bedroom','bathroom','utility_room','house_structure','climate_control'],
      diy_construction:    ['hand_tools','building_materials','carpentry','plumbing','electrical','masonry','soldering_welding','painting_upkeep'],
      health_medicine:     ['symptoms','treatment','hospital','wellbeing','senior_care','sport_injury','medications','safety_equipment'],
      jobs:                ['professions','workplace','career','business_lang'],
      language:            ['grammar_terms','phonetics','discourse','learning','writing_system','alphabet','punctuation'],
      music:               ['instruments','genres','performance','listening','orchestra','notation'],
      nature:              ['landscape','weather','plants','gardening','seasons','sky','sea','camping'],
      numbers:             ['cardinal','ordinal','fractions','money','shapes','geometry'],
      people:              ['family','relationships','nationality','physical_desc','character','babies','kids','teens','seniors','groups'],
      places:              ['city','buildings','rooms','geography','landmarks','countryside','downtown'],
      geography:           ['continents','europe','asia','geology','oceanography','landforms','cartography'],
      school:              ['stationery','subjects','classroom','studying'],
      shopping:            ['stores','items','transactions','online'],
      social:              ['celebrations','going_out','invitations','communication'],
      society:             ['metropolitan','education','religion','politics','heraldry'],
      sports:              ['sports_facilities','track_field','ball_sports','racket_sports','gymnastics','aquatic_sports','combat_sports','strength_sports','equestrian','precision_sports','cycling','motor_sports','winter_sports','sports_on_wheels','aerial_sports','mountain_sports'],
      games:               ['board_games','cards','dice_dominoes','puzzles','video_games','casino_games','outdoor_leisure'],
      technology:          ['devices','internet','software','social_media','computers','office_automation'],
      transport_machinery: ['road_transport','rail_transport','maritime_transport','air_transport','heavy_machinery','material_handling'],
      time:                ['clock','days','months','seasons','periods','frequency','telling_time','schedule','hourglass'],
      travel:              ['transport','accommodation','tourism','directions','documents','air_travel','land_travel','sea_travel','luggage'],
      work:                ['office','meetings','career','documents','remote_work','finance','economy'],
      art_culture:         ['art','literature','film','theatre','traditions','fine_arts','graphic_arts','crafts','photography','architecture'],
      psychology:          ['biases','cognitive_processes','behavior','psychoanalysis','concepts'],
      science:             ['physics_mechanics','optics','chemistry','laboratory','measuring_devices','biology','scientific_symbols'],
      astronomy:           ['celestial_bodies','astronomical_observation','astronomical_space','solar_system'],
      energy:              ['fossil_energy','hydroelectricity','nuclear_energy','solar_energy','wind_energy'],
      law_order:           ['justice','prison','court','law_enforcement'],
      military:            ['weapons','armor','combat_vehicles','defense'],
      history_fantasy:     ['ancient_history','modern_history','fantasy','mythology'],
      prepositions:        ['prepositions_place','prepositions_time','prepositions_direction','dependent_prepositions'],
      contrast_pairs:      ['ed_vs_ing_adjectives','comparative_vs_superlative'],
      grammar:             ['tenses_aspect','conditionals_moods','cases_declensions','articles_gender','syntax_word_order']
    };

    window.COSY_GRAMMAR_TOPICS = {
      a1: [
        "adjectives",
        "adverbs-frequency",
        "adverbs-manner",
        "all-both-none",
        "articles",
        "can-cant",
        "comparative-adjectives",
        "conjunctions",
        "could-couldnt",
        "countable-uncountable",
        "demonstratives",
        "english-around-world",
        "going-to",
        "have-got",
        "id-like",
        "imperatives",
        "intensifiers",
        "irregular-verbs",
        "like-love-hate",
        "much-many",
        "numbers-dates",
        "past-simple-be",
        "past-simple-irregular",
        "past-simple-regular",
        "plurals-irregular",
        "plurals-regular",
        "possessive-s",
        "prepositions-place",
        "prepositions-time",
        "present-continuous",
        "present-simple",
        "pronouns",
        "question-words",
        "simple-vs-continuous",
        "some-vs-any",
        "superlative-adjectives",
        "telling-time",
        "there-is-are",
        "there-was-were",
        "to-be",
        "will",
        "word-order"
      ],
      a2: [
        "as-as",
        "comparatives-and-superlatives",
        "could",
        "defining-relative-clauses",
        "do-vs-make",
        "either-or-neither-nor-both-and",
        "expressing-purpose-to-for",
        "first-conditional",
        "future-time-clauses",
        "have-to-must-mustnt",
        "how-questions",
        "however-although-because-so",
        "indefinite-pronouns",
        "infinitives-and-gerunds",
        "may-might",
        "most-most-of-the-most",
        "much-many-little-few",
        "no-longer-any-longer-anymore",
        "on-time-in-time-at-the-end-in-the-end",
        "past-continuous",
        "past-participles-1",
        "past-participles-2",
        "past-perfect",
        "past-simple-review",
        "past-simple-vs-past-continuous",
        "prepositions-of-movement",
        "present-and-past-simple-passive",
        "present-continuous-for-future",
        "present-perfect-ever-never-for-since",
        "present-perfect-form-use",
        "present-perfect-just-already-yet",
        "present-perfect-vs-past-simple",
        "present-simple-vs-present-continuous",
        "pronouns-review",
        "question-forms",
        "reported-speech",
        "review-of-verb-tenses",
        "second-conditional",
        "should-shouldnt",
        "so-neither",
        "too-and-enough",
        "used-to",
        "uses-of-get",
        "uses-of-go",
        "will-vs-going-to",
        "zero-conditional"
      ],
      b1: [
        "adjective-preposition",
        "all-both-either-neither-none",
        "another-other-others-the-other",
        "articles-deeper-rules",
        "broader-intensifiers",
        "can-could-be-able-to",
        "causative-have-get-something-done",
        "connectors-and-linking-words",
        "defining-vs-non-defining-relative-clauses",
        "during-for-while",
        "ed-ing-adjectives",
        "embedded-indirect-questions",
        "for-since-from",
        "future-continuous",
        "future-forms-review",
        "future-perfect",
        "have-to-must-should-had-better",
        "it-is-said-that",
        "linking-words",
        "mixed-conditionals",
        "modals-of-deduction-past",
        "modals-of-deduction-present",
        "modifying-comparatives",
        "narrative-tenses",
        "neednt-didnt-need-to-neednt-have",
        "passive-continuous-and-perfect-tenses",
        "passive-simple-and-future-tenses",
        "passive-with-modals",
        "past-perfect-continuous",
        "past-perfect",
        "past-simple-vs-present-perfect",
        "phrasal-verbs-grammar-patterns",
        "present-perfect-simple-vs-continuous",
        "present-simple-vs-present-continuous",
        "question-tags",
        "reflexive-pronouns",
        "reported-questions-and-commands",
        "reported-speech-statements",
        "reporting-verbs",
        "second-conditional",
        "so-such-so-much-so-many",
        "third-conditional",
        "verb-preposition",
        "verbs-of-the-senses",
        "wh-questions-in-the-past",
        "wish-if-only",
        "would-rather-would-sooner"
      ],
      b2: [
        "adverbs-position-and-types",
        "alternatives-to-if",
        "clauses-of-contrast-purpose-reason-and-result",
        "cleft-sentences-and-emphasis",
        "compound-nouns",
        "conditional-inversion",
        "dependent-prepositions-noun-preposition",
        "discourse-markers",
        "distancing-passive-reporting",
        "formal-vs-informal-register",
        "future-forms-expressing-future-time",
        "future-in-the-past",
        "generic-common-gender-pronouns",
        "gerunds-and-infinitives-complex-forms",
        "get-different-meanings",
        "gradable-vs-extreme-adjectives",
        "inversion-after-negative-adverbials",
        "its-time",
        "mandative-subjunctive",
        "mixed-conditionals",
        "narrative-tenses",
        "order-of-adjectives",
        "other-ways-to-express-future",
        "participle-clauses",
        "passive-verbs-with-two-objects",
        "past-tenses-review",
        "permission-obligation-and-prohibition",
        "phrasal-verbs-extended-patterns",
        "possessive-s-with-time-expressions",
        "present-tenses-review",
        "reflexive-and-reciprocal-pronouns",
        "relative-clauses-review-and-deepening",
        "speculation-and-deduction-deepening",
        "used-to-vs-would",
        "verb-object-infinitive-gerund",
        "whatever-whenever-wherever-whoever-however"
      ],
      c1: [
        "future-perfect-vs-continuous",
        "past-perfect-vs-continuous",
        "rarely-vs-seldom-inversion",
        "hardly-when-inversion",
        "no-sooner-than-inversion",
        "not-only-but-also-inversion",
        "mixed-conditionals",
        "if-only-vs-i-wish",
        "suppose-vs-imagine",
        "provided-vs-providing",
        "as-long-as-vs-provided",
        "do-support-emphasis",
        "cleft-sentences",
        "fronting",
        "whether-vs-if",
        "whatever-vs-whichever",
        "whoever-vs-whomever",
        "accuse-vs-blame",
        "remind-vs-remember",
        "persuade-vs-convince",
        "refuse-vs-deny",
        "although-vs-even-though",
        "despite-vs-in-spite-of",
        "whereas-vs-while",
        "meanwhile-vs-whereas"
      ],
      c2: [
        "historic-vs-historical",
        "economic-vs-economical",
        "continual-vs-continuous",
        "classic-vs-classical",
        "effective-vs-efficient",
        "imaginary-vs-imaginative",
        "sensible-vs-sensitive",
        "electric-vs-electrical",
        "begin-vs-commence",
        "help-vs-assist",
        "buy-vs-purchase",
        "end-vs-terminate",
        "little-vs-a-little-adv",
        "few-vs-a-few-adv",
        "quite-a-few-vs-several",
        "scarcely-any-vs-hardly-any",
        "despite-vs-notwithstanding",
        "owing-to-vs-thanks-to",
        "by-means-of-vs-via",
        "according-to-vs-in-accordance-with",
        "lest",
        "whereby",
        "whereby-vs-where",
        "insofar-as",
        "albeit",
        "subjunctive-vs-indicative",
        "should-after-adjectives",
        "inversion-after-negative-adverbials",
        "nominal-relative-clauses",
        "affect-vs-effect",
        "assure-vs-ensure-vs-insure",
        "imply-vs-infer",
        "raise-vs-rise",
        "lay-vs-lie",
        "sit-vs-seat",
        "rob-vs-steal",
        "house-vs-home",
        "travel-vs-trip-vs-journey",
        "work-vs-job-vs-career",
        "shade-vs-shadow",
        "chance-vs-opportunity",
        "mistake-vs-fault",
        "salary-vs-wage",
        "price-vs-cost-vs-value",
        "win-vs-beat",
        "miss-vs-lose",
        "discover-vs-invent"
      ]
    };

    window.COSY_GAMES = {
      'Action Hero':      { id: 'action_hero',    prefix: 'charades',      icon: '🎭' },
      'Emoji Odyssey':    { id: 'emoji_odyssey',  prefix: 'emoji',         icon: '📖' },
      'Lucky Numbers':    { id: 'bingo',          prefix: 'bingo',         icon: '🔢' },
      'Last Letter':      { id: 'last_letter',    prefix: 'last-letter',   icon: '🔤' },
      'Object Quest':     { id: 'guess-what',     prefix: 'guess-what',    icon: '📦' },
      'Identity Mystery': { id: 'guess-who',      prefix: 'guess-who',     icon: '👤' },
      'Cosy Crossword':   { id: 'crossword',      prefix: 'crossword',     icon: '🧩' },
      'Fluency Flow':     { id: 'talk-talk',      prefix: 'talk-talk',     icon: '🗣️' },
      'Battle of Wits':   { id: 'debates',        prefix: 'debates',       icon: '⚖️' },
      'Opinion Arena':    { id: 'opinion_arena',  prefix: 'opinion-arena', icon: '🏟️' },
      'Word Linker':      { id: 'word_linker',    prefix: 'linker',        icon: '🔗' },
      "Critic's Corner":  { id: 'critics_corner', prefix: 'critics-corner',icon: '🎭' },
      'Story Chain':      { id: 'story-chain',    prefix: 'story-chain',   icon: '🃏' },
      'Hot Seat':         { id: 'hot-seat',       prefix: 'hot-seat',      icon: '🎯' }
    };

    /* ─── GLOBAL HELPERS ────────────────────────────────────────── */
    const getDayOfYear = () => {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    };

    /* ─── SCROLL & VISUAL EFFECTS ───────────────────────────────── */
    /* ─── SCROLL PROGRESS LINE & SIDE DOTS ─────────────────────── */
    const setupScrollProgress = () => {
        let bar = document.querySelector('.cosy-scroll-progress-bar');
        if (!bar) {
            bar = document.createElement('div');
            bar.className = 'cosy-scroll-progress-bar';
            bar.setAttribute('aria-hidden', 'true');
            const nav = document.getElementById('cosy-nav') || document.querySelector('.cosy-navbar') || document.body;
            if (nav && nav.nextSibling) {
                nav.parentNode.insertBefore(bar, nav.nextSibling);
            } else {
                document.body.prepend(bar);
            }
        }

        const updateProgress = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            );
            const winHeight = window.innerHeight || document.documentElement.clientHeight;
            const scrollable = docHeight - winHeight;

            if (scrollable > 0) {
                const pct = Math.min(100, Math.max(0, (scrollTop / scrollable) * 100));
                bar.style.width = pct + '%';
            } else {
                bar.style.width = '0%';
            }
        };

        window.addEventListener('scroll', updateProgress, { passive: true });
        window.addEventListener('resize', updateProgress, { passive: true });
        updateProgress();
    };

    const setupSideSectionDots = () => {
        const existingDots = document.querySelector('.cosy-side-dots');
        if (existingDots) existingDots.remove();

        // Target main sections with explicit IDs
        const main = document.querySelector('main.page, main.content-container, main, article, #main-content') || document.body;
        if (!main) return;

        const candidateElements = main.querySelectorAll('section[id], div[id].sec-block, #how, #languages, #courses, #events, #tools, #calculator, #reviews, #start');
        const sections = [];
        const seen = new Set();

        const cleanLabelText = (rawText) => {
            if (!rawText) return '';
            let t = rawText.replace(/[▲▼]/g, '').replace(/\s*\d+\s*(games|sessions|words|items)\s*$/gi, '').trim();
            if (t.length > 28) {
                const shortText = t.split(/\s*[\u2014\-–:]\s*/)[0].trim();
                if (shortText && shortText.length <= 28) {
                    return shortText;
                }
                return t.substring(0, 25) + '...';
            }
            return t;
        };

        candidateElements.forEach(el => {
            const id = el.id;
            if (!id || seen.has(id)) return;
            if (el.closest('#cosy-nav, #cosy-nav-drawer, footer, header, #pin-modal, #back-to-top')) return;
            // Skip inner anchor divs without standalone content (such as <div id="courses"></div>)
            if (el.tagName === 'DIV' && !el.textContent.trim() && el.parentElement && el.parentElement.tagName === 'SECTION') return;

            const headerEl = el.querySelector('.sec-h2, .section-title, h2, h3, .sec-tag') || (el.matches('h2, h3') ? el : null);
            let rawTitle = headerEl ? headerEl.textContent.trim() : '';

            if (!rawTitle) {
                const cleanId = id.replace(/^[smp]-/, '').replace(/-/g, ' ').trim();
                rawTitle = cleanId.charAt(0).toUpperCase() + cleanId.slice(1);
            }

            const label = cleanLabelText(rawTitle);
            if (!label) return;

            seen.add(id);
            sections.push({ id, label, el });
        });

        if (sections.length < 2) return;

        const dotsContainer = document.createElement('nav');
        dotsContainer.className = 'cosy-side-dots';
        dotsContainer.setAttribute('aria-label', 'Section navigation dots');

        const dotButtons = [];

        sections.forEach((sec, idx) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'cosy-side-dot' + (idx === 0 ? ' active' : '');
            btn.setAttribute('aria-label', `Navigate to ${sec.label}`);
            btn.setAttribute('data-target-id', sec.id);

            const tooltip = document.createElement('span');
            tooltip.className = 'cosy-dot-tooltip';
            tooltip.textContent = sec.label;
            btn.appendChild(tooltip);

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                const targetEl = document.getElementById(sec.id);
                if (targetEl) {
                    const offset = 80;
                    const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: prefersReducedMotion ? 'auto' : 'smooth'
                    });
                }
            });

            dotsContainer.appendChild(btn);
            dotButtons.push({ id: sec.id, btn, el: sec.el });
        });

        document.body.appendChild(dotsContainer);

        // IntersectionObserver for tracking active section
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeId = entry.target.id;
                    dotButtons.forEach(item => {
                        if (item.id === activeId) {
                            item.btn.classList.add('active');
                            item.btn.setAttribute('aria-current', 'true');
                        } else {
                            item.btn.classList.remove('active');
                            item.btn.removeAttribute('aria-current');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(sec => observer.observe(sec.el));
    };

    const setupHeaderShrink = () => {
        const nav = document.getElementById('cosy-nav') || document.getElementById('main-nav');
        if (!nav) return;
        if (!window.cosyHeaderShrinkSetup) {
            window.cosyHeaderShrinkSetup = true;
            window.addEventListener('scroll', () => {
                const activeNav = document.getElementById('cosy-nav') || document.getElementById('main-nav');
                if (!activeNav) return;
                if (window.scrollY > 50) activeNav.classList.add('shrunk');
                else activeNav.classList.remove('shrunk');
            });
        }
    };

    const setupBackToTop = () => {
        if (document.getElementById('back-to-top')) return;
        const btn = document.createElement('button');
        btn.id = 'back-to-top'; btn.innerHTML = '↑'; btn.setAttribute('title', 'Back to Top');
        btn.setAttribute('aria-label', 'Back to Top');
        document.body.appendChild(btn);
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) btn.classList.add('visible');
            else btn.classList.remove('visible');
        });
        btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    };


    const setupScrollReveal = () => {
        const io = new IntersectionObserver(entries => {
            entries.forEach((e, i) => {
                if (e.isIntersecting) {
                    e.target.style.animationDelay = (i * 0.1) + 's';
                    e.target.classList.add('visible');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    };

    const setupReviewsCarousel = () => {
        const track = document.getElementById('reviews-track');
        const prevBtn = document.getElementById('reviews-prev');
        const nextBtn = document.getElementById('reviews-next');
        const slides = document.querySelectorAll('.review-slide');

        if (!track || slides.length === 0) return;

        let currentIndex = 0;
        const totalSlides = slides.length;

        const goToSlide = (index) => {
            currentIndex = (index + totalSlides) % totalSlides;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            slides.forEach((slide, idx) => {
                slide.classList.toggle('active', idx === currentIndex);
            });
        };

        if (prevBtn) {
            prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
        }

        // Touch Swipe Support
        let startX = 0;
        let isSwiping = false;

        const carousel = document.getElementById('reviews-carousel');
        if (carousel) {
            carousel.addEventListener('touchstart', (e) => {
                if (e.touches.length === 1) {
                    startX = e.touches[0].clientX;
                    isSwiping = true;
                }
            }, { passive: true });

            carousel.addEventListener('touchend', (e) => {
                if (!isSwiping || e.changedTouches.length === 0) return;
                const endX = e.changedTouches[0].clientX;
                const diffX = startX - endX;

                if (Math.abs(diffX) > 40) {
                    if (diffX > 0) goToSlide(currentIndex + 1);
                    else goToSlide(currentIndex - 1);
                }
                isSwiping = false;
            }, { passive: true });
        }
    };

    /* ─── MOBILE & PWA UTILITIES ────────────────────────────────── */
    window.updateMobileNav = function() {
      const mobileNav = document.querySelector('.mobile-nav');
      if (!mobileNav) return;

      const getNavHref = (window.COSY && typeof window.COSY.getNavHref === 'function')
          ? window.COSY.getNavHref
          : (key => (key === 'home' ? 'index.html' : key === 'practice' ? 'practice/index.html' : key === 'courses' ? 'index.html#courses' : key === 'blog' ? 'blog/index.html' : `https://cosylanguages.github.io/COSY${key}/`));

      const homeHref = getNavHref('home');
      const practiceHref = getNavHref('practice');
      const gamesHref = getNavHref('games');
      const eventsHref = getNavHref('events');
      const coursesHref = getNavHref('courses');

      mobileNav.innerHTML = `
        <a href="${practiceHref}" class="mobile-nav-item" id="mnav-practice"><span class="mn-icon">💡</span><span data-i18n="nav.practice">Practice</span></a>
        <a href="${gamesHref}" ${gamesHref.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} class="mobile-nav-item" id="mnav-games"><span class="mn-icon">🎮</span><span data-i18n="nav.games">Games</span></a>
        <a href="${eventsHref}" ${eventsHref.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} class="mobile-nav-item" id="mnav-events"><span class="mn-icon">🎉</span><span data-i18n="nav.events">Events</span></a>
        <a href="${coursesHref}" class="mobile-nav-item" id="mnav-courses"><span class="mn-icon">📚</span><span data-i18n="nav.courses">Courses</span></a>
        <a href="${homeHref}" class="mobile-nav-item" id="mnav-home"><span class="mn-icon">🏡</span><span data-i18n="nav.home">Home</span></a>`;

      const path = window.location.pathname;
      const currentFilename = path.split('/').pop() || 'index.html';
      const items = document.querySelectorAll('.mobile-nav-item');

      items.forEach(item => {
        const href = item.getAttribute('href') || '';
        const linkFilename = href.split('#')[0].split('/').pop() || 'index.html';
        let active = (currentFilename === linkFilename);

        if (currentFilename === 'index.html' || currentFilename === '/') {
            active = (item.id === 'mnav-home');
        }

        if (path.includes('/practice/')) {
            active = (item.id === 'mnav-practice');
        } else if (path.includes('/games/') || path.includes('COSYgames')) {
            active = (item.id === 'mnav-games');
        } else if (path.includes('/events/') || path.includes('COSYevents')) {
            active = (item.id === 'mnav-events');
        }

        item.classList.toggle('active', active);
      });
    };

    window.flashAnswer = function(correct) {
      const flash = document.getElementById('answer-flash');
      if (!flash) return;
      flash.className = 'answer-flash ' + (correct ? 'correct-flash' : 'incorrect-flash') + ' show';
      flash.textContent = correct ? '✅' : '❌';
      if (navigator.vibrate) navigator.vibrate(correct ? [50] : [80, 40, 80]);
      setTimeout(() => flash.classList.remove('show'), 400);
    };

    /* ─── PIN MODAL (Add to Home Screen) ────────────────────────── */
    window.showPinModal = function(title, desc, url) {
        const pinModal = document.getElementById('pin-modal');
        if (!pinModal) return;
        const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

        const el = id => document.getElementById(id);
        if (el('pin-title')) el('pin-title').textContent = title;
        if (el('pin-desc')) el('pin-desc').textContent = desc;
        if (el('pin-step-ios')) el('pin-step-ios').style.display = isIOS ? 'block' : 'none';
        if (el('pin-step-android')) el('pin-step-android').style.display = isIOS ? 'none' : 'block';

        window.history.replaceState({}, '', url);
        pinModal.style.display = 'flex';
        const closePin = () => { pinModal.style.display = 'none'; };
        const btn = pinModal.querySelector('button');
        if (btn) btn.onclick = closePin;
    };

    /* ─── EVENTS & SPEAKING CLUBS ───────────────────────────────── */
    if (window.COSY) {
        window.COSY.toggleBlock = function(id) {
          const el = document.getElementById(id);
          if (!el) return;
          el.classList.toggle('open');
          const body = el.querySelector('.vocab-body, .history-body, .history-session-body, .mistake-body');
          const toggle = el.querySelector('.round-toggle');
          const header = el.querySelector('.round-header, .vocab-header, .mistake-header') || el;
          if (!body) return;
          const isVisible = el.classList.contains('open');
          body.style.display = isVisible ? 'block' : 'none';
          if (toggle) toggle.textContent = isVisible ? '▲' : '▼';
          header.setAttribute('aria-expanded', isVisible ? 'true' : 'false');
        };

        window.COSY.toggleRound = function(id) {
          const el = document.getElementById(id);
          if (!el) return;
          el.classList.toggle('open');
          const body = el.querySelector('.round-body');
          const toggle = el.querySelector('.round-toggle');
          const header = el.querySelector('.round-header') || el;
          if (!body) return;
          const isVisible = el.classList.contains('open');
          body.style.display = isVisible ? 'block' : 'none';
          if (toggle) toggle.textContent = isVisible ? '▲' : '▼';
          header.setAttribute('aria-expanded', isVisible ? 'true' : 'false');
        };

        window.COSY.copyStudentLink = function(btnEl) {
          if (!btnEl) return;
          const url = new URL(window.location.href);
          url.searchParams.set('shared', 'true');
          const shareUrl = url.toString();

          const showSuccess = () => {
            const originalText = btnEl.innerHTML;
            btnEl.innerHTML = "✓ Link Copied!";
            btnEl.classList.add("btn-success");
            btnEl.disabled = true;
            setTimeout(() => {
              btnEl.innerHTML = originalText;
              btnEl.classList.remove("btn-success");
              btnEl.disabled = false;
            }, 2000);
          };

          const promptFallback = () => {
            window.prompt("Clipboard access is restricted. Please select and copy this student share link manually:", shareUrl);
          };

          const fallbackCopy = () => {
            const textArea = document.createElement("textarea");
            textArea.value = shareUrl;
            textArea.style.position = "fixed";
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
              const successful = document.execCommand('copy');
              if (successful) {
                showSuccess();
              } else {
                promptFallback();
              }
            } catch (err) {
              promptFallback();
            }
            document.body.removeChild(textArea);
          };

          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(shareUrl)
              .then(showSuccess)
              .catch(fallbackCopy);
          } else {
            fallbackCopy();
          }
        };

        window.COSY.checkGap = function(inputEl) {
            const typed = inputEl.value.trim();
            const ans = inputEl.getAttribute('data-answer') || '';

            if (typed === '') {
                inputEl.style.background = 'transparent';
                inputEl.style.borderColor = 'var(--border)';
                return;
            }

            const normalize = (str) => {
                return str.normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")
                          .toLowerCase()
                          .replace(/œ/g, "oe")
                          .replace(/æ/g, "ae")
                          .replace(/[^a-z0-9а-яёα-ωίϊΐόάέύϋΰήώ]/gi, "")
                          .trim();
            };

            if (normalize(typed) === normalize(ans)) {
                inputEl.style.background = '#E1F5EE';
                inputEl.style.borderColor = '#1A7A4A';
                inputEl.style.color = '#1A7A4A';
            } else {
                inputEl.style.background = '#FAEEE8';
                inputEl.style.borderColor = '#C0392B';
                inputEl.style.color = '#C0392B';
            }
        };

        window.COSY.activeGrammarChip = null;

        window.COSY.selectGrammarChip = function(chipEl) {
            const container = chipEl.closest('.grammar-interactive-game') || chipEl.closest('#grammar') || chipEl.closest('.round-block');
            if (!container) return;

            container.querySelectorAll('.grammar-tap-chip').forEach(c => {
                if (c !== chipEl) c.classList.remove('selected');
            });

            if (chipEl.classList.contains('used')) {
                return;
            }

            chipEl.classList.toggle('selected');
            if (chipEl.classList.contains('selected')) {
                window.COSY.activeGrammarChip = chipEl;
            } else {
                window.COSY.activeGrammarChip = null;
            }
        };

        window.COSY.placeGrammarChip = function(gapEl) {
            const container = gapEl.closest('.grammar-interactive-game') || gapEl.closest('#grammar') || gapEl.closest('.round-block');
            if (!container) return;

            const activeChip = window.COSY.activeGrammarChip;

            if (activeChip && activeChip.closest('.grammar-interactive-game') === container) {
                const oldWord = gapEl.getAttribute('data-filled-word');
                if (oldWord) {
                    container.querySelectorAll('.grammar-tap-chip').forEach(c => {
                        if (c.textContent.trim() === oldWord) {
                            c.classList.remove('used');
                            c.style.opacity = '1';
                        }
                    });
                }

                gapEl.textContent = activeChip.textContent.trim();
                gapEl.setAttribute('data-filled-word', activeChip.textContent.trim());
                gapEl.classList.add('filled');
                gapEl.style.color = '#BA7517';
                gapEl.style.borderBottomColor = '#BA7517';

                activeChip.classList.remove('selected');
                activeChip.classList.add('used');
                activeChip.style.opacity = '0.35';

                window.COSY.activeGrammarChip = null;
            } else {
                const oldWord = gapEl.getAttribute('data-filled-word');
                if (oldWord) {
                    container.querySelectorAll('.grammar-tap-chip').forEach(c => {
                        if (c.textContent.trim() === oldWord) {
                            c.classList.remove('used');
                            c.style.opacity = '1';
                        }
                    });
                    gapEl.textContent = '_____';
                    gapEl.removeAttribute('data-filled-word');
                    gapEl.classList.remove('filled');
                    gapEl.style.color = 'var(--ink-soft)';
                    gapEl.style.borderBottomColor = '#BA7517';
                }
            }
        };

        window.COSY.verifyGrammarGame = function(btnEl) {
            const container = btnEl.closest('.grammar-interactive-game') || btnEl.closest('#grammar') || btnEl.closest('.round-block');
            if (!container) return;

            const gaps = container.querySelectorAll('.grammar-gap');
            let allCorrect = true;

            gaps.forEach(gapEl => {
                const rawAns = (gapEl.getAttribute('data-answer') || '').trim().toLowerCase();
                const typed = (gapEl.getAttribute('data-filled-word') || '').trim().toLowerCase();
                const correctOpts = rawAns.split('/');

                const clean = s => s.replace(/[^a-z0-9а-яёα-ωίϊΐόάέύϋΰήώ\-\/]/gi, '');

                const isCorrect = (clean(rawAns) === clean(typed)) || correctOpts.some(opt => clean(opt) === clean(typed));

                if (typed === '') {
                    gapEl.style.color = '#D9381E';
                    gapEl.style.borderBottomColor = '#D9381E';
                    allCorrect = false;
                } else if (isCorrect) {
                    gapEl.style.color = '#0F6E56';
                    gapEl.style.borderBottomColor = '#0F6E56';
                    gapEl.style.fontWeight = 'bold';
                } else {
                    gapEl.style.color = '#D9381E';
                    gapEl.style.borderBottomColor = '#D9381E';
                    allCorrect = false;
                }
            });

            if (allCorrect) {
                if (window.COSY && typeof window.COSY.showToast === 'function') {
                    window.COSY.showToast('🎉 Excellent! All answers are correct!');
                }
            } else {
                if (window.COSY && typeof window.COSY.showToast === 'function') {
                    window.COSY.showToast('❌ Some answers are incorrect. Try again!');
                }
            }
        };

        window.COSY.resetGrammarGame = function(btnEl) {
            const container = btnEl.closest('.grammar-interactive-game') || btnEl.closest('#grammar') || btnEl.closest('.round-block');
            if (!container) return;

            container.querySelectorAll('.grammar-gap').forEach(gapEl => {
                gapEl.textContent = '_____';
                gapEl.removeAttribute('data-filled-word');
                gapEl.classList.remove('filled');
                gapEl.style.color = 'var(--ink-soft)';
                gapEl.style.borderBottomColor = '#BA7517';
                gapEl.style.fontWeight = 'normal';
            });

            container.querySelectorAll('.grammar-tap-chip').forEach(c => {
                c.classList.remove('selected', 'used');
                c.style.opacity = '1';
            });

            window.COSY.activeGrammarChip = null;
        };
    }

    /* ─── VIM CUSTOM ELEMENTS ──────────────────────────────────── */
    class VimChoice extends HTMLElement {
      connectedCallback() {
        this.render();
      }
      render() {
        const options = Array.from(this.querySelectorAll('vim-choice-option'));
        const titles = options.map(opt => opt.querySelector('vim-choice-option-title')?.textContent || 'Option');
        const contents = options.map(opt => opt.querySelector('vim-choice-option-content')?.innerHTML || '');

        this.innerHTML = `
          <div class="vim-choice-tabs" role="tablist" style="display:flex;gap:5px;margin-bottom:10px;overflow-x:auto;padding-bottom:5px;">
            ${titles.map((t, i) => `<button class="vim-tab-btn ${i === 0 ? 'active' : ''}" role="tab" aria-selected="${i === 0 ? 'true' : 'false'}" data-idx="${i}" style="padding:6px 12px;border-radius:20px;border:1px solid var(--border);background:var(--surface-color);color:var(--ink);cursor:pointer;font-size:.75rem;white-space:nowrap;">${t}</button>`).join('')}
          </div>
          <div class="vim-choice-content" style="border:1px solid var(--border);border-radius:10px;padding:15px;background:var(--surface-color);color:var(--ink);">
            ${contents.map((c, i) => `<div class="vim-tab-pane" role="tabpanel" style="display:${i === 0 ? 'block' : 'none'};">${c}</div>`).join('')}
          </div>
        `;

        this.querySelectorAll('.vim-tab-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const idx = btn.dataset.idx;
            this.querySelectorAll('.vim-tab-btn').forEach(b => {
              b.classList.remove('active');
              b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            this.querySelectorAll('.vim-tab-pane').forEach((p, i) => p.style.display = i == idx ? 'block' : 'none');
          });
        });
      }
    }

    class VimInstruction extends HTMLElement {
      connectedCallback() {
        const text = this.textContent;
        this.innerHTML = `<div style="background:var(--cream);padding:10px 15px;border-left:4px solid var(--indigo);margin-bottom:15px;font-weight:600;font-size:.85rem;border-radius:0 8px 8px 0;">${text}</div>`;
      }
    }

    class VimBlockquote extends HTMLElement {
      connectedCallback() {
        const importance = this.getAttribute('importance') || 'basic';
        const content = this.innerHTML;
        this.innerHTML = `<blockquote class="vim-bq-${importance}" style="margin:0;padding:15px;border-radius:8px;background:var(--cream-dark);border-left:4px solid var(--border);font-size:.9rem;color:var(--ink);">${content}</blockquote>`;
      }
    }

    class VimImage extends HTMLElement {
      connectedCallback() {
        const resId = this.getAttribute('resource-id');
        this.innerHTML = `<img src="https://api.cosylanguages.com/assets/${resId}" alt="" style="width:100%;border-radius:10px;margin-bottom:10px;" onerror="this.src='../images/ui/placeholder.png'">`;
      }
    }

    class MindSessionInfo extends HTMLElement {
      connectedCallback() {
        const lang = this.getAttribute('lang-code') || '🇬🇧 English';
        const level = this.getAttribute('level') || 'B1';
        const lenses = this.getAttribute('lenses') || 'Identity';
        const topic = this.getAttribute('topic') || 'Everyday Psychology';
        const duration = this.getAttribute('duration') || '60 min';
        const theme = this.getAttribute('theme') || 'Mind Matters Session';

        this.innerHTML = `
          <div class="mind-session-info-box" style="background:var(--cream-dark); border:1px solid var(--border); border-radius:14px; padding:1.5rem; margin-bottom:2rem; box-sizing:border-box;">
            <div class="info-box-header" style="font-family:'Playfair Display', serif; font-size:1.1rem; font-weight:700; color:#993556; margin-bottom:1rem; border-bottom:1px dashed var(--border); padding-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">
              🧠 Mind Matters — Session Information Card
            </div>
            <div class="mind-profile-grid">
              <div class="mind-profile-item"><strong>Psychological Topic</strong><span>${topic}</span></div>
              <div class="mind-profile-item"><strong>Theme Focus</strong><span>${theme}</span></div>
              <div class="mind-profile-item"><strong>Psychological Lenses</strong><span>${lenses}</span></div>
              <div class="mind-profile-item"><strong>CEFR Level</strong><span>${level}</span></div>
              <div class="mind-profile-item"><strong>Estimated Duration</strong><span>${duration}</span></div>
              <div class="mind-profile-item"><strong>Language</strong><span>${lang}</span></div>
            </div>
          </div>
        `;
      }
    }

    class MindPerspectiveMirror extends HTMLElement {
      connectedCallback() {
        const tendency = this.getAttribute('tendency') || 'Core Human Behavior';
        const trigger = this.getAttribute('trigger') || 'Subconscious stimulus';
        const phenomenon = this.getAttribute('phenomenon') || 'Psychological Concept';
        const anchor = this.getAttribute('anchor') || 'Personal Reflection Anchor';

        this.innerHTML = `
          <div class="mind-profile-box" style="margin-top:1.5rem; margin-bottom:2rem; position:relative; overflow:hidden;">
            <h3 style="font-family:'Playfair Display', serif; font-size:1.2rem; font-weight:700; color:#993556; margin:0 0 1rem 0; display:flex; align-items:center; gap:0.5rem;">
              🧠 Subconscious Mind Profile
            </h3>
            <div class="mind-profile-grid">
              <div class="mind-profile-item"><strong>Core Human Tendency</strong><strong>${tendency}</strong></div>
              <div class="mind-profile-item"><strong>Subconscious Trigger</strong><strong>${trigger}</strong></div>
              <div class="mind-profile-item"><strong>Psychological Phenomenon</strong><strong>${phenomenon}</strong></div>
              <div class="mind-profile-item"><strong>Self-Reflection Anchor</strong><strong>${anchor}</strong></div>
            </div>
          </div>
        `;
      }
    }

    customElements.define('vim-choice', VimChoice);
    customElements.define('vim-instruction', VimInstruction);
    customElements.define('vim-blockquote', VimBlockquote);
    customElements.define('vim-image', VimImage);
    customElements.define('mind-session-info', MindSessionInfo);
    customElements.define('mind-perspective-mirror', MindPerspectiveMirror);

    /* ─── VOCABULARY PRONUNCIATION ──────────────────────────────── */
    const setupVocabPronunciation = () => {
        const vocabWords = document.querySelectorAll('.vocab-word');
        if (vocabWords.length === 0) return;

        const docLang = document.documentElement.lang || 'en';
        const langMap = {
            'en': 'en-GB', 'fr': 'fr-FR', 'it': 'it-IT', 'ru': 'ru-RU', 'el': 'el-GR',
            'es': 'es-ES', 'de': 'de-DE', 'pt': 'pt-PT', 'hy': 'hy-AM', 'ka': 'ka-GE',
            'tt': 'ru-RU', 'ba': 'ru-RU', 'br': 'fr-FR'
        };
        const targetLang = langMap[docLang.toLowerCase()] || docLang || 'en-GB';

        vocabWords.forEach(wordEl => {
            if (wordEl.querySelector('.btn-pronounce')) return;

            const originalText = wordEl.textContent.trim();
            if (!originalText) return;

            const btn = document.createElement('button');
            btn.className = 'btn-pronounce';
            btn.innerHTML = '🔊';
            btn.title = 'Listen Pronunciation';
            btn.setAttribute('aria-label', `Listen pronunciation of ${originalText}`);

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                speakVocab(originalText, targetLang);
            });

            wordEl.appendChild(btn);
        });
    };

    const speakVocab = (text, langCode) => {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();

        // Clean up formatting indicators or brackets for clearer pronunciation
        let cleanText = text.replace(/\((он|она|оно|они|м|ж|ср|м\/ж|f|m)\)/gi, '').trim();
        cleanText = cleanText.replace(/\s*≠\s*/g, ', ').trim();

        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = langCode;

        if (window.speechSynthesis.getVoices) {
            const voices = window.speechSynthesis.getVoices();
            let voice = voices.find(v => v.lang === langCode);
            if (!voice) voice = voices.find(v => v.lang.startsWith(langCode.split('-')[0]));
            if (voice) utterance.voice = voice;
        }

        window.speechSynthesis.speak(utterance);
    };

    /* ─── VIDEO PLAYER & DISCLAIMER INJECTION ────────────────────── */
    const setupEmbeddedVideoPlayers = () => {
        // Prevent duplicate setups
        if (document.querySelector('.cosy-video-wrapper')) return;

        // Skip embedding external videos/links for Big and Mini group views of Science club
        const path = window.location.pathname;
        const isKus = path.includes('sessions/keeping-up-with-science/');
        const params = new URLSearchParams(window.location.search);
        const mode = params.get('mode') || 'big';
        if (isKus && (mode === 'big' || mode === 'mini')) {
            return;
        }

        // Find all links to YouTube on the page
        const links = Array.from(document.querySelectorAll('a'));
        const youtubeLinks = links.filter(link => {
            const href = link.getAttribute('href') || '';
            return href.includes('youtube.com') || href.includes('youtu.be') || href.includes('youtube-nocookie.com');
        });

        if (youtubeLinks.length === 0) return;

        const getYouTubeId = (url) => {
            if (!url) return null;
            try {
                const regExp = /(?:https?:)?\/\/(?:[0-9A-Z-]+\.)?(?:youtube|youtu|youtube-nocookie)\.(?:com|be)\/(?:watch\?v=|embed\/|v\/|shorts\/|ytscreeningroom\?v=|v=|\/)?([0-9A-Za-z_-]{11})/i;
                const match = url.match(regExp);
                if (match && match[1]) {
                    return match[1];
                }
            } catch (e) {}
            return null;
        };

        const docLang = document.documentElement.lang || 'en';
        const disclaimers = {
            'en': 'Source: YouTube. This material is used strictly for educational purposes only.',
            'fr': 'Source : YouTube. Ce matériel est utilisé uniquement à des fins éducatives.',
            'ru': 'Источник: YouTube. Данный материал используется исключительно в образовательных целях.',
            'es': 'Fuente: YouTube. Este material se utiliza únicamente con fines educativos.',
            'it': 'Fonte: YouTube. Questo materiale viene utilizzato esclusivamente a scopo didattico.',
            'el': 'Πηγή: YouTube. Αυτό το υλικό χρησιμοποιείται αποκλειστικά για εκπαιδευτικούς σκοπούς.'
        };
        const disclaimerText = disclaimers[docLang.toLowerCase()] || disclaimers['en'];

        // Find any .lyrics-container (Karaoke Club Pages)
        const lyricContainers = Array.from(document.querySelectorAll('.lyrics-container'));

        if (lyricContainers.length > 0) {
            lyricContainers.forEach(container => {
                // Find nearest YouTube link for this lyrics block (inside the same vim-choice-option if exists)
                const choiceParent = container.closest('.vim-tab-pane') || container.closest('vim-choice-option-content') || container.closest('vim-choice-option');
                let targetLink = null;
                if (choiceParent) {
                    const parentLinks = Array.from(choiceParent.querySelectorAll('a'));
                    targetLink = parentLinks.find(link => getYouTubeId(link.getAttribute('href')));
                }
                if (!targetLink) {
                    // Fallback to first available YouTube link on the page that has a valid ID
                    targetLink = youtubeLinks.find(link => getYouTubeId(link.getAttribute('href')));
                }

                const videoId = getYouTubeId(targetLink?.getAttribute('href'));
                if (videoId) {
                    const playerWrapper = document.createElement('div');
                    playerWrapper.className = 'cosy-video-wrapper';
                    playerWrapper.innerHTML = `
                        <div class="cosy-video-container">
                            <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
                        </div>
                        <div class="cosy-video-disclaimer">
                            <span>ℹ️ ${disclaimerText}</span>
                        </div>
                    `;
                    container.parentNode.insertBefore(playerWrapper, container);
                }
            });
        } else {
            // For other pages (like Speaking Club pages with a single YouTube source), find the meta grid
            const metaGrid = document.querySelector('.session-meta-grid');
            if (metaGrid) {
                // Find the first YouTube link on the page that has a valid ID
                const targetLink = youtubeLinks.find(link => getYouTubeId(link.getAttribute('href')));
                const videoId = getYouTubeId(targetLink?.getAttribute('href'));
                if (videoId) {
                    const playerWrapper = document.createElement('div');
                    playerWrapper.className = 'cosy-video-wrapper';
                    playerWrapper.innerHTML = `
                        <div class="cosy-video-container">
                            <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
                        </div>
                        <div class="cosy-video-disclaimer">
                            <span>ℹ️ ${disclaimerText}</span>
                        </div>
                    `;
                    metaGrid.parentNode.insertBefore(playerWrapper, metaGrid.nextSibling);
                }
            }
        }
    };

    /* ─── ARTICLE READER & DISCLAIMER INJECTION ──────────────────── */
    const setupEmbeddedArticles = () => {
        // Prevent duplicate setups
        if (document.querySelector('.cosy-article-wrapper')) return;

        // Only setup embedded articles on session pages or pages with source cards/meta grids
        const isSessionPage = window.location.pathname.includes('/sessions/') ||
                              !!document.querySelector('.science-source-card') ||
                              !!document.querySelector('.session-meta-grid');
        if (!isSessionPage) return;

        // Find all links on the page
        const links = Array.from(document.querySelectorAll('a'));
        const articleLinks = links.filter(link => {
            const href = link.getAttribute('href') || '';
            const text = (link.textContent || '').toLowerCase();
            const isExternal = href.startsWith('http://') || href.startsWith('https://');
            const isVideo = href.includes('youtube.com') || href.includes('youtu.be') || href.includes('youtube-nocookie.com');
            const isMedia = href.match(/\.(png|jpg|jpeg|gif|pdf|mp3|mp4|webm)$/i);

            // Check if link is inside meta-item or matches keywords across languages (en, fr, ru, es, it)
            const isMetaItemLink = !!link.closest('.meta-item');
            const matchesKeyword = text.includes('article') || text.includes('text') || text.includes('read') || text.includes('reading') || text.includes('lire') || text.includes('читать') || text.includes('стать') || text.includes('📖');

            return isExternal && !isVideo && !isMedia && (matchesKeyword || isMetaItemLink);
        });

        if (articleLinks.length === 0) return;

        const docLang = document.documentElement.lang || 'en';
        const disclaimers = {
            'en': 'Source: External Article. This material is used strictly for educational purposes only.',
            'fr': 'Source : Article externe. Ce matériel est utilisé uniquement à des fins éducatives.',
            'ru': 'Источник: Внешняя статья. Данный материал используется исключительно в образовательных целях.',
            'es': 'Fuente: Artículo externo. Este material se utiliza únicamente con fines educativos.',
            'it': 'Fonte: Articolo esterno. Questo materiale viene utilizzato esclusivamente a scopo didattico.',
            'el': 'Πηγή: Εξωτερικό άρθρο. Αυτό το υλικό χρησιμοποιείται αποκλειστικά για εκπαιδευτικούς σκοπούς.'
        };
        const disclaimerText = disclaimers[docLang.toLowerCase()] || disclaimers['en'];

        articleLinks.forEach(link => {
            const articleUrl = link.getAttribute('href');
            if (!articleUrl) return;

            const playerWrapper = document.createElement('div');
            playerWrapper.className = 'cosy-article-wrapper';
            playerWrapper.style.margin = '2rem 0';
            playerWrapper.innerHTML = `
                <div class="cosy-article-header" style="background: var(--cream); border: 1px solid var(--border); border-bottom: none; border-radius: 12px 12px 0 0; padding: 0.75rem 1rem; display: flex; justify-content: space-between; align-items: center; box-sizing: border-box;">
                    <span style="font-weight: 600; font-family: 'Playfair Display', serif; color: var(--indigo); font-size: 1rem;">📖 Embedded Reader</span>
                    <a href="${articleUrl}" target="_blank" style="background: var(--indigo); color: white; border: none; padding: 0.35rem 0.75rem; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 0.8rem; text-decoration: none;">Open in New Tab ↗</a>
                </div>
                <div class="cosy-article-container" style="position: relative; width: 100%; height: 500px; border: 1px solid var(--border); border-radius: 0 0 12px 12px; overflow: hidden; background: #fff; box-sizing: border-box;">
                    <iframe src="${articleUrl}" style="width: 100%; height: 100%; border: none;" allowfullscreen></iframe>
                </div>
                <div class="cosy-article-disclaimer" style="margin-top: 0.5rem; font-size: 0.75rem; color: var(--muted); display: flex; align-items: center; gap: 0.25rem;">
                    <span>ℹ️ ${disclaimerText}</span>
                </div>
            `;

            // Inject the wrapper after source card or meta grid if present
            const targetContainer = document.querySelector('.science-source-card') || document.querySelector('.session-meta-grid');
            if (targetContainer) {
                targetContainer.parentNode.insertBefore(playerWrapper, targetContainer.nextSibling);
            } else {
                // Fallback: insert after the link's parent container or paragraph
                const parent = link.closest('p') || link.closest('.science-source-card') || link.closest('div') || link;
                parent.parentNode.insertBefore(playerWrapper, parent.nextSibling);
            }
        });
    };

    /* ─── LYRICS DISCLAIMER INJECTION ────────────────────────── */
    const setupLyricsDisclaimers = () => {
        // Find all .lyrics-container
        const lyricContainers = Array.from(document.querySelectorAll('.lyrics-container'));
        if (lyricContainers.length === 0) return;

        const docLang = document.documentElement.lang || 'en';
        const disclaimers = {
            'en': 'Disclaimer: These song lyrics are used strictly for educational purposes only.',
            'fr': 'Avertissement : Les paroles de ces chansons sont utilisées uniquement à des fins éducatives.',
            'ru': 'Предупреждение: Текст этой песни используется исключительно в образовательных целях.',
            'es': 'Descargo de responsabilidad: Las letras de estas canciones se utilizan únicamente con fines educativos.',
            'it': 'Dichiarazione di non responsabilità: I testi di queste canzoni sono utilizzati esclusivamente a scopo didattico.',
            'el': 'Αποποίηση ευθύνης: Οι στίχοι αυτών των τραγουδιών χρησιμοποιούνται αποκλειστικά για εκπαιδευτικούς σκοπούς.'
        };
        const disclaimerText = disclaimers[docLang.toLowerCase()] || disclaimers['en'];

        lyricContainers.forEach(container => {
            // Prevent duplicate disclaimers
            if (container.querySelector('.cosy-lyrics-disclaimer')) return;

            const disclaimerDiv = document.createElement('div');
            disclaimerDiv.className = 'cosy-lyrics-disclaimer';
            disclaimerDiv.style.marginTop = '1.5rem';
            disclaimerDiv.style.paddingTop = '1rem';
            disclaimerDiv.style.borderTop = '1px dashed var(--border)';
            disclaimerDiv.style.fontSize = '0.8rem';
            disclaimerDiv.style.color = 'var(--muted)';
            disclaimerDiv.style.fontStyle = 'italic';
            disclaimerDiv.innerHTML = `ℹ️ ${disclaimerText}`;
            container.appendChild(disclaimerDiv);
        });
    };

    /* ─── DOUBLE-CLICK VOCABULARY HARVESTING ──────────────────────── */
    /* ─── VOCAB HOVER TOOLTIP SYSTEM ────────────────────────────── */
    const setupVocabHover = () => {
        const cards = document.querySelectorAll('.vocab-card');
        if (cards.length === 0) return;

        // Parse vocabulary items from the page
        const vocabMap = {};
        const allWords = [];

        cards.forEach(card => {
            const wordEl = card.querySelector('.vocab-word');
            if (!wordEl) return;

            // Clone word to get clean text (ignoring pronunciation speaker button if present)
            const clonedWord = wordEl.cloneNode(true);
            const pronBtn = clonedWord.querySelector('.btn-pronounce');
            if (pronBtn) pronBtn.remove();
            const originalWordText = clonedWord.textContent.trim();
            if (!originalWordText) return;

            const defEl = card.querySelector('.vocab-def');
            const defText = defEl ? defEl.textContent.trim() : '';

            const exEl = card.querySelector('.vocab-example');
            const exText = exEl ? exEl.textContent.trim() : '';

            // Clean wordText for matching (e.g. "Resilience ≠ Fragility" or "A ≠ B")
            // We split on common separators like ≠, ≈, /, , to find words we want to hover
            const separators = /[≠≈/,]/;
            const wordVariants = originalWordText.split(separators).map(w => w.trim()).filter(Boolean);

            // Save word metadata under each variant, plus the original full word itself
            const allVariants = [originalWordText, ...wordVariants];

            allVariants.forEach(variant => {
                const normalized = variant.toLowerCase();
                // Ensure we don't overwrite if variant is already added
                if (!vocabMap[normalized]) {
                    vocabMap[normalized] = {
                        word: originalWordText,
                        variant: variant,
                        definition: defText,
                        example: exText
                    };
                    if (variant.length >= 3) { // Avoid hovering extremely short words like "A", "I", "To"
                        allWords.push(variant);
                    }
                }
            });
        });

        if (allWords.length === 0) return;

        // Sort words by length descending to match longer phrases first (e.g. "Self-worth" before "Self")
        allWords.sort((a, b) => b.length - a.length);

        // Find elements that we want to scan and insert triggers in (discussion questions/prompts)
        const targets = document.querySelectorAll('.round-item-main, .round-item-personal, .round-questions li, .lst-item div');

        // Function to process a text node and highlight matches
        const highlightTextNode = (node, wordsMap, sortedWords) => {
            const text = node.nodeValue;
            if (!text.trim()) return;

            let earliestMatch = null;

            for (const word of sortedWords) {
                const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const boundaryChars = "a-zA-Z0-9а-яА-ЯёЁα-ωΑ-Ωίϊΐόάέύϋΰήώçéèàùâêîôûëïüäößœæç";
                let regex;
                try {
                    regex = new RegExp('(?<=^|[^' + boundaryChars + '])(' + escaped + ')(?=$|[^' + boundaryChars + '])', 'i');
                } catch (e) {
                    // Fallback RegExp if lookbehinds are not supported
                    regex = new RegExp('()(' + escaped + ')()', 'i');
                }

                const match = regex.exec(text);
                if (match) {
                    const index = match.index;
                    if (earliestMatch === null || index < earliestMatch.index) {
                        earliestMatch = {
                            index: index,
                            length: match[0].length,
                            wordText: match[0],
                            matchedKey: word.toLowerCase()
                        };
                    }
                }
            }

            if (earliestMatch) {
                const beforeText = text.substring(0, earliestMatch.index);
                const matchText = text.substring(earliestMatch.index, earliestMatch.index + earliestMatch.length);
                const afterText = text.substring(earliestMatch.index + earliestMatch.length);

                const parent = node.parentNode;
                if (!parent) return;

                const trigger = document.createElement('span');
                trigger.className = 'vocab-hover-trigger';
                trigger.setAttribute('data-vocab-word', earliestMatch.matchedKey);
                trigger.textContent = matchText;

                const beforeNode = document.createTextNode(beforeText);
                const afterNode = document.createTextNode(afterText);

                parent.insertBefore(beforeNode, node);
                parent.insertBefore(trigger, node);
                parent.insertBefore(afterNode, node);
                parent.removeChild(node);

                // Recurse on the remaining after text node
                highlightTextNode(afterNode, wordsMap, sortedWords);
            }
        };

        // Scan all target elements using a TreeWalker to safely find and modify text nodes
        targets.forEach(target => {
            const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT, null, false);
            const textNodes = [];
            while (walker.nextNode()) {
                // Ensure we are not inside an existing link, button, or trigger element
                const parent = walker.currentNode.parentNode;
                if (parent && !parent.closest('a, button, .vocab-hover-trigger, .btn-pronounce')) {
                    textNodes.push(walker.currentNode);
                }
            }

            textNodes.forEach(node => {
                highlightTextNode(node, vocabMap, allWords);
            });
        });

        // Set up global tooltip element
        let tooltip = document.getElementById('vocab-hover-tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = 'vocab-hover-tooltip';
            document.body.appendChild(tooltip);
        }

        let hoverTimeout = null;
        let activeTrigger = null;

        const showTooltip = (triggerEl, e) => {
            if (hoverTimeout) clearTimeout(hoverTimeout);

            const wordKey = triggerEl.getAttribute('data-vocab-word');
            const data = vocabMap[wordKey];
            if (!data) return;

            activeTrigger = triggerEl;
            triggerEl.classList.add('active');

            // Render tooltip contents
            tooltip.innerHTML = `
                <div class="vht-header">
                    <span class="vht-word">${data.word}</span>
                    <button class="vht-close" aria-label="Close tooltip">×</button>
                </div>
                <div class="vht-body">
                    <span class="vht-def-label">Definition</span>
                    <span class="vht-def">${data.definition}</span>
                    ${data.example ? `
                        <span class="vht-example-label">Example</span>
                        <span class="vht-example">${data.example}</span>
                    ` : ''}
                </div>

            `;

            // Setup close button click action
            const closeBtn = tooltip.querySelector('.vht-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', hideTooltip);
            }

            // Position and show tooltip
            tooltip.style.display = 'block';

            // Calculate absolute position
            const rect = triggerEl.getBoundingClientRect();
            const scrollY = window.scrollY;
            const scrollX = window.scrollX;

            let top = rect.top + scrollY - tooltip.offsetHeight - 10;
            let left = rect.left + scrollX + (rect.width / 2) - (tooltip.offsetWidth / 2);

            // Bounds check for viewport top overflow
            if (rect.top - tooltip.offsetHeight - 15 < 0) {
                // Show below instead
                top = rect.bottom + scrollY + 10;
            }

            // Bounds check for viewport left/right overflow
            const margin = 16;
            if (left < margin) {
                left = margin;
            } else if (left + tooltip.offsetWidth > window.innerWidth - margin) {
                left = window.innerWidth - tooltip.offsetWidth - margin;
            }

            tooltip.style.top = `${top}px`;
            tooltip.style.left = `${left}px`;
            tooltip.classList.add('visible');
        };

        const hideTooltip = () => {
            if (hoverTimeout) clearTimeout(hoverTimeout);
            tooltip.classList.remove('visible');
            if (activeTrigger) {
                activeTrigger.classList.remove('active');
                activeTrigger = null;
            }
            // Keep display block for fade-out, then none
            hoverTimeout = setTimeout(() => {
                if (!tooltip.classList.contains('visible')) {
                    tooltip.style.display = 'none';
                }
            }, 200);
        };

        // Event listeners for triggers
        document.querySelectorAll('.vocab-hover-trigger').forEach(trigger => {
            // Touch devices (Mobile/Tablets)
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                if (activeTrigger === trigger) {
                    hideTooltip();
                } else {
                    showTooltip(trigger, e);
                }
            });

            // Hover (Desktop)
            trigger.addEventListener('mouseenter', (e) => {
                if (window.matchMedia('(hover: hover)').matches) {
                    showTooltip(trigger, e);
                }
            });

            trigger.addEventListener('mouseleave', () => {
                if (window.matchMedia('(hover: hover)').matches) {
                    // Let the user hover into the tooltip before hiding it
                    hoverTimeout = setTimeout(hideTooltip, 300);
                }
            });
        });

        if (!window.cosyVocabHoverDocListenersSetup) {
            window.cosyVocabHoverDocListenersSetup = true;

            // Hover events on tooltip itself so it doesn't close
            tooltip.addEventListener('mouseenter', () => {
                if (window.matchMedia('(hover: hover)').matches && hoverTimeout) {
                    clearTimeout(hoverTimeout);
                }
            });

            tooltip.addEventListener('mouseleave', () => {
                if (window.matchMedia('(hover: hover)').matches) {
                    hoverTimeout = setTimeout(hideTooltip, 300);
                }
            });

            // Close on clicking outside or Esc key
            document.addEventListener('click', (e) => {
                if (activeTrigger && !tooltip.contains(e.target) && !activeTrigger.contains(e.target)) {
                    hideTooltip();
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    hideTooltip();
                }
            });
        }
    };

    /* ─── CLUB FILTER ENGINE (MULTIMEDIA & SPEAKING CLUBS) ────────── */
    const setupClubFilters = () => {
        const historyBody = document.querySelector('.history-body') || document.querySelector('.history-block') || document.querySelector('.cinema-grid') || document.getElementById('cinema-history-grid') || document.querySelector('.karaoke-sessions-grid');
        if (!historyBody) return;

        const sessions = document.querySelectorAll('.history-session');
        if (sessions.length === 0) return;

        const searchInputs = document.querySelectorAll('#cinema-search-input, #karaoke-search-input, .club-search-input');
        const langBtns = document.querySelectorAll('.lang-filter-buttons .filter-btn, [data-lang-filter], .club-filters-lang .filter-btn');
        const levelBtns = document.querySelectorAll('.level-filter-buttons .filter-btn, [data-level-filter], .club-filters-level .filter-btn, .club-filters .filter-btn');
        const sensitiveToggles = document.querySelectorAll('#cinema-sensitive-toggle, #karaoke-sensitive-toggle, .sensitive-toggle');
        const resultCounters = document.querySelectorAll('#cinema-result-count, #karaoke-result-count, .result-count');

        let noSessionsMsg = document.getElementById('no-sessions-msg');
        if (!noSessionsMsg && historyBody) {
            noSessionsMsg = document.createElement('div');
            noSessionsMsg.id = 'no-sessions-msg';
            noSessionsMsg.style.cssText = 'text-align: center; padding: 3rem 1.5rem; background: var(--cream, #FAF7F2); border-radius: 16px; border: 1.5px dashed var(--border); margin: 1.5rem 0; width: 100%; box-sizing: border-box; grid-column: 1 / -1;';

            const docLang = document.documentElement.lang || 'en';
            const msgs = {
                en: { title: 'No matching sessions found', desc: 'Try adjusting your search terms, language filter, or level selection!' },
                fr: { title: 'Aucune session trouvée', desc: 'Essayez de modifier vos termes de recherche ou vos filtres !' },
                ru: { title: 'Сессии не найдены', desc: 'Попробуйте изменить параметры поиска или языковой уровень!' }
            };
            const msg = msgs[docLang.toLowerCase()] || msgs['en'];

            noSessionsMsg.innerHTML = `
                <span style="font-size: 2.5rem; display: block; margin-bottom: 1rem;">🔍</span>
                <h4 style="margin: 0 0 0.5rem; color: var(--ink-soft); font-family: 'Playfair Display', serif; font-size: 1.3rem;">${msg.title}</h4>
                <p style="margin: 0; font-size: 0.9rem; color: var(--muted);">${msg.desc}</p>
            `;
            noSessionsMsg.style.display = 'none';
            historyBody.appendChild(noSessionsMsg);
        }

        const applyFilters = () => {
            let query = '';
            searchInputs.forEach(i => { if (i.value.trim()) query = i.value.trim().toLowerCase(); });

            let selectedLang = 'all';
            const activeLangBtn = document.querySelector('.lang-filter-buttons .filter-btn.active, [data-lang-filter].active, .club-filters-lang .filter-btn.active');
            if (activeLangBtn) {
                selectedLang = activeLangBtn.getAttribute('data-lang-filter') || activeLangBtn.getAttribute('data-lang') || 'all';
            }

            let selectedLevel = 'all';
            const activeLevelBtn = document.querySelector('.level-filter-buttons .filter-btn.active, [data-level-filter].active, .club-filters-level .filter-btn.active, .club-filters .filter-btn.active');
            if (activeLevelBtn) {
                selectedLevel = activeLevelBtn.getAttribute('data-level-filter') || activeLevelBtn.getAttribute('data-level') || 'all';
            }

            let hideSensitive = false;
            sensitiveToggles.forEach(t => { if (t.checked) hideSensitive = true; });

            let visibleCount = 0;

            sessions.forEach(sess => {
                const isPinned = !!sess.closest('.pinned-challenges-section');
                const titleAttr = (sess.getAttribute('data-title') || '').toLowerCase();
                const langAttr = sess.getAttribute('data-lang') || 'en';
                const levelsAttr = sess.getAttribute('data-level') || '';
                const levels = levelsAttr.toLowerCase().split(/\s+/);
                const isSensitive = sess.getAttribute('data-sensitive') === 'true' || sess.textContent.includes('🔞') || sess.textContent.includes('18+');
                const textContent = sess.textContent.toLowerCase();

                const matchQuery = !query || titleAttr.includes(query) || textContent.includes(query);
                const matchLang = (selectedLang === 'all' || langAttr === selectedLang);
                const matchLevel = (selectedLevel === 'all' || levels.includes(selectedLevel));
                const matchSensitive = !hideSensitive || !isSensitive;

                if (matchQuery && matchLang && matchLevel && matchSensitive) {
                    sess.style.setProperty('display', '', '');
                    if (!isPinned) visibleCount++;
                } else {
                    sess.style.setProperty('display', 'none', 'important');
                }
            });

            resultCounters.forEach(c => {
                const isCinema = c.id === 'cinema-result-count';
                const label = isCinema ? 'films' : 'sessions';
                c.textContent = `Showing ${visibleCount} ${label}`;
            });

            if (noSessionsMsg) {
                noSessionsMsg.style.display = (visibleCount === 0) ? 'block' : 'none';
            }
        };

        searchInputs.forEach(input => {
            if (input.dataset.bound) return;
            input.dataset.bound = 'true';
            input.addEventListener('input', applyFilters);
        });

        const allButtons = document.querySelectorAll('.filter-btn, [data-lang-filter], [data-level-filter]');
        allButtons.forEach(btn => {
            if (btn.dataset.filterBound === 'true') return;
            btn.dataset.filterBound = 'true';

            btn.addEventListener('click', () => {
                const container = btn.parentElement;
                if (container) {
                    container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                }
                btn.classList.add('active');
                applyFilters();
            });
        });

        sensitiveToggles.forEach(toggle => {
            if (toggle.dataset.bound) return;
            toggle.dataset.bound = 'true';
            toggle.addEventListener('change', applyFilters);
        });

        applyFilters();
    };

    /* ─── SESSION SWITCHER ENGINE ───────────────────────────────── */
    const SWITCHER_LOCALES = {
        en: {
            languages: "Available Languages:",
            levels: "Available Levels:"
        },
        fr: {
            languages: "Langues disponibles :",
            levels: "Niveaux disponibles :"
        },
        ru: {
            languages: "Доступные языки:",
            levels: "Доступные уровни:"
        }
    };

    const SWITCHER_GROUPS = [
        // ⚖️ My Life With & Without Level-Switching Groups
        {
            id: "life-obsolete-jobs",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/life/sessions/my-life-with-without/obsolete-jobs-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/life/sessions/my-life-with-without/obsolete-jobs-advanced.html", level: "C1", label: "🇬🇧 English", levelLabel: "Advanced (C1)" }
            ]
        },
        {
            id: "life-high-rise-skyscrapers",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/life/sessions/my-life-with-without/high-rise-skyscrapers-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/life/sessions/my-life-with-without/high-rise-skyscrapers-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "life-private-cars",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/life/sessions/my-life-with-without/private-cars-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/life/sessions/my-life-with-without/private-cars-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        // 🌌 I Couldn't Help But Wonder Multilingual Groups
        {
            id: "wonder-are-traditions-hidden-monogamy",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/wonder/sessions/i-couldnt-help-but-wonder/are-traditions-hidden-monogamy-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "en", path: "apps/premium-events/clubs/wonder/sessions/i-couldnt-help-but-wonder/are-traditions-hidden-monogamy.html", level: "C1", label: "🇬🇧 English", levelLabel: "Advanced (C1)" }
            ]
        },
        {
            id: "wonder-ugly-produce",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/wonder/sessions/i-couldnt-help-but-wonder/ugly-produce-anti-waste.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "apps/premium-events/clubs/wonder/fr/sessions/i-couldnt-help-but-wonder/ugly-produce-anti-waste.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" }
            ]
        },
        {
            id: "wonder-adhd",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/wonder/sessions/i-couldnt-help-but-wonder/why-do-we-try-to-relate-to-adhd.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "apps/premium-events/clubs/wonder/fr/sessions/i-couldnt-help-but-wonder/why-do-we-try-to-relate-to-adhd.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" }
            ]
        },
        {
            id: "wonder-parenting-instinct",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/wonder/sessions/i-couldnt-help-but-wonder/is-parenting-instinct-a-real-thing-or-scam.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "apps/premium-events/clubs/wonder/fr/sessions/i-couldnt-help-but-wonder/is-parenting-instinct-a-real-thing-or-scam.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" }
            ]
        },
        {
            id: "wonder-feeling-empty",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/wonder/sessions/i-couldnt-help-but-wonder/feeling-empty-after-series.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "apps/premium-events/clubs/wonder/fr/sessions/i-couldnt-help-but-wonder/feeling-empty-after-series.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" }
            ]
        },
        {
            id: "wonder-death-album",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/wonder/sessions/i-couldnt-help-but-wonder/death-of-the-album.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "apps/premium-events/clubs/wonder/fr/sessions/i-couldnt-help-but-wonder/death-of-the-album.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" }
            ]
        },
        // 🎉 Let's Celebrate Multilingual Groups
        {
            id: "celebrate-lunar-new-year",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/celebrate/sessions/lets-celebrate/lunar-new-year.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "apps/premium-events/clubs/celebrate/fr/sessions/lets-celebrate/lunar-new-year.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" },
                { lang: "ru", path: "apps/premium-events/clubs/celebrate/ru/sessions/lets-celebrate/lunar-new-year.html", level: "B1", label: "🇷🇺 Русский", levelLabel: "Средний (B1)" }
            ]
        },
        {
            id: "celebrate-diwali-festival",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/celebrate/sessions/lets-celebrate/diwali-festival.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "apps/premium-events/clubs/celebrate/fr/sessions/lets-celebrate/diwali-festival.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" },
                { lang: "ru", path: "apps/premium-events/clubs/celebrate/ru/sessions/lets-celebrate/diwali-festival.html", level: "B1", label: "🇷🇺 Русский", levelLabel: "Средний (B1)" }
            ]
        },
        {
            id: "celebrate-national-simplicity-day",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/celebrate/sessions/lets-celebrate/national-simplicity-day.html", level: "A1", label: "🇬🇧 English", levelLabel: "Starter (A1)" },
                { lang: "fr", path: "apps/premium-events/clubs/celebrate/fr/sessions/lets-celebrate/national-simplicity-day.html", level: "A1", label: "🇫🇷 Français", levelLabel: "Débutant (A1)" },
                { lang: "ru", path: "apps/premium-events/clubs/celebrate/ru/sessions/lets-celebrate/national-simplicity-day.html", level: "A1", label: "🇷🇺 Русский", levelLabel: "Начинающий (A1)" }
            ]
        },
        {
            id: "celebrate-national-workaholics-day",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/celebrate/sessions/lets-celebrate/national-workaholics-day.html", level: "A1", label: "🇬🇧 English", levelLabel: "Starter (A1)" },
                { lang: "fr", path: "apps/premium-events/clubs/celebrate/fr/sessions/lets-celebrate/national-workaholics-day.html", level: "A1", label: "🇫🇷 Français", levelLabel: "Débutant (A1)" },
                { lang: "ru", path: "apps/premium-events/clubs/celebrate/ru/sessions/lets-celebrate/national-workaholics-day.html", level: "A1", label: "🇷🇺 Русский", levelLabel: "Начинающий (A1)" }
            ]
        },
        {
            id: "celebrate-family-remittances-day",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/celebrate/sessions/lets-celebrate/family-remittances-day.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "apps/premium-events/clubs/celebrate/fr/sessions/lets-celebrate/family-remittances-day.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" },
                { lang: "ru", path: "apps/premium-events/clubs/celebrate/ru/sessions/lets-celebrate/family-remittances-day.html", level: "B1", label: "🇷🇺 Русский", levelLabel: "Средний (B1)" }
            ]
        },
        {
            id: "celebrate-urban-beekeeping-day",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/celebrate/sessions/lets-celebrate/urban-beekeeping-day-starter.html", level: "A1", label: "🇬🇧 English", levelLabel: "Starter (A1)" },
                { lang: "en", path: "apps/premium-events/clubs/celebrate/sessions/lets-celebrate/urban-beekeeping-day-elementary.html", level: "A2", label: "🇬🇧 English", levelLabel: "Elementary (A2)" }
            ]
        },
        {
            id: "celebrate-national-someone-day",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/celebrate/sessions/lets-celebrate/national-someone-day-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/celebrate/sessions/lets-celebrate/national-someone-day-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "celebrate-pandemonium-day",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/celebrate/sessions/lets-celebrate/pandemonium-day-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/celebrate/sessions/lets-celebrate/pandemonium-day-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "celebrate-international-peace-love-day",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/celebrate/sessions/lets-celebrate/international-peace-love-day-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/celebrate/sessions/lets-celebrate/international-peace-love-day-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "celebrate-international-asteroid-day",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/celebrate/sessions/lets-celebrate/international-asteroid-day-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/celebrate/sessions/lets-celebrate/international-asteroid-day-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "4-day-work-week",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/debate/sessions/debatable-relatable/4-day-work-week.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "apps/premium-events/clubs/debate/fr/sessions/debatable-relatable/la-semaine-de-4-jours.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" },
                { lang: "ru", path: "apps/premium-events/clubs/debate/ru/sessions/debatable-relatable/4-dnevnaya-rabochaya-nedelya.html", level: "B1", label: "🇷🇺 Русский", levelLabel: "Средний (B1)" }
            ]
        },
        {
            id: "assisted-dying",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/debate/sessions/debatable-relatable/assisted-dying.html", level: "C1", label: "🇬🇧 English", levelLabel: "Advanced (C1)" },
                { lang: "fr", path: "apps/premium-events/clubs/debate/fr/sessions/debatable-relatable/l-aide-active-a-mourir.html", level: "C1", label: "🇫🇷 Français", levelLabel: "Avancé (C1)" }
            ]
        },
        {
            id: "short-holiday-vs-long-holiday",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/debate/sessions/debatable-relatable/short-holiday-vs-long-holiday-elementary.html", level: "A2", label: "🇬🇧 English", levelLabel: "Elementary (A2)" },
                { lang: "en", path: "apps/premium-events/clubs/debate/sessions/debatable-relatable/short-holiday-vs-long-holiday-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/debate/sessions/debatable-relatable/short-holiday-vs-long-holiday-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "typing-vs-handwriting",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/debate/sessions/debatable-relatable/typing-vs-handwriting-elementary.html", level: "A2", label: "🇬🇧 English", levelLabel: "Elementary (A2)" },
                { lang: "en", path: "apps/premium-events/clubs/debate/sessions/debatable-relatable/typing-vs-handwriting-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/debate/sessions/debatable-relatable/typing-vs-handwriting-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "human-cloning",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/debate/sessions/debatable-relatable/human-cloning-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/debate/sessions/debatable-relatable/human-cloning-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "ape-laughter-speech-origin",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/ape-laughter-speech-origin-elementary.html", level: "A2", label: "🇬🇧 English", levelLabel: "Elementary (A2)" },
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/ape-laughter-speech-origin-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" }
            ]
        },
        {
            id: "museums-movies-theater-stay-younger",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/museums-movies-theater-stay-younger-elementary.html", level: "A2", label: "🇬🇧 English", levelLabel: "Elementary (A2)" },
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/museums-movies-theater-stay-younger-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/museums-movies-theater-stay-younger-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "where-you-live-shapes-dementia-risk",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/where-you-live-shapes-dementia-risk-elementary.html", level: "A2", label: "🇬🇧 English", levelLabel: "Elementary (A2)" },
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/where-you-live-shapes-dementia-risk-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/where-you-live-shapes-dementia-risk-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "impersonation-accounts",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/impersonation-accounts.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "apps/premium-events/clubs/kus/fr/sessions/keeping-up-with-science/impersonation-accounts.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" }
            ]
        },
        {
            id: "your-fingers-hold-secret-brain-evolution",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/your-fingers-hold-secret-brain-evolution-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/your-fingers-hold-secret-brain-evolution-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "spider-creatures-origins-of-fatherhood",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/spider-creatures-origins-of-fatherhood-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/spider-creatures-origins-of-fatherhood-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "sensory-system-pain-disease",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/sensory-system-pain-disease-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/sensory-system-pain-disease-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "climate-scientist-warming-report",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/climate-scientist-warming-report-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/climate-scientist-warming-report-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "ozempic-obesity-revolution",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/ozempic-obesity-revolution-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/ozempic-obesity-revolution-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "animal-cooperation-language",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/animal-cooperation-language-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/animal-cooperation-language-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "hidden-regenerative-powers",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/hidden-regenerative-powers-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/hidden-regenerative-powers-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "brain-improving-in-90s",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/brain-improving-in-90s-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/brain-improving-in-90s-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "football-beats-shamrock",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/football-beats-shamrock-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/football-beats-shamrock-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "ai-and-the-brain",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/ai-and-the-brain-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/kus/sessions/keeping-up-with-science/ai-and-the-brain-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "feynman-knowledge-isnt-free",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/feynman-knowledge-isnt-free-elementary.html", level: "A2", label: "🇬🇧 English", levelLabel: "Elementary (A2)" },
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/feynman-knowledge-isnt-free-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/feynman-knowledge-isnt-free-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "feynman-study-hard",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/feynman-study-hard.html", level: "A2", label: "🇬🇧 English", levelLabel: "Elementary (A2)" },
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/feynman-study-hard-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" }
            ]
        },
        {
            id: "madonna-ai-art-quote",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/madonna-ai-art-quote-elementary.html", level: "A2", label: "🇬🇧 English", levelLabel: "Elementary (A2)" },
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/madonna-ai-art-quote-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/madonna-ai-art-quote-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "dolto-difficult-child-quote",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/dolto-difficult-child-quote.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "apps/premium-events/clubs/quotes/fr/sessions/the-greatest-quotes/dolto-difficult-child-quote.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" },
                { lang: "ru", path: "apps/premium-events/clubs/quotes/ru/sessions/the-greatest-quotes/dolto-difficult-child-quote.html", level: "B2", label: "🇷🇺 Русский", levelLabel: "Выше среднего (B2)" }
            ]
        },
        {
            id: "accept-gay-child",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/accept-gay-child.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "apps/premium-events/clubs/quotes/fr/sessions/the-greatest-quotes/accept-gay-child.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" },
                { lang: "ru", path: "apps/premium-events/clubs/mind/ru/sessions/mind-matters/syn-vlyubilsya-v-druga.html", level: "B2", label: "🇷🇺 Русский", levelLabel: "Выше среднего (B2)" }
            ]
        },
        {
            id: "robin-williams-quote",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/robin-williams-quote-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/robin-williams-quote-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "ai-opposite-of-art",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/ai-opposite-of-art-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/ai-opposite-of-art-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/ai-opposite-of-art.html", level: "C1", label: "🇬🇧 English", levelLabel: "Advanced (C1)" },
                { lang: "fr", path: "apps/premium-events/clubs/quotes/fr/sessions/the-greatest-quotes/ai-opposite-of-art.html", level: "C1", label: "🇫🇷 Français", levelLabel: "Avancé (C1)" }
            ]
        },
        {
            id: "dangerous-blindness-perspective",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/dangerous-blindness-perspective.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "apps/premium-events/clubs/quotes/fr/sessions/the-greatest-quotes/dangerous-blindness-perspective.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "favorite-days-not-happened",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/favorite-days-not-happened.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "apps/premium-events/clubs/quotes/fr/sessions/the-greatest-quotes/favorite-days-not-happened.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "home-is-a-time",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/home-is-a-time.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "apps/premium-events/clubs/quotes/fr/sessions/the-greatest-quotes/home-is-a-time.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" }
            ]
        },
        {
            id: "must-die-first",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/must-die-first.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "apps/premium-events/clubs/quotes/fr/sessions/the-greatest-quotes/must-die-first.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "saudade",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/saudade.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "apps/premium-events/clubs/quotes/fr/sessions/the-greatest-quotes/saudade.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" }
            ]
        },
        {
            id: "sonder",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/sonder.html", level: "C1", label: "🇬🇧 English", levelLabel: "Advanced (C1)" },
                { lang: "fr", path: "apps/premium-events/clubs/quotes/fr/sessions/the-greatest-quotes/sonder.html", level: "C1", label: "🇫🇷 Français", levelLabel: "Avancé (C1)" }
            ]
        },
        {
            id: "women-mothers-tragedy",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/women-mothers-tragedy.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "apps/premium-events/clubs/quotes/fr/sessions/the-greatest-quotes/women-mothers-tragedy.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "you-are-a-soul",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/you-are-a-soul.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "apps/premium-events/clubs/quotes/fr/sessions/the-greatest-quotes/you-are-a-soul.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" }
            ]
        },
        {
            id: "voltaire-read-dance-quote",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/voltaire-read-dance-quote.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "fr", path: "apps/premium-events/clubs/quotes/fr/sessions/the-greatest-quotes/voltaire-read-dance-quote.html", level: "B1", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B1)" }
            ]
        },
        {
            id: "anticipatory-grief",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/mind/sessions/mind-matters/anticipatory-grief.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "apps/premium-events/clubs/mind/fr/sessions/mind-matters/anticipatory-grief.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "broken-children-grown-bodies",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/mind/sessions/mind-matters/broken-children-grown-bodies.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "apps/premium-events/clubs/mind/fr/sessions/mind-matters/broken-children-grown-bodies.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "depersonalization",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/mind/sessions/mind-matters/depersonalization.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "apps/premium-events/clubs/mind/fr/sessions/mind-matters/depersonalization.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "fear-of-love-control",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/mind/sessions/mind-matters/fear-of-love-control.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "apps/premium-events/clubs/mind/fr/sessions/mind-matters/fear-of-love-control.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "finding-the-right-person",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/mind/sessions/mind-matters/finding-the-right-person.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "apps/premium-events/clubs/mind/fr/sessions/mind-matters/finding-the-right-person.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "gilberts-law",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/mind/sessions/mind-matters/gilberts-law.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "apps/premium-events/clubs/mind/fr/sessions/mind-matters/gilberts-law.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "impersonation",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/mind/sessions/mind-matters/impersonation.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "apps/premium-events/clubs/mind/fr/sessions/mind-matters/impersonation.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "kidlins-law",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/mind/sessions/mind-matters/kidlins-law.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "apps/premium-events/clubs/mind/fr/sessions/mind-matters/kidlins-law.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "law-of-attraction",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/mind/sessions/mind-matters/law-of-attraction.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "apps/premium-events/clubs/mind/fr/sessions/mind-matters/law-of-attraction.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "limerence",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/mind/sessions/mind-matters/limerence.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "apps/premium-events/clubs/mind/fr/sessions/mind-matters/limerence.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "murphys-law",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/mind/sessions/mind-matters/murphys-law.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "apps/premium-events/clubs/mind/fr/sessions/mind-matters/murphys-law.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "wilsons-law",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/mind/sessions/mind-matters/wilsons-law.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "apps/premium-events/clubs/mind/fr/sessions/mind-matters/wilsons-law.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "dostoevsky-loving-power-quote",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/dostoevsky-loving-power-quote.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "ru", path: "apps/premium-events/clubs/quotes/ru/sessions/the-greatest-quotes/dostoevsky-loving-power-quote.html", level: "B2", label: "🇷🇺 Русский", levelLabel: "Выше среднего (B2)" }
            ]
        },
        {
            id: "dostoevsky-politics-religion-quote",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/dostoevsky-politics-religion-quote.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "ru", path: "apps/premium-events/clubs/quotes/ru/sessions/the-greatest-quotes/dostoevsky-politics-religion-quote.html", level: "B2", label: "🇷🇺 Русский", levelLabel: "Выше среднего (B2)" }
            ]
        },
        {
            id: "neufeld-resistance-quote",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/neufeld-resistance-quote.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "ru", path: "apps/premium-events/clubs/quotes/ru/sessions/the-greatest-quotes/neufeld-resistance-quote.html", level: "B2", label: "🇷🇺 Русский", levelLabel: "Выше среднего (B2)" }
            ]
        },
        {
            id: "langle-suppressed-child-quote",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/langle-suppressed-child-quote.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "ru", path: "apps/premium-events/clubs/quotes/ru/sessions/the-greatest-quotes/langle-suppressed-child-quote.html", level: "B2", label: "🇷🇺 Русский", levelLabel: "Выше среднего (B2)" }
            ]
        },
        {
            id: "think-for-yourself-quote",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/think-for-yourself-quote.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "ru", path: "apps/premium-events/clubs/quotes/ru/sessions/the-greatest-quotes/think-for-yourself-quote.html", level: "B1", label: "🇷🇺 Русский", levelLabel: "Средний (B1)" }
            ]
        },
        {
            id: "wisdom-of-socrates",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/wisdom-of-socrates.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "fr", path: "apps/premium-events/clubs/quotes/fr/sessions/the-greatest-quotes/la-sagesse-de-socrate.html", level: "B2", label: "🇫🇷 Français", levelLabel: "Intermédiaire (B2)" }
            ]
        },
        {
            id: "expert-defend-language-mistakes",
            pages: [
                { lang: "en", path: "apps/premium-events/clubs/mind/sessions/mind-matters/expert-defend-language-mistakes.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" },
                { lang: "ru", path: "apps/premium-events/clubs/mind/ru/sessions/mind-matters/ne-ispravlyay-rech.html", level: "B1", label: "🇷🇺 Русский", levelLabel: "Средний (B1)" }
            ]
        },
        // 🎬 Cinema Club Level-Switching Groups (Split B1/B2)
        {
            id: "cinema-the-devil-wears-prada",
            pages: [
                { lang: "en", path: "events/sessions/cinema-club/the-devil-wears-prada-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "events/sessions/cinema-club/the-devil-wears-prada-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "cinema-beautiful-thing",
            pages: [
                { lang: "en", path: "events/sessions/cinema-club/beautiful-thing-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "events/sessions/cinema-club/beautiful-thing-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "cinema-the-pianist",
            pages: [
                { lang: "en", path: "events/sessions/cinema-club/the-pianist-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "events/sessions/cinema-club/the-pianist-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "cinema-the-first-wives-club",
            pages: [
                { lang: "en", path: "events/sessions/cinema-club/the-first-wives-club-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "events/sessions/cinema-club/the-first-wives-club-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "cinema-stepmom",
            pages: [
                { lang: "en", path: "events/sessions/cinema-club/stepmom-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "events/sessions/cinema-club/stepmom-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "cinema-roman-holiday",
            pages: [
                { lang: "en", path: "events/sessions/cinema-club/roman-holiday-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "events/sessions/cinema-club/roman-holiday-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "cinema-glee",
            pages: [
                { lang: "en", path: "events/sessions/cinema-club/glee-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "events/sessions/cinema-club/glee-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "cinema-hello-dolly",
            pages: [
                { lang: "en", path: "events/sessions/cinema-club/hello-dolly-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "events/sessions/cinema-club/hello-dolly-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "cinema-the-mummy",
            pages: [
                { lang: "en", path: "events/sessions/cinema-club/the-mummy-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "events/sessions/cinema-club/the-mummy-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "cinema-the-notebook",
            pages: [
                { lang: "en", path: "events/sessions/cinema-club/the-notebook-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "events/sessions/cinema-club/the-notebook-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "cinema-what-women-want",
            pages: [
                { lang: "en", path: "events/sessions/cinema-club/what-women-want-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "events/sessions/cinema-club/what-women-want-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "cinema-free-guy",
            pages: [
                { lang: "en", path: "events/sessions/cinema-club/free-guy-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "events/sessions/cinema-club/free-guy-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "cinema-julie-and-julia",
            pages: [
                { lang: "en", path: "events/sessions/cinema-club/julie-and-julia-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "events/sessions/cinema-club/julie-and-julia-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        },
        {
            id: "cinema-coda",
            pages: [
                { lang: "en", path: "events/sessions/cinema-club/coda-intermediate.html", level: "B1", label: "🇬🇧 English", levelLabel: "Intermediate (B1)" },
                { lang: "en", path: "events/sessions/cinema-club/coda-upper-intermediate.html", level: "B2", label: "🇬🇧 English", levelLabel: "Upper-Intermediate (B2)" }
            ]
        }
    ];

    const setupSessionSwitcher = () => {
        const currentPathname = window.location.pathname;
        const prefix = window.COSY && typeof window.COSY.getPrefix === 'function' ? window.COSY.getPrefix() : '/';

        let relativePath = currentPathname;
        if (relativePath.startsWith(prefix)) {
            relativePath = relativePath.slice(prefix.length);
        }

        // Normalize path separators to forward slashes
        relativePath = relativePath.replace(/\\/g, '/');
        if (relativePath.startsWith('/')) {
            relativePath = relativePath.slice(1);
        }

        // Find if current path is in one of our switcher groups
        const matchedGroup = SWITCHER_GROUPS.find(group =>
            group.pages.some(page => page.path === relativePath)
        );

        if (!matchedGroup) return; // No multi-level or multilingual session detected

        // Ensure <main class="content-container"> is present
        const mainContainer = document.querySelector('main.content-container');
        if (!mainContainer) return;

        const currentPage = matchedGroup.pages.find(page => page.path === relativePath);

        // Determine current document language
        let docLang = currentPage ? currentPage.lang : (document.documentElement.lang || 'en').toLowerCase().split('-')[0];
        if (!['en', 'fr', 'ru'].includes(docLang)) {
            docLang = 'en';
        }

        const loc = SWITCHER_LOCALES[docLang] || SWITCHER_LOCALES['en'];

        // Create switcher element
        const switcherEl = document.createElement('div');
        switcherEl.className = 'session-switcher';

        // Check if there are multiple languages
        const uniqueLangs = new Set(matchedGroup.pages.map(p => p.lang));
        const hasMultilingual = uniqueLangs.size > 1;

        // Check if there are multiple levels
        const uniqueLevels = new Set(matchedGroup.pages.map(p => p.level));
        const hasMultiLevel = uniqueLevels.size > 1;

        let htmlContent = '';

        // 1. Languages Row
        if (hasMultilingual) {
            htmlContent += `
                <div class="session-switcher-row">
                    <span class="session-switcher-label">${loc.languages}</span>
                    <div class="session-switcher-btn-group">
            `;

            // Get unique languages and map to their representing pages
            const langPages = [];
            const seenLangs = new Set();
            matchedGroup.pages.forEach(p => {
                if (!seenLangs.has(p.lang)) {
                    seenLangs.add(p.lang);
                    langPages.push(p);
                }
            });

            langPages.forEach(p => {
                const isActive = p.path === relativePath;
                const activeClass = isActive ? 'active' : '';
                const url = prefix + p.path;
                htmlContent += `
                    <a href="${isActive ? '#' : url}" class="session-switcher-btn ${activeClass}" aria-label="Switch language to ${p.label}">
                        ${p.label}
                    </a>
                `;
            });

            htmlContent += `
                    </div>
                </div>
            `;
        }

        // 2. Levels Row
        if (hasMultiLevel) {
            htmlContent += `
                <div class="session-switcher-row" style="${hasMultilingual ? 'margin-top: 0.5rem;' : ''}">
                    <span class="session-switcher-label">${loc.levels}</span>
                    <div class="session-switcher-btn-group">
            `;

            matchedGroup.pages.forEach(p => {
                const isActive = p.path === relativePath;
                const activeClass = isActive ? 'active' : '';
                const url = prefix + p.path;
                htmlContent += `
                    <a href="${isActive ? '#' : url}" class="session-switcher-btn ${activeClass}" aria-label="Switch level to ${p.levelLabel}">
                        ${p.levelLabel}
                    </a>
                `;
            });

            htmlContent += `
                    </div>
                </div>
            `;
        }

        switcherEl.innerHTML = htmlContent;

        // Inject styles to head
        const styleId = 'cosy-session-switcher-styles';
        if (!document.getElementById(styleId)) {
            const styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
                .session-switcher {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    background: var(--cream-dark);
                    border: 1px solid var(--border);
                    padding: 1rem 1.5rem;
                    border-radius: var(--r-md, 14px);
                    margin-top: 1rem;
                    margin-bottom: 2rem;
                    box-sizing: border-box;
                }
                .session-switcher-row {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                .session-switcher-label {
                    font-weight: 700;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--muted);
                    min-width: 140px;
                    margin: 0;
                }
                .session-switcher-btn-group {
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                }
                .session-switcher-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.4rem;
                    padding: 0.45rem 1rem;
                    min-height: 44px;
                    box-sizing: border-box;
                    background: var(--surface-color, #ffffff);
                    border: 1px solid var(--border);
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--ink-soft);
                    text-decoration: none !important;
                    cursor: pointer;
                    transition: all 0.2s ease-in-out;
                }
                .session-switcher-btn:hover {
                    background: var(--sage-pale);
                    border-color: var(--sage-soft);
                    color: var(--sage-dark);
                    transform: translateY(-1px);
                    box-shadow: var(--shadow-sm);
                }
                .session-switcher-btn.active {
                    background: var(--sage-dark);
                    border-color: var(--sage-dark);
                    color: white !important;
                    cursor: default;
                    pointer-events: none;
                    box-shadow: var(--shadow-sm);
                }
            `;
            document.head.appendChild(styleEl);
        }

        // Find best place to inject the switcher in main container
        const placeholder = mainContainer.querySelector('.cosy-session-switcher-placeholder');
        if (placeholder) {
            placeholder.appendChild(switcherEl);
        } else {
            const targetAnchor = mainContainer.querySelector('.back-link') || mainContainer.querySelector('.cosy-breadcrumbs') || mainContainer.firstElementChild;
            if (targetAnchor) {
                targetAnchor.parentNode.insertBefore(switcherEl, targetAnchor.nextSibling);
            } else {
                mainContainer.prepend(switcherEl);
            }
        }
    };

    /* ─── WONDER CLUB DRAFT MAPPING ─────────────────────────────── */
    const WONDER_DRAFT_MAPPING = {
        'whether-raindrops-select-where-to-fall.html': 1,
        'do-insects-hide-when-it-rains.html': 2,
        'is-bad-weather-gods-anger.html': 3,
        'always-watched-in-a-crowd.html': 4,
        'why-is-everyone-copying-me.html': 5,
        'feeling-empty-after-series.html': 6,
        'death-of-the-album.html': 7,
        'ugly-produce-anti-waste.html': 8,
        'does-euthanasia-reduce-suicide-rates.html': 9,
        'appreciating-amy-winehouse-after-death.html': 10,
        'why-do-we-try-to-relate-to-adhd.html': 11,
        'is-parenting-instinct-a-real-thing-or-scam.html': 12,
        'are-traditions-hidden-monogamy.html': 13,
        'collective-guilt-global-crisis.html': 14,
        'are-traditions-hidden-monogamy-upper-intermediate.html': 15,
        'i-have-no-time-for-it.html': 16,
        'why-do-i-spend-more-when-i-earn-more.html': 17,
        'does-inclusive-language-make-us-equal.html': 18,
        'we-are-people-we-are-not-stupid-animals.html': 23
    };

    /* ─── SCIENCE CLUB DRAFT MAPPING ────────────────────────────── */
    const KUS_DRAFT_MAPPING = {
        'ai-and-the-brain-intermediate.html': 1,
        'ai-and-the-brain-upper-intermediate.html': 2,
        'ai-reality-delusion.html': 3,
        'animal-cooperation-language-intermediate.html': 4,
        'animal-cooperation-language-upper-intermediate.html': 5,
        'ape-laughter-speech-origin-elementary.html': 6,
        'ape-laughter-speech-origin-intermediate.html': 7,
        'brain-improving-in-90s-intermediate.html': 8,
        'brain-improving-in-90s-upper-intermediate.html': 9,
        'childhood-obesity-theory-elementary.html': 10,
        'childhood-obesity-theory-intermediate.html': 11,
        'climate-scientist-warming-report-intermediate.html': 12,
        'climate-scientist-warming-report-upper-intermediate.html': 13,
        'football-beats-shamrock-intermediate.html': 14,
        'football-beats-shamrock-upper-intermediate.html': 15,
        'fusion-energy.html': 16,
        'grandmother-evolutionary-mystery.html': 17,
        'grandparents-mental-health.html': 18,
        'gut-brain-memory-intermediate.html': 19,
        'hidden-regenerative-powers-intermediate.html': 20,
        'hidden-regenerative-powers-upper-intermediate.html': 21,
        'impersonation-accounts.html': 22,
        'inside-the-backrooms-elementary.html': 23,
        'inside-the-backrooms-intermediate.html': 24,
        'living-most-creative-time.html': 25,
        'losing-spoken-words.html': 26,
        'mendelian-laws-broken.html': 27,
        'museums-movies-theater-stay-younger-elementary.html': 28,
        'museums-movies-theater-stay-younger-intermediate.html': 29,
        'museums-movies-theater-stay-younger-upper-intermediate.html': 30,
        'ozempic-obesity-revolution-intermediate.html': 31,
        'ozempic-obesity-revolution-upper-intermediate.html': 32,
        'recycling-distraction-test-intermediate.html': 33,
        'right-handedness.html': 34,
        'sensory-system-pain-disease-intermediate.html': 35,
        'sensory-system-pain-disease-upper-intermediate.html': 36,
        'social-decisions-brain.html': 37,
        'spider-creatures-origins-of-fatherhood-intermediate.html': 38,
        'spider-creatures-origins-of-fatherhood-upper-intermediate.html': 39,
        'tv-midlife-shrink-brain-intermediate.html': 40,
        'vliyanie-propagandy-deti.html': 41,
        'where-you-live-shapes-dementia-risk-elementary.html': 42,
        'where-you-live-shapes-dementia-risk-intermediate.html': 43,
        'where-you-live-shapes-dementia-risk-upper-intermediate.html': 44,
        'your-fingers-hold-secret-brain-evolution-intermediate.html': 45,
        'your-fingers-hold-secret-brain-evolution-upper-intermediate.html': 46
    };

    /* ─── WONDER CLUB & SCIENCE CLUB MODE ROUTER ────────────────── */
    const setupWonderModeRouter = () => {
        const currentPathname = window.location.pathname;
        const isWonderSession = currentPathname.includes('sessions/i-couldnt-help-but-wonder/');
        const isKusSession = currentPathname.includes('sessions/keeping-up-with-science/');

        if (!isWonderSession && !isKusSession) {
            document.body.classList.remove("wonder-locked-body-blur");
            document.body.removeAttribute("data-active-mode");
            const gate = document.getElementById("wonder-passcode-gate");
            if (gate) gate.remove();

            // Clean up any dynamic injected elements
            const switcher = document.getElementById("kus-dynamic-switcher");
            if (switcher) switcher.remove();
            const hostBar = document.getElementById("kus-dynamic-host-bar");
            if (hostBar) hostBar.remove();
            return;
        }

        const params = new URLSearchParams(window.location.search);
        const mode = params.get('mode') || 'big';

        document.body.setAttribute('data-active-mode', mode);

        // Dynamically inject Wonder modes switcher
        if (isWonderSession) {
            const mainContainer = document.querySelector('main.content-container');
            if (mainContainer) {
                const isFrench = currentPathname.includes('/fr/');
                const isRussian = currentPathname.includes('/ru/');

                // Find or create switcher placeholder element
                let switcherPlaceholder = mainContainer.querySelector('.cosy-session-switcher-placeholder');
                if (!switcherPlaceholder) {
                    switcherPlaceholder = document.createElement('div');
                    switcherPlaceholder.className = 'cosy-session-switcher-placeholder';
                    const targetAnchor = mainContainer.querySelector('.back-link') || mainContainer.querySelector('.cosy-breadcrumbs') || mainContainer.firstElementChild;
                    if (targetAnchor) {
                        targetAnchor.parentNode.insertBefore(switcherPlaceholder, targetAnchor.nextSibling);
                    } else {
                        mainContainer.prepend(switcherPlaceholder);
                    }
                }

                // If switcher doesn't exist yet, create it next to or inside the placeholder
                let modeSwitcher = switcherPlaceholder.querySelector('.wonder-format-switcher');
                if (!modeSwitcher) {
                    modeSwitcher = document.createElement('div');
                    modeSwitcher.className = "wonder-format-switcher";
                    modeSwitcher.style.cssText = "display: flex; gap: 0.5rem; margin-top: 1rem; margin-bottom: 2rem; flex-wrap: wrap;";
                    switcherPlaceholder.appendChild(modeSwitcher);
                }

                let bigLabel = isFrench ? "🗣️ GRAND GROUPE" : (isRussian ? "🗣️ БОЛЬШАЯ ГРУППА" : "🗣️ BIG GROUP");
                let miniLabel = isFrench ? "👥 MINI GROUPE" : (isRussian ? "👥 МИНИ ГРУППА" : "👥 MINI GROUP");
                let privateLabel = isFrench ? "🎓 COURS PARTICULIER" : (isRussian ? "🎓 ЧАСТНЫЙ УРОК" : "🎓 PRIVATE LESSON");

                modeSwitcher.innerHTML = `
                    <a href="?mode=big" class="mode-btn btn-big ${mode === 'big' ? 'active' : ''}">${bigLabel}</a>
                    <a href="?mode=mini" class="mode-btn btn-mini ${mode === 'mini' ? 'active' : ''}">${miniLabel}</a>
                    <a href="?mode=private" class="mode-btn btn-private ${mode === 'private' ? 'active' : ''}">${privateLabel}</a>
                `;
            }
        }

        // Dynamically inject KUS modes features & Reorder Page Layout
        if (isKusSession) {
            const mainContainer = document.querySelector('main.content-container');
            if (mainContainer) {
                const isFrench = currentPathname.includes('/fr/');
                const isRussian = currentPathname.includes('/ru/');

                // Ensure we only redesign the layout once
                if (!mainContainer.hasAttribute('data-redesigned')) {
                    mainContainer.setAttribute('data-redesigned', 'true');

                    const filename = currentPathname.split('/').pop();
                    const dbKey = filename.replace('.html', '').replace(/-(elementary|intermediate|upper-intermediate|upper)$/, '');
                    const specimenData = window.COSY_SCIENCE_DB ? window.COSY_SCIENCE_DB[dbKey] : null;

                    // Extract existing elements
                    const breadcrumbs = mainContainer.querySelector('.cosy-breadcrumbs');
                    const backLink = mainContainer.querySelector('.back-link');
                    const warning = mainContainer.querySelector('.sensitive-topic-warning');

                    const titleText = document.querySelector('h1')?.textContent.trim() || (specimenData ? specimenData.title : "Scientific Specimen");
                    const dateText = document.querySelector('.session-date')?.textContent.trim() || (specimenData ? specimenData.date : "");

                    // Parse meta-grid
                    let levelVal = isFrench ? "Intermédiaire (B1)" : (isRussian ? "Средний (B1)" : "Intermediate (B1)");
                    let themeVal = specimenData ? (isRussian ? specimenData.theme : specimenData.theme) : "";
                    let sourceHtml = "";
                    const metaGrid = mainContainer.querySelector('.session-meta-grid');
                    if (metaGrid) {
                        const items = metaGrid.querySelectorAll('.meta-item');
                        items.forEach(item => {
                            const h4 = item.querySelector('h4');
                            const h4Text = h4 ? h4.textContent.toLowerCase() : "";
                            const p = item.querySelector('p');
                            const pText = p ? p.textContent.trim() : "";
                            if (h4Text.includes('level') || h4Text.includes('niveau') || h4Text.includes('уровень')) {
                                levelVal = pText;
                            } else if (h4Text.includes('topic') || h4Text.includes('thématique') || h4Text.includes('тема')) {
                                themeVal = pText;
                            } else if (h4Text.includes('resources') || h4Text.includes('sources') || h4Text.includes('источник')) {
                                sourceHtml = p ? p.innerHTML : "";
                            }
                        });
                        metaGrid.remove();
                    }

                    // Parse journal box
                    let langFocus = isFrench ? "Structure d'apprentissage" : (isRussian ? "Языковой фокус" : "Linguistic structure analysis");
                    const journalBox = mainContainer.querySelector('.science-journal-box');
                    if (journalBox) {
                        const items = journalBox.querySelectorAll('.science-journal-item');
                        items.forEach(item => {
                            const h5Text = item.querySelector('h5')?.textContent.toLowerCase() || "";
                            const pText = item.querySelector('p')?.textContent.trim() || "";
                            if (h5Text.includes('linguistic') || h5Text.includes('focus') || h5Text.includes('грамматика')) {
                                langFocus = pText;
                            }
                        });
                        journalBox.remove();
                    }

                    // Get Batch Label
                    let batchLabel = isFrench ? "Spécimen Autonome" : (isRussian ? "Автономный образец" : "Standalone Specimen");
                    if (specimenData && specimenData.batches && specimenData.batches.length > 0) {
                        const bId = specimenData.batches[0];
                        batchLabel = bId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                        if (isFrench) {
                            if (bId.includes('neuroplasticity')) batchLabel = "Neuroplasticité & Santé Cognitive";
                            else if (bId.includes('evolutionary')) batchLabel = "Biologie Évolutive & Communication";
                            else if (bId.includes('biotechnology')) batchLabel = "Biotechnologie & Pharmacologie Moderne";
                            else if (bId.includes('climate')) batchLabel = "Climat, Environnement & Santé Publique";
                            else if (bId.includes('sensory')) batchLabel = "Systèmes Sensoriels & Communication Animale";
                        } else if (isRussian) {
                            if (bId.includes('neuroplasticity')) batchLabel = "Нейропластичность и здоровье мозга";
                            else if (bId.includes('evolutionary')) batchLabel = "Эволюционная биология и коммуникация";
                            else if (bId.includes('biotechnology')) batchLabel = "Биотехнологии и современная фармакология";
                            else if (bId.includes('climate')) batchLabel = "Климат, экология и общественное здоровье";
                            else if (bId.includes('sensory')) batchLabel = "Сенсорные системы и коммуникация животных";
                        }
                    }

                    // Parse summary paragraph
                    let summaryHtml = "";
                    const vocabSection = mainContainer.querySelector('#vocabulary');
                    if (vocabSection) {
                        let prev = vocabSection.previousElementSibling;
                        while (prev && prev !== metaGrid && prev !== journalBox && prev !== breadcrumbs && prev !== backLink) {
                            if (prev.tagName === 'DETAILS' || prev.id === 'description' || prev.classList.contains('transcript-details') || prev.tagName === 'DIV' || prev.tagName === 'P') {
                                if (prev.tagName === 'DETAILS' || prev.id === 'description' || prev.classList.contains('transcript-details')) {
                                    const innerDiv = prev.querySelector('div');
                                    summaryHtml = innerDiv ? innerDiv.innerHTML : prev.innerHTML;
                                    // Strip potential <summary> tag if we grabbed the entire details innerHTML
                                    summaryHtml = summaryHtml.replace(/<summary>.*?<\/summary>/si, '');
                                } else {
                                    summaryHtml = prev.innerHTML;
                                }
                                prev.remove();
                                break;
                            }
                            prev = prev.previousElementSibling;
                        }
                    }

                    const vocabulary = mainContainer.querySelector('#vocabulary');
                    const structure = mainContainer.querySelector('#structure');

                    // Empty container
                    mainContainer.innerHTML = '';

                    // 1. Breadcrumbs & Back Link
                    if (breadcrumbs) mainContainer.appendChild(breadcrumbs);
                    if (backLink) mainContainer.appendChild(backLink);

                    // 2. Sensitive / 18+ Warning
                    if (warning) {
                        mainContainer.appendChild(warning);
                    }

                    // 3. Same-Specimen Language/Level Switcher Placeholders
                    const switcherPlaceholder = document.createElement('div');
                    switcherPlaceholder.className = "cosy-session-switcher-placeholder";
                    mainContainer.appendChild(switcherPlaceholder);

                    // 4. Session Information Box (Sheet Card)
                    const infoBox = document.createElement('div');
                    infoBox.className = "science-session-info-box";
                    infoBox.innerHTML = `
                        <div class="info-box-header">🔬 ${isFrench ? 'FICHE COMPLÈTE DU SPÉCIMEN' : (isRussian ? 'КАРТА НАУЧНОГО ОБРАЗЦА' : 'SPECIMEN SCIENTIFIC DATA SHEET')}</div>
                        <div class="info-box-grid">
                            <div class="info-field"><h5>${isFrench ? 'Titre du Spécimen' : (isRussian ? 'Название образца' : 'Specimen Title')}</h5><p>${titleText}</p></div>
                            <div class="info-field"><h5>${isFrench ? 'Thématique' : (isRussian ? 'Научная тема' : 'Scientific Theme')}</h5><p>${themeVal}</p></div>
                            <div class="info-field"><h5>${isFrench ? 'Niveau CEFR' : (isRussian ? 'Уровень CEFR' : 'CEFR Level')}</h5><p>${levelVal}</p></div>
                            <div class="info-field"><h5>${isFrench ? 'Structure d\'Apprentissage' : (isRussian ? 'Языковой фокус' : 'Language Focus')}</h5><p>${langFocus}</p></div>
                            <div class="info-field"><h5>${isFrench ? 'Collection Thématique' : (isRussian ? 'Научная коллекция' : 'Thematic Batch')}</h5><p>${batchLabel}</p></div>
                            <div class="info-field"><h5>${isFrench ? 'Date d\'Analyse' : (isRussian ? 'Дата публикации' : 'Analysis Date')}</h5><p>${dateText}</p></div>
                        </div>
                    `;
                    mainContainer.appendChild(infoBox);

                    // 5. Three Format Buttons Placeholder
                    const formatSwitcherPlaceholder = document.createElement('div');
                    formatSwitcherPlaceholder.id = "kus-dynamic-switcher-placeholder";
                    mainContainer.appendChild(formatSwitcherPlaceholder);

                    // 6. Article / Source Card
                    if (sourceHtml) {
                        const sourceCard = document.createElement('div');
                        sourceCard.className = "science-source-card";
                        sourceCard.innerHTML = `
                            <div class="source-card-header">🧬 ${isFrench ? 'SOURCE SCIENTIFIQUE OFFICIELLE' : (isRussian ? 'ОФИЦИАЛЬНЫЙ НАУЧНЫЙ ИСТОЧНИК' : 'PRIMARY SCIENTIFIC SOURCE ARTIFACT')}</div>
                            <div class="source-card-body">
                                <p style="margin: 0 0 1rem 0; font-size: 0.95rem; color: var(--ink-soft); line-height: 1.5;">
                                    ${isFrench ? 'Cette session s\'appuie directement sur les travaux de recherche et publications officielles de l\'institution suivante :' : (isRussian ? 'Эта сессия основана на официальных научных публикациях и исследованиях следующего рецензируемого источника :' : 'This conversational session maps directly onto the empirical findings and peer-reviewed publications from the following institution:')}
                                </p>
                                <div class="source-links-wrapper">${sourceHtml}</div>
                            </div>
                        `;
                        mainContainer.appendChild(sourceCard);
                    }

                    // 7. Transcript / Stimulus Digest
                    if (summaryHtml) {
                        const digestSummary = document.createElement('div');
                        digestSummary.className = "science-digest-summary";

                        let summary_title = "🎙️ Audio Briefing Transcription / Science Digest";
                        if (isFrench) {
                            summary_title = "🎙️ Transcription du Briefing Audio / Résumé Scientifique";
                        } else if (isRussian) {
                            summary_title = "🎙️ Расшифровка аудиозаписи / Научный дайджест";
                        }

                        digestSummary.innerHTML = `
                            <div class="digest-header">📝 ${isFrench ? 'RÉSUMÉ DU COMPTE RENDU' : (isRussian ? 'КРАТКАЯ СВОДКА ИССЛЕДОВАНИЯ' : 'SCIENTIFIC COMPREHENSION ABSTRACT')}</div>
                            <div class="science-audio-player-placeholder" style="margin-bottom: 1rem;"></div>
                            <details class="transcript-details" id="description" style="margin-top: 1rem; background: var(--cream); border: 1px solid var(--border); border-radius: 12px; padding: 1rem; box-sizing: border-box;">
                                <summary style="font-weight: 700; cursor: pointer; color: var(--indigo); font-family: 'Playfair Display', serif; display: flex; align-items: center; justify-content: space-between; user-select: none;">
                                    <span>${summary_title}</span>
                                    <span class="round-toggle">▼</span>
                                </summary>
                                <div style="margin-top: 1rem; line-height: 1.7; color: var(--ink); font-size: 0.95rem;">
                                    ${summaryHtml}
                                </div>
                            </details>
                        `;
                        mainContainer.appendChild(digestSummary);
                    }

                    // 8. Vocabulary
                    if (vocabulary) mainContainer.appendChild(vocabulary);

                    // 9. Discussion Structure
                    if (structure) mainContainer.appendChild(structure);

                    // 10. Go Deeper Thematically Related Recommendations Grid
                    const goDeeperEl = document.createElement('section');
                    goDeeperEl.id = "go-deeper";
                    goDeeperEl.style.cssText = "margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border);";

                    let goDeeperTitle = isFrench ? "🔍 Pour aller plus loin — Sessions Thématiques Liées" : (isRussian ? "🔍 Исследуйте глубже — Связанные тематические сессии" : "🔍 Go Deeper — Thematically Related Sessions");

                    // Determine related sessions
                    const recs = [];
                    if (specimenData && specimenData.batches) {
                        const currentBatch = specimenData.batches[0];
                        // Find other specimens in the same batch
                        for (const [key, spec] of Object.entries(window.COSY_SCIENCE_DB)) {
                            if (key !== dbKey && spec.batches && spec.batches.includes(currentBatch)) {
                                recs.push({
                                    title: spec.title,
                                    theme: spec.theme,
                                    url: key + "-intermediate.html",
                                    type: isFrench ? "🔬 SPÉCIMEN SCIENTIFIQUE" : (isRussian ? "🔬 НАУЧНЫЙ ОБРАЗЕЦ" : "🔬 SCIENCE SPECIMEN")
                                });
                                if (recs.length >= 2) break;
                            }
                        }
                    }

                    // Specific direct cross-references (Phase 8)
                    if (dbKey.includes('impersonation')) {
                        recs.push({
                            title: "Always Watched in a Crowd",
                            theme: "Explore privacy, social monitoring, and digital identity theft from Carrie Bradshaw's introspective standpoint.",
                            url: "../i-couldnt-help-but-wonder/always-watched-in-a-crowd.html",
                            type: isFrench ? "🌌 MANUSCRIT DÉVOILÉ" : (isRussian ? "🌌 ГОВОРЯЩИЙ КЛУБ" : "🌌 SPEAKING CLUB SESSION")
                        });
                    } else if (dbKey.includes('words')) {
                        recs.push({
                            title: "Why Do We Try to Relate to ADHD?",
                            theme: "Discuss the impact of technology, screen saturation, and social media on modern attention spans, vocabulary variety, and identity.",
                            url: "../i-couldnt-help-but-wonder/why-do-we-try-to-relate-to-adhd.html",
                            type: isFrench ? "🌌 MANUSCRIT DÉVOILÉ" : (isRussian ? "🌌 ГОВОРЯЩИЙ КЛУБ" : "🌌 SPEAKING CLUB SESSION")
                        });
                    }

                    // Fallbacks or cross-club curations
                    if (recs.length < 3) {
                        const batchName = (specimenData && specimenData.batches && specimenData.batches[0]) || "";
                        if (batchName.includes('neuroplasticity')) {
                            recs.push({
                                title: "Eternal Sunshine of the Spotless Mind",
                                theme: "Deconstruct selective memory erasure, neurological manipulation, and visual storytelling.",
                                url: "../../sessions/cinema-club/eternal-sunshine-of-the-spotless-mind.html",
                                type: isFrench ? "🎬 SOIRÉE CINÉMA" : (isRussian ? "🎬 КИНОКЛУБ" : "🎬 CINEMA CLUB NIGHT")
                            });
                        } else if (batchName.includes('evolutionary') || dbKey.includes('laughter') || dbKey.includes('words')) {
                            recs.push({
                                title: "Arrival",
                                theme: "Analyze cognitive linguistic adaptation, sapir-whorf hypothesis, and alien homologies.",
                                url: "../../sessions/cinema-club/arrival.html",
                                type: isFrench ? "🎬 SOIRÉE CINÉMA" : (isRussian ? "🎬 КИНОКЛУБ" : "🎬 CINEMA CLUB NIGHT")
                            });
                        } else if (batchName.includes('climate') || batchName.includes('environmental') || dbKey.includes('recycling')) {
                            recs.push({
                                title: "Wall-E",
                                theme: "Discuss consumerism, carbon accumulation, automation ethics, and environmental survival.",
                                url: "../../sessions/cinema-club/wall-e.html",
                                type: isFrench ? "🎬 SOIRÉE CINÉMA" : (isRussian ? "🎬 КИНОКЛУБ" : "🎬 CINEMA CLUB NIGHT")
                            });
                        } else {
                            recs.push({
                                title: "Inception",
                                theme: "Explore dream architectures, sub-cortical memories, and cognitive projections.",
                                url: "../../sessions/cinema-club/inception.html",
                                type: isFrench ? "🎬 SOIRÉE CINÉMA" : (isRussian ? "🎬 КИНОКЛУБ" : "🎬 CINEMA CLUB NIGHT")
                            });
                        }
                    }

                    let recsHtml = '';
                    recs.forEach(rec => {
                        let exploreText = isFrench ? "Analyser le Spécimen →" : (isRussian ? "Исследовать →" : "Explore Session →");
                        recsHtml += `
                            <div class="science-card" style="border: 1px solid var(--border); padding: 1.5rem; border-radius: var(--r-md, 14px); background: #FAF7F2; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--shadow-sm); box-sizing: border-box; min-width: 250px;">
                                <div>
                                    <span class="club-tag" style="background: #e1f5ee; color: #0F6E56; border: 1px solid rgba(15, 110, 86, 0.2); font-size: 0.72rem; text-transform: uppercase; font-weight: 800; border-radius: 4px; padding: 3px 8px; display: inline-block; margin-bottom: 0.75rem; letter-spacing: 0.05em;">${rec.type}</span>
                                    <h4 style="margin: 0 0 0.5rem 0; font-size: 1.15rem; font-family: 'Playfair Display', serif; font-weight: 700; color: var(--ink); line-height: 1.3;">${rec.title}</h4>
                                    <p style="margin: 0; font-size: 0.85rem; color: var(--muted); line-height: 1.4;">${rec.theme}</p>
                                </div>
                                <a href="${rec.url}" class="science-view-btn" style="margin-top: 1.25rem; text-align: center; text-decoration: none !important; font-weight: 600; padding: 0.5rem; background: var(--surface-color, #ffffff); border: 1px solid var(--border); border-radius: 8px; color: var(--ink-soft); transition: all 0.2s;">${exploreText}</a>
                            </div>
                        `;
                    });

                    goDeeperEl.innerHTML = `
                        <h2 class="section-title" style="margin-bottom: 1.5rem;">${goDeeperTitle}</h2>
                        <div class="go-deeper-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
                            ${recsHtml}
                        </div>
                    `;

                    mainContainer.appendChild(goDeeperEl);

                    // Now reinit switcher setups
                    setupSessionSwitcher();
                }

                // Append Switchers to the new placeholder
                const switcherPl = mainContainer.querySelector('.cosy-session-switcher-placeholder');
                const switcherEl = mainContainer.querySelector('.session-switcher');
                if (switcherPl && switcherEl && switcherEl.parentNode !== switcherPl) {
                    switcherPl.appendChild(switcherEl);
                }

                // Place Format Switchers and Host Bars
                const placeholderPl = document.getElementById("kus-dynamic-switcher-placeholder");
                if (placeholderPl) {
                    // Remove old ones from document if any
                    const oldSwitcher = document.getElementById("kus-dynamic-switcher");
                    if (oldSwitcher) oldSwitcher.remove();
                    const oldHostBar = document.getElementById("kus-dynamic-host-bar");
                    if (oldHostBar) oldHostBar.remove();

                    // Create switcher El
                    const switcherEl = document.createElement('div');
                    switcherEl.id = "kus-dynamic-switcher";
                    switcherEl.className = "science-format-switcher";
                    switcherEl.style.cssText = "display: flex; gap: 0.5rem; margin-top: 1rem; margin-bottom: 2rem; flex-wrap: wrap;";

                    let bigLabel = isFrench ? "🗣️ GRAND GROUPE" : (isRussian ? "🗣️ БОЛЬШАЯ ГРУППА" : "🗣️ BIG GROUP (Public)");
                    let miniLabel = isFrench ? "👥 MINI GROUPE" : (isRussian ? "👥 МИНИ ГРУППА" : "👥 MINI GROUP (Protected)");
                    let privateLabel = isFrench ? "🎓 COURS PARTICULIER" : (isRussian ? "🎓 ЧАСТНЫЙ УРОК" : "🎓 PRIVATE LESSON (Protected)");

                    switcherEl.innerHTML = `
                        <a href="?mode=big" class="mode-btn btn-big ${mode === 'big' ? 'active' : ''}">${bigLabel}</a>
                        <a href="?mode=mini" class="mode-btn btn-mini ${mode === 'mini' ? 'active' : ''}">${miniLabel}</a>
                        <a href="?mode=private" class="mode-btn btn-private ${mode === 'private' ? 'active' : ''}">${privateLabel}</a>
                    `;

                    placeholderPl.appendChild(switcherEl);

                    // Create Host Utility Bar El
                    if (mode === 'mini' || mode === 'private') {
                        const hostBarEl = document.createElement('div');
                        hostBarEl.id = "kus-dynamic-host-bar";
                        hostBarEl.className = "host-utility-bar";
                        hostBarEl.style.cssText = "margin-bottom: 2rem;";

                        let tagText = isFrench ? "🔑 Utilitaire Enseignant" : (isRussian ? "🔑 Организатор" : "🔑 Host Utility");
                        let infoText = isFrench ? "Partagez cette session déverrouillée avec vos élèves :" : (isRussian ? "Поделитесь разблокированной ссылкой с учениками :" : "Share this unlocked session with your students:");
                        let btnText = isFrench ? "🔗 Copier le lien élève" : (isRussian ? "🔗 Скопировать ссылку для учеников" : "🔗 Copy Student Link");
                        let backText = isFrench ? "← Retour à Keeping Up with Science" : (isRussian ? "← Вернуться к Keeping Up with Science" : "← Back to Keeping Up with Science");
                        let backHref = isFrench ? "../../keeping-up-with-science.html" : (isRussian ? "../../keeping-up-with-science.html" : "../../keeping-up-with-science.html");

                        hostBarEl.innerHTML = `
                            <div class="hub-header">
                                <span class="hub-tag">${tagText}</span>
                                <span class="hub-info">${infoText}</span>
                            </div>
                            <div class="hub-actions">
                                <button class="btn-copy-link" onclick="window.COSY.copyStudentLink(this)">${btnText}</button>
                                <a href="${backHref}" class="unobtrusive-back-link">${backText}</a>
                            </div>
                        `;

                        placeholderPl.appendChild(hostBarEl);
                    }
                }

                // 3. Dynamic Mini Group Restructuring
                if (mode === 'mini') {
                    const structureContainer = document.getElementById('structure');
                    if (structureContainer && !structureContainer.hasAttribute('data-compiled-mini')) {
                        structureContainer.setAttribute('data-compiled-mini', 'true');

                        // Parse Vocab
                        const vocabCards = Array.from(document.querySelectorAll('#vocabulary .vocab-card'));
                        let vocabHtml = '<div class="vocab-grid-10" style="margin-top: 1rem;">';
                        vocabCards.forEach(card => {
                            // Extract only content, strip individual buttons to make it uncluttered for Mini Group
                            const clone = card.cloneNode(true);
                            const btn = clone.querySelector('button');
                            if (btn) btn.remove();
                            vocabHtml += `<div class="vocab-card" style="box-shadow: none; border: 1px dashed var(--border);">${clone.innerHTML}</div>`;
                        });
                        vocabHtml += '</div>';

                        // Parse Warm-up Questions
                        const warmUpLi = Array.from(document.querySelectorAll('#s-warm li, .warm-up li, #s-warm p, .warm-up p'));
                        let warmUpHtml = '<ul class="round-questions">';
                        if (warmUpLi.length > 0) {
                            warmUpLi.forEach(li => {
                                warmUpHtml += `<li>${li.innerHTML}</li>`;
                            });
                        } else {
                            warmUpHtml += `<li>${isFrench ? "Avez-vous déjà exploré ce sujet auparavant ?" : (isRussian ? "Исследовали ли вы эту тему ранее ?" : "Have you ever explored this topic before?")}</li>`;
                        }
                        warmUpHtml += '</ul>';

                        // Parse Round 1 Questions
                        const r1Items = Array.from(document.querySelectorAll('#s-r1 .round-item, .round-1 .round-item'));
                        const r1Parsed = r1Items.map(item => {
                            return {
                                main: item.querySelector('.round-item-main')?.innerHTML || item.innerHTML,
                                personal: item.querySelector('.round-item-personal')?.innerHTML || ""
                            };
                        });

                        // Parse Round 2 Questions
                        const r2Items = Array.from(document.querySelectorAll('#s-r2 .round-item, .round-2 .round-item'));
                        const r2Parsed = r2Items.map(item => {
                            return {
                                main: item.querySelector('.round-item-main')?.innerHTML || item.innerHTML,
                                personal: item.querySelector('.round-item-personal')?.innerHTML || ""
                            };
                        });

                        // Parse Scientific Thinking
                        const thinkingBody = document.querySelector('#s-thinking .round-body, .scientific-thinking .round-body');
                        const thinkingHtml = thinkingBody ? thinkingBody.innerHTML : "";

                        // Define localized titles
                        let u1Title = isFrench ? "Unit 1 — Entrer dans le sujet 🚀" : (isRussian ? "Раздел 1 — Введение в тему 🚀" : "Unit 1 — Enter the Topic 🚀");
                        let u1Desc = isFrench ? "Échauffement et activation du vocabulaire de la session." : (isRussian ? "Разминка и активация ключевого словаря сессии." : "Activate your background knowledge and study the 10 specimen vocabulary units.");

                        let u2Title = isFrench ? "Unit 2 — Comprendre les résultats 📊" : (isRussian ? "Раздел 2 — Понимание результатов 📊" : "Unit 2 — Understand the Findings 📊");
                        let u2Desc = isFrench ? "Discutez des découvertes scientifiques réelles rapportées dans l'article." : (isRussian ? "Обсудите реальные научные открытия, описанные в исследовании." : "Analyze the actual scientific discoveries and empirical findings reported in the paper.");
                        let u2QuestionsHtml = '<ul class="round-questions">';
                        r1Parsed.slice(0, 5).forEach(q => {
                            u2QuestionsHtml += `<li>${q.main} ${q.personal ? `<br><span style="font-style: italic; font-size: 0.9em; opacity: 0.85;">${q.personal}</span>` : ""}</li>`;
                        });
                        u2QuestionsHtml += '</ul>';

                        let u3Title = isFrench ? "Unit 3 — Explorer la science 🔬" : (isRussian ? "Раздел 3 — Научные гипотезы 🔬" : "Unit 3 — Explore the Science 🔬");
                        let u3Desc = isFrench ? "Analysez les explications possibles, les mécanismes et les théories concurrentes." : (isRussian ? "Исследуйте возможные объяснения, механизмы и альтернативные теории." : "Move from what happened to why it happened. Debate mechanisms, causes, and theories.");
                        let u3QuestionsHtml = '<ul class="round-questions">';
                        r1Parsed.slice(5, 10).forEach(q => {
                            u3QuestionsHtml += `<li>${q.main} ${q.personal ? `<br><span style="font-style: italic; font-size: 0.9em; opacity: 0.85;">${q.personal}</span>` : ""}</li>`;
                        });
                        u3QuestionsHtml += '</ul>';

                        let u4Title = isFrench ? "Unit 4 — Preuves & Évaluation 🔍" : (isRussian ? "Раздел 4 — Доказательства и оценка 🔍" : "Unit 4 — Evidence + Evaluation 🔍");
                        let u4Desc = isFrench ? "Réfléchissez à la fiabilité des preuves, aux limites de l'étude et à la corrélation vs causalité." : (isRussian ? "Оцените достоверность доказательств, ограничения исследования и причинно-следственные связи." : "Analyze research limitations, sample sizes, and distinguish correlation from causation.");
                        let u4QuestionsHtml = thinkingHtml ? `<div style="background: rgba(15, 110, 86, 0.04); padding: 1rem; border-radius: 8px; border-left: 4px solid #0F6E56; margin-bottom: 1.5rem;">${thinkingHtml}</div>` : '';
                        u4QuestionsHtml += '<ul class="round-questions">';
                        r2Parsed.slice(0, 4).forEach(q => {
                            u4QuestionsHtml += `<li>${q.main} ${q.personal ? `<br><span style="font-style: italic; font-size: 0.9em; opacity: 0.85;">${q.personal}</span>` : ""}</li>`;
                        });
                        u4QuestionsHtml += '</ul>';

                        let u5Title = isFrench ? "Unit 5 — Pourquoi cela compte-t-il ? 🌍" : (isRussian ? "Раздел 5 — Практическое значение 🌍" : "Unit 5 — Why Does It Matter? 🌍");
                        let u5Desc = isFrench ? "Explorez l'impact de cette découverte sur notre vie quotidienne, nos choix et notre société." : (isRussian ? "Обсудите влияние этого открытия на повседневную жизнь, личный выбор и общество." : "Discuss how this discovery impacts daily life, public policy, technology, and your personal choices.");
                        let u5QuestionsHtml = '<ul class="round-questions">';
                        // Collect interesting personal questions from Round 1 and Round 2
                        r1Parsed.slice(0, 3).forEach(q => {
                            if (q.personal) u5QuestionsHtml += `<li>${q.personal}</li>`;
                        });
                        r2Parsed.slice(0, 3).forEach(q => {
                            if (q.personal) u5QuestionsHtml += `<li>${q.personal}</li>`;
                        });
                        u5QuestionsHtml += '</ul>';

                        let u6Title = isFrench ? "Unit 6 — Perspectives futures 🔮" : (isRussian ? "Раздел 6 — Будущие перспективы 🔮" : "Unit 6 — Future Projections 🔮");
                        let u6Desc = isFrench ? "Projetez-vous dans l'avenir : développements technologiques, conséquences inattendues et scénarios 'Et si...'." : (isRussian ? "Загляните в будущее: новые исследования, потенциальные последствия и сценарии 'Что если...'." : "Speculate on future discoveries, consequences, and discuss bold 'What if...?' scenarios.");
                        let u6QuestionsHtml = '<ul class="round-questions">';
                        r2Parsed.slice(4, 10).forEach(q => {
                            u6QuestionsHtml += `<li>${q.main} ${q.personal ? `<br><span style="font-style: italic; font-size: 0.9em; opacity: 0.85;">${q.personal}</span>` : ""}</li>`;
                        });
                        u6QuestionsHtml += '</ul>';

                        // Rebuild structure with beautiful Mini Group layout!
                        structureContainer.innerHTML = `
                            <h2 class="section-title">👥 ${isFrench ? "Session de Mini Groupe" : (isRussian ? "Разговорная сессия Мини Группы" : "Mini Group Speaking Session")}</h2>
                            <div class="rounds-container">
                                <!-- Unit 1 -->
                                <div class="round-block warm-up open" id="m-unit1">
                                    <div class="round-header" onclick="window.COSY.toggleRound('m-unit1')" style="background:#FAEEE8;">
                                        <span>${u1Title}</span><span class="round-toggle">▲</span>
                                    </div>
                                    <div class="round-body" style="display:block; padding: 1.5rem;">
                                        <p style="margin: 0 0 1rem 0; font-size: 0.95rem; color: var(--ink-soft); font-weight: 600;">${u1Desc}</p>
                                        ${warmUpHtml}
                                        ${vocabHtml}
                                    </div>
                                </div>
                                <!-- Unit 2 -->
                                <div class="round-block round-1 open" id="m-unit2">
                                    <div class="round-header" onclick="window.COSY.toggleRound('m-unit2')" style="background:#E1F5EE;">
                                        <span>${u2Title}</span><span class="round-toggle">▲</span>
                                    </div>
                                    <div class="round-body" style="display:block; padding: 1.5rem;">
                                        <p style="margin: 0 0 1rem 0; font-size: 0.95rem; color: var(--ink-soft); font-weight: 600;">${u2Desc}</p>
                                        ${u2QuestionsHtml}
                                    </div>
                                </div>
                                <!-- Unit 3 -->
                                <div class="round-block round-2 open" id="m-unit3">
                                    <div class="round-header" onclick="window.COSY.toggleRound('m-unit3')" style="background:#EEEDFE;">
                                        <span>${u3Title}</span><span class="round-toggle">▲</span>
                                    </div>
                                    <div class="round-body" style="display:block; padding: 1.5rem;">
                                        <p style="margin: 0 0 1rem 0; font-size: 0.95rem; color: var(--ink-soft); font-weight: 600;">${u3Desc}</p>
                                        ${u3QuestionsHtml}
                                    </div>
                                </div>
                                <!-- Unit 4 -->
                                <div class="round-block open" id="m-unit4">
                                    <div class="round-header" onclick="window.COSY.toggleRound('m-unit4')" style="background:#FFF9E6; border-left: 5px solid #D97706;">
                                        <span>${u4Title}</span><span class="round-toggle">▲</span>
                                    </div>
                                    <div class="round-body" style="display:block; padding: 1.5rem;">
                                        <p style="margin: 0 0 1rem 0; font-size: 0.95rem; color: var(--ink-soft); font-weight: 600;">${u4Desc}</p>
                                        ${u4QuestionsHtml}
                                    </div>
                                </div>
                                <!-- Unit 5 -->
                                <div class="round-block open" id="m-unit5">
                                    <div class="round-header" onclick="window.COSY.toggleRound('m-unit5')" style="background:#EAF3DE;">
                                        <span>${u5Title}</span><span class="round-toggle">▲</span>
                                    </div>
                                    <div class="round-body" style="display:block; padding: 1.5rem;">
                                        <p style="margin: 0 0 1rem 0; font-size: 0.95rem; color: var(--ink-soft); font-weight: 600;">${u5Desc}</p>
                                        ${u5QuestionsHtml}
                                    </div>
                                </div>
                                <!-- Unit 6 -->
                                <div class="round-block open" id="m-unit6">
                                    <div class="round-header" onclick="window.COSY.toggleRound('m-unit6')" style="background:#FEE2E2; border-left: 5px solid #DC2626;">
                                        <span>${u6Title}</span><span class="round-toggle">▲</span>
                                    </div>
                                    <div class="round-body" style="display:block; padding: 1.5rem;">
                                        <p style="margin: 0 0 1rem 0; font-size: 0.95rem; color: var(--ink-soft); font-weight: 600;">${u6Desc}</p>
                                        ${u6QuestionsHtml}
                                    </div>
                                </div>
                            </div>
                        `;
                    }
                }

                // 4. Dynamic Private Lesson Restructuring (1-to-1 Teacher-Led)
                if (mode === 'private') {
                    const structureContainer = document.getElementById('structure');
                    if (structureContainer && !structureContainer.hasAttribute('data-compiled-private')) {
                        structureContainer.setAttribute('data-compiled-private', 'true');

                        // Parse Vocab
                        const vocabCards = Array.from(document.querySelectorAll('#vocabulary .vocab-card'));
                        let vocabHtml = '<div class="vocab-grid-10" style="margin-top: 1rem;">';
                        vocabCards.forEach(card => {
                            const clone = card.cloneNode(true);
                            const btn = clone.querySelector('button');
                            if (btn) btn.remove();
                            vocabHtml += `<div class="vocab-card" style="box-shadow: none; border: 1px dashed var(--border);">${clone.innerHTML}</div>`;
                        });
                        vocabHtml += '</div>';

                        // Parse Warm-up Questions
                        const warmUpLi = Array.from(document.querySelectorAll('#s-warm li, .warm-up li, #s-warm p, .warm-up p'));
                        let warmUpHtml = '<ul class="round-questions">';
                        if (warmUpLi.length > 0) {
                            warmUpLi.forEach(li => {
                                warmUpHtml += `<li>${li.innerHTML}</li>`;
                            });
                        } else {
                            warmUpHtml += `<li>${isFrench ? "Avez-vous déjà exploré ce sujet auparavant ?" : (isRussian ? "Исследовали ли вы эту тему ранее ?" : "Have you ever explored this topic before?")}</li>`;
                        }
                        warmUpHtml += '</ul>';

                        // Parse Round 1 Questions
                        const r1Items = Array.from(document.querySelectorAll('#s-r1 .round-item, .round-1 .round-item'));
                        const r1Parsed = r1Items.map(item => {
                            return {
                                main: item.querySelector('.round-item-main')?.innerHTML || item.innerHTML,
                                personal: item.querySelector('.round-item-personal')?.innerHTML || ""
                            };
                        });

                        // Parse Round 2 Questions
                        const r2Items = Array.from(document.querySelectorAll('#s-r2 .round-item, .round-2 .round-item'));
                        const r2Parsed = r2Items.map(item => {
                            return {
                                main: item.querySelector('.round-item-main')?.innerHTML || item.innerHTML,
                                personal: item.querySelector('.round-item-personal')?.innerHTML || ""
                            };
                        });

                        // Parse Scientific Thinking
                        const thinkingBody = document.querySelector('#s-thinking .round-body, .scientific-thinking .round-body');
                        const thinkingHtml = thinkingBody ? thinkingBody.innerHTML : "";

                        // Parse Grammar Block
                        const grammarBody = document.querySelector('#s-grammar .round-body, .grammar .round-body');
                        const grammarHtml = grammarBody ? grammarBody.innerHTML : "";

                        // Parse mistakes
                        const mistakesItems = Array.from(document.querySelectorAll('.mistake-item'));
                        let mistakesHtml = '<div style="margin-top: 1rem;">';
                        mistakesItems.forEach(item => {
                            mistakesHtml += `<div class="mistake-item" style="box-shadow: none; border: 1px dashed var(--border); padding: 1rem; margin-bottom: 0.5rem; border-radius: 8px;">${item.innerHTML}</div>`;
                        });
                        mistakesHtml += '</div>';

                        // Define localized titles
                        let stepsTitles = isFrench ? {
                            s1: "Étape 1 — Échauffement et introduction 🗣️",
                            s1Desc: "Connectez le sujet aux connaissances, suppositions ou expériences existantes de l'élève.",
                            s2: "Étape 2 — Pratique active du vocabulaire 📖",
                            s2Desc: "Analysez et appropriez-vous les 10 mots clés essentiels directement extraits de l'étude scientifique.",
                            s3: "Étape 3 — Contenu scientifique peer-reviewed 📊",
                            s3Desc: "Examinez l'abstrait d'étude scientifique ou les données sources.",
                            s4: "Étape 4 — Validation de la compréhension 🧠",
                            s4Desc: "Guidez l'élève à travers ce qui s'est passé, les découvertes et ce qui reste incertain.",
                            s5: "Étape 5 — Interprétation analytique et discussion 🔬",
                            s5Desc: "Débattez des mécanismes, des causes et des interprétations alternatives.",
                            s6: "Étape 6 — Point linguistique ciblé ⚡",
                            s6Desc: "Révisez le focus grammatical et structurel calibré pour ce niveau.",
                            s7: "Étape 7 — Esprit critique et évaluation des preuves 🔍",
                            s7Desc: "Évaluez la fiabilité, la taille de l'échantillon, et la corrélation vs causalité.",
                            s8: "Étape 8 — Application concrète dans le monde réel 🌍",
                            s8Desc: "Connectez la science à la vie quotidienne de l'élève et aux choix sociétaux.",
                            s9: "Étape 9 — Spéculations et projections futures 🔮",
                            s9Desc: "Scénarios hypothétiques et projections futures dans la science et la technologie.",
                            s10: "Étape 10 — Production finale autonome 🎤",
                            s10Desc: "Donnez une mini-présentation de 1 minute ou défendez une position sur le sujet."
                        } : (isRussian ? {
                            s1: "Шаг 1 — Разминка и введение в тему 🗣️",
                            s1Desc: "Свяжите тему с существующими знаниями, предположениями или личным опытом ученика.",
                            s2: "Шаг 2 — Активная отработка словаря 📖",
                            s2Desc: "Разберите 10 ключевых научных терминов, извлеченных из исследования.",
                            s3: "Шаг 3 — Рецензируемый научный источник 📊",
                            s3Desc: "Изучите краткое резюме научного отчета или данные первоисточника.",
                            s4: "Шаг 4 — Концептуальная проверка понимания 🧠",
                            s4Desc: "Разберите, что именно произошло, что обнаружили ученые и что остается неясным.",
                            s5: "Шаг 5 — Аналитическая интерпретация и дискуссия 🔬",
                            s5Desc: "Обсудите механизмы, причины и альтернативные научные трактовки.",
                            s6: "Шаг 6 — Специализированный языковой фокус ⚡",
                            s6Desc: "Разберите грамматические структуры и речевые обороты.",
                            s7: "Шаг 7 — Критическое мышление и оценка доказательств 🔍",
                            s7Desc: "Оцените достоверность доказательств, ограничения и корреляцию против причинности.",
                            s8: "Шаг 8 — Практическое применение в реальном мире 🌍",
                            s8Desc: "Свяжите науку с повседневной жизнью ученика и социальными решениями.",
                            s9: "Шаг 9 — Гипотезы и будущие предположения 🔮",
                            s9Desc: "Спрогнозируйте будущие исследования, технологическое развитие и последствия.",
                            s10: "Шаг 10 — Самостоятельная финальная презентация 🎤",
                            s10Desc: "Проведите минутную мини-презентацию или обоснуйте позицию по теме."
                        } : {
                            s1: "Step 1 — Lead-In / Warm-Up 🗣️",
                            s1Desc: "Connect the topic to the student's existing knowledge, assumptions, or experience.",
                            s2: "Step 2 — Active Vocabulary Drill 📖",
                            s2Desc: "Examine and personalize the 10 highly useful scientific vocabulary items parsed from the specimen.",
                            s3: "Step 3 — Peer-Reviewed Science Input 📊",
                            s3Desc: "Review the actual scientific paper's digest abstract and stimulus.",
                            s4: "Step 4 — Conceptual Understanding Check 🧠",
                            s4Desc: "Guide the learner through what happened, what researchers discovered, and what remains uncertain.",
                            s5: "Step 5 — Analytical Interpretation & Discussion 🔬",
                            s5Desc: "Move beyond comprehension. Debate mechanisms, explanations, and alternative interpretations.",
                            s6: "Step 6 — Targeted Language Focus ⚡",
                            s6Desc: "Practice the specialized grammar or lexical patterns calibrated for this lesson.",
                            s7: "Step 7 — Critical Thinking & Evidence Evaluation 🔍",
                            s7Desc: "Evaluate evidence reliability, study limitations, assumptions, and correlation vs causation.",
                            s8: "Step 8 — Real-World Application 🌍",
                            s8Desc: "Connect the scientific discovery to the student's personal choices and society.",
                            s9: "Step 9 — Future Speculations & Predictions 🔮",
                            s9Desc: "Contrast established scientific fact from speculation. Formulate bold predictions.",
                            s10: "Step 10 — Independent Final Production 🎤",
                            s10Desc: "Deliver a 1-minute mini-presentation explaining the findings to a non-specialist or defending a position."
                        });

                        // Generate Step HTMLs with embedded Teacher Guidance notes
                        let s4Html = '<ul class="round-questions">';
                        r1Parsed.slice(0, 4).forEach(q => {
                            s4Html += `<li>${q.main}</li>`;
                        });
                        s4Html += '</ul>';

                        let s5Html = '<ul class="round-questions">';
                        r1Parsed.slice(4, 7).forEach(q => {
                            s5Html += `<li>${q.main}</li>`;
                        });
                        s5Html += '</ul>';

                        let s8Html = '<ul class="round-questions">';
                        r1Parsed.slice(7, 10).forEach(q => {
                            if (q.personal) s8Html += `<li>${q.personal}</li>`;
                        });
                        r2Parsed.slice(0, 3).forEach(q => {
                            if (q.personal) s8Html += `<li>${q.personal}</li>`;
                        });
                        s8Html += '</ul>';

                        let s9Html = '<ul class="round-questions">';
                        r2Parsed.slice(3, 8).forEach(q => {
                            s9Html += `<li>${q.main}</li>`;
                        });
                        s9Html += '</ul>';

                        let s10Html = r2Parsed[9] ? `<p style="font-weight: 600; font-size: 1rem; color: var(--ink); margin-bottom: 1rem;">${r2Parsed[9].main}</p>` : '';
                        s10Html += mistakesHtml ? `<div style="background: rgba(15, 110, 86, 0.02); padding: 1.25rem; border-radius: var(--r-md, 14px); border: 1px dashed var(--border); margin-top: 1.5rem;"><h4 style="margin: 0 0 0.5rem 0; font-size: 0.9rem; text-transform: uppercase; color: var(--muted);">${isFrench ? "CORRECTIONS LINGUISTIQUES" : (isRussian ? "ЯЗЫКОВЫЕ КОРРЕКЦИИ" : "LINGUISTIC CORRECTIONS")}</h4>${mistakesHtml}</div>` : '';

                        // Teacher Guidance notes compiler
                        const renderTeacherNotes = (note) => {
                            let guideTitle = isFrench ? "💡 Note d'enseignement" : (isRussian ? "💡 Поддержка преподавателя" : "💡 Teacher Guidance");
                            return `<div class="teacher-manual-chip" style="background: #f0faf4; border-left: 4px solid #10b981; border-radius: 4px; padding: 0.75rem 1rem; margin-top: 1.25rem; font-size: 0.82rem; color: #065f46; font-family: 'Courier New', Courier, monospace; line-height: 1.5;"><strong>${guideTitle}:</strong> ${note}</div>`;
                        };

                        structureContainer.innerHTML = `
                            <h2 class="section-title">🎓 ${isFrench ? "Cours Particulier (1-to-1)" : (isRussian ? "Индивидуальное занятие (1-на-1)" : "Private Lesson Speaking Session")}</h2>
                            <div class="rounds-container">
                                <!-- Step 1 -->
                                <div class="round-block warm-up open" id="p-step1">
                                    <div class="round-header" onclick="window.COSY.toggleRound('p-step1')" style="background:#FAEEE8;">
                                        <span>${stepsTitles.s1}</span><span class="round-toggle">▲</span>
                                    </div>
                                    <div class="round-body" style="display:block; padding: 1.5rem;">
                                        <p style="margin: 0 0 1rem 0; font-size: 0.95rem; color: var(--ink-soft); font-weight: 600;">${stepsTitles.s1Desc}</p>
                                        ${warmUpHtml}
                                        ${renderTeacherNotes(isFrench ? "Encouragez l'élève à formuler ses propres hypothèses avant d'analyser l'étude." : (isRussian ? "Поощряйте ученика выдвигать собственные гипотезы до разбора самого исследования." : "Prompt the student to formulate their own hypotheses before opening the abstract."))}
                                    </div>
                                </div>
                                <!-- Step 2 -->
                                <div class="round-block open" id="p-step2">
                                    <div class="round-header" onclick="window.COSY.toggleRound('p-step2')" style="background:#FAF7F2;">
                                        <span>${stepsTitles.s2}</span><span class="round-toggle">▲</span>
                                    </div>
                                    <div class="round-body" style="display:block; padding: 1.5rem;">
                                        <p style="margin: 0 0 1rem 0; font-size: 0.95rem; color: var(--ink-soft); font-weight: 600;">${stepsTitles.s2Desc}</p>
                                        ${vocabHtml}
                                        ${renderTeacherNotes(isFrench ? "Demandez à l'élève de choisir 3 mots et de les réinvestir dans des phrases personnelles." : (isRussian ? "Попросите ученика выбрать 3 слова и использовать их в личных примерах." : "Ask the learner to pick 3 words and build immediate personalized context sentences."))}
                                    </div>
                                </div>
                                <!-- Step 3 -->
                                <div class="round-block open" id="p-step3">
                                    <div class="round-header" onclick="window.COSY.toggleRound('p-step3')" style="background:#EBF8FF; border-left: 5px solid #2B6CB0;">
                                        <span>${stepsTitles.s3}</span><span class="round-toggle">▲</span>
                                    </div>
                                    <div class="round-body" style="display:block; padding: 1.5rem;">
                                        <p style="margin: 0 0 1rem 0; font-size: 0.95rem; color: var(--ink-soft); font-weight: 600;">${stepsTitles.s3Desc}</p>
                                        <div style="background: white; border: 1px solid var(--border); padding: 1.25rem; border-radius: 8px; font-style: italic;">
                                            ${document.querySelector('.science-digest-summary div')?.innerHTML || (isFrench ? "Données et abstracts de l'étude" : (isRussian ? "Данные и резюме исследования" : "Study abstract and core data results."))}
                                        </div>
                                        ${renderTeacherNotes(isFrench ? "Vérifiez que l'élève identifie les termes techniques de l'abstract." : (isRussian ? "Убедитесь, что ученик правильно понимает терминологию резюме." : "Verify that the learner can explain key technical terms from the summary."))}
                                    </div>
                                </div>
                                <!-- Step 4 -->
                                <div class="round-block open" id="p-step4">
                                    <div class="round-header" onclick="window.COSY.toggleRound('p-step4')" style="background:#E1F5EE;">
                                        <span>${stepsTitles.s4}</span><span class="round-toggle">▲</span>
                                    </div>
                                    <div class="round-body" style="display:block; padding: 1.5rem;">
                                        <p style="margin: 0 0 1rem 0; font-size: 0.95rem; color: var(--ink-soft); font-weight: 600;">${stepsTitles.s4Desc}</p>
                                        ${s4Html}
                                        ${renderTeacherNotes(isFrench ? "Conseillez l'élève s'il confond corrélation et causalité." : (isRussian ? "Направляйте ученика при обсуждении разницы между корреляцией и причинностью." : "Gently correct the learner if they conflate correlation with direct causation."))}
                                    </div>
                                </div>
                                <!-- Step 5 -->
                                <div class="round-block open" id="p-step5">
                                    <div class="round-header" onclick="window.COSY.toggleRound('p-step5')" style="background:#EEEDFE;">
                                        <span>${stepsTitles.s5}</span><span class="round-toggle">▲</span>
                                    </div>
                                    <div class="round-body" style="display:block; padding: 1.5rem;">
                                        <p style="margin: 0 0 1rem 0; font-size: 0.95rem; color: var(--ink-soft); font-weight: 600;">${stepsTitles.s5Desc}</p>
                                        ${s5Html}
                                        ${renderTeacherNotes(isFrench ? "Encouragez l'élève à proposer une interprétation alternative solide." : (isRussian ? "Предложите ученику сформулировать альтернативную научную трактовку." : "Challenge the student to propose a logical competing interpretation."))}
                                    </div>
                                </div>
                                <!-- Step 6 -->
                                <div class="round-block open" id="p-step6">
                                    <div class="round-header" onclick="window.COSY.toggleRound('p-step6')" style="background:#EBF8FF; border-left: 5px solid #2B6CB0;">
                                        <span>${stepsTitles.s6}</span><span class="round-toggle">▲</span>
                                    </div>
                                    <div class="round-body" style="display:block; padding: 1.5rem;">
                                        <p style="margin: 0 0 1rem 0; font-size: 0.95rem; color: var(--ink-soft); font-weight: 600;">${stepsTitles.s6Desc}</p>
                                        ${grammarHtml ? `<div style="margin-top: 1rem;">${grammarHtml}</div>` : (isFrench ? "Pratique de l'argumentation scientifique ciblée." : (isRussian ? "Практика научной аргументации." : "Structured practice mapping specialized argumentative models."))}
                                        ${renderTeacherNotes(isFrench ? "Veillez à ce que l'élève intègre activement les connecteurs d'opposition." : (isRussian ? "Следите за активным употреблением сложных союзов и вводных слов." : "Ensure the student actively integrates the target connectors in their responses."))}
                                    </div>
                                </div>
                                <!-- Step 7 -->
                                <div class="round-block open" id="p-step7">
                                    <div class="round-header" onclick="window.COSY.toggleRound('p-step7')" style="background:#FFF9E6; border-left: 5px solid #D97706;">
                                        <span>${stepsTitles.s7}</span><span class="round-toggle">▲</span>
                                    </div>
                                    <div class="round-body" style="display:block; padding: 1.5rem;">
                                        <p style="margin: 0 0 1rem 0; font-size: 0.95rem; color: var(--ink-soft); font-weight: 600;">${stepsTitles.s7Desc}</p>
                                        ${thinkingHtml ? `<div style="background: white; border: 1px solid var(--border); padding: 1.25rem; border-radius: 8px;">${thinkingHtml}</div>` : (isFrench ? "Évaluez la fiabilité et la méthodologie de l'étude." : (isRussian ? "Оцените достоверность и методологию исследования." : "Critically review the sample size and assumptions of this specific trial."))}
                                        ${renderTeacherNotes(isFrench ? "Proposez de débattre des implications éthiques si l'élève est à l'aise." : (isRussian ? "При высоком уровне ученика перейдите к обсуждению этических аспект." : "With higher-level students, transition directly into discussing the ethical implications."))}
                                    </div>
                                </div>
                                <!-- Step 8 -->
                                <div class="round-block open" id="p-step8">
                                    <div class="round-header" onclick="window.COSY.toggleRound('p-step8')" style="background:#EAF3DE;">
                                        <span>${stepsTitles.s8}</span><span class="round-toggle">▲</span>
                                    </div>
                                    <div class="round-body" style="display:block; padding: 1.5rem;">
                                        <p style="margin: 0 0 1rem 0; font-size: 0.95rem; color: var(--ink-soft); font-weight: 600;">${stepsTitles.s8Desc}</p>
                                        ${s8Html}
                                        ${renderTeacherNotes(isFrench ? "Encouragez des choix de phrases concrètes liées à son travail ou ses études." : (isRussian ? "Связывайте обсуждение с реальными примерами из работы или учебы студента." : "Ensure the discussion maps onto concrete examples from the student's daily life."))}
                                    </div>
                                </div>
                                <!-- Step 9 -->
                                <div class="round-block open" id="p-step9">
                                    <div class="round-header" onclick="window.COSY.toggleRound('p-step9')" style="background:#FFF9E6; border-left: 5px solid #D97706;">
                                        <span>${stepsTitles.s9}</span><span class="round-toggle">▲</span>
                                    </div>
                                    <div class="round-body" style="display:block; padding: 1.5rem;">
                                        <p style="margin: 0 0 1rem 0; font-size: 0.95rem; color: var(--ink-soft); font-weight: 600;">${stepsTitles.s9Desc}</p>
                                        ${s9Html}
                                        ${renderTeacherNotes(isFrench ? "Rappelez d'utiliser le conditionnel pour marquer clairement l'hypothèse." : (isRussian ? "Напоминайте о необходимости использовать сослагательное наклонение." : "Prompt the user to utilize conditional structures to clearly distinguish hypothesis from fact."))}
                                    </div>
                                </div>
                                <!-- Step 10 -->
                                <div class="round-block open" id="p-step10">
                                    <div class="round-header" onclick="window.COSY.toggleRound('p-step10')" style="background:#FEE2E2; border-left: 5px solid #DC2626;">
                                        <span>${stepsTitles.s10}</span><span class="round-toggle">▲</span>
                                    </div>
                                    <div class="round-body" style="display:block; padding: 1.5rem;">
                                        <p style="margin: 0 0 1rem 0; font-size: 0.95rem; color: var(--ink-soft); font-weight: 600;">${stepsTitles.s10Desc}</p>
                                        ${s10Html}
                                        ${renderTeacherNotes(isFrench ? "Faites un retour linguistique complet à la fin en valorisant les réussites." : (isRussian ? "Проведите полный разбор ошибок в конце, отметив успехи студента." : "Perform a comprehensive linguistic error correction and feedback roundup at the end of the lesson."))}
                                    </div>
                                </div>
                            </div>
                        `;
                    }
                }
            }

            // Re-trigger science audio setup now that KUS mode routing and passcodes are initialized!
            setupScienceSessionAudio();
            setupEmbeddedArticles();
            setupAccessibilityAttributes();
        }

        window.COSY_WONDER_ROUTER = window.COSY_WONDER_ROUTER || {
            initModeRouting() {
                console.log(`[COSY Router] Active session mode initialized: ${mode}`);
            }
        };
        window.COSY_WONDER_ROUTER.initModeRouting();
    };

    /* ─── WONDER CLUB / SPEAKING CLUBS BACKGROUND MUSIC ──────────────────────────── */
    const setupWonderMusic = () => {
        const currentPathname = window.location.pathname;
        const isSpeakingClub = currentPathname.includes('speaking-clubs') ||
                               currentPathname.includes('i-couldnt-help-but-wonder') ||
                               currentPathname.includes('keeping-up-with-science') ||
                               currentPathname.includes('lets-celebrate') ||
                               currentPathname.includes('the-greatest-quotes') ||
                               currentPathname.includes('mind-matters') ||
                               currentPathname.includes('my-life-with-without') ||
                               currentPathname.includes('debatable-relatable') ||
                               currentPathname.includes('if-you-were') ||
                               currentPathname.includes('long-reads') ||
                               currentPathname.includes('apps/premium-events/clubs/');

        if (!isSpeakingClub) {
            // Clean up session storage states when user leaves speaking clubs
            if (window.cosyWonderAudio) {
                window.cosyWonderAudio.pause();
                window.cosyWonderAudio = null;
            }
            sessionStorage.removeItem('cosy_wonder_music_time');
            sessionStorage.removeItem('cosy_wonder_music_playing');
            sessionStorage.removeItem('cosy_bg_music_queue');
            sessionStorage.removeItem('cosy_bg_music_index');
            return;
        }

        const prefix = window.COSY && typeof window.COSY.getPrefix === 'function' ? window.COSY.getPrefix() : '/';
        const bgTracks = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        const shuffleArray = (arr) => {
            const shuffled = arr.slice();
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        };

        const getPlaylistState = () => {
            let queue;
            try {
                queue = JSON.parse(sessionStorage.getItem('cosy_bg_music_queue') || 'null');
            } catch(e) {}
            if (!Array.isArray(queue) || queue.length !== bgTracks.length) {
                queue = shuffleArray(bgTracks);
                sessionStorage.setItem('cosy_bg_music_queue', JSON.stringify(queue));
            }
            let index = parseInt(sessionStorage.getItem('cosy_bg_music_index') || '0', 10);
            if (isNaN(index) || index < 0 || index >= queue.length) {
                index = 0;
                sessionStorage.setItem('cosy_bg_music_index', '0');
            }
            return { queue, index };
        };

        const savePlaylistState = (queue, index) => {
            sessionStorage.setItem('cosy_bg_music_queue', JSON.stringify(queue));
            sessionStorage.setItem('cosy_bg_music_index', index.toString());
        };

        let { queue, index } = getPlaylistState();
        let currentTrackNum = queue[index] || 1;
        let musicUrl = prefix + "sounds/music/background" + currentTrackNum + ".mp3";

        let audio = window.cosyWonderAudio;
        if (!audio) {
            audio = new Audio(musicUrl);
            audio.loop = false; // Handled by ended event to move to next track in queue
            audio.volume = 0.15; // Low volume, not very loud
            window.cosyWonderAudio = audio;

            // Restore playback time if saved
            const savedTime = sessionStorage.getItem('cosy_wonder_music_time');
            if (savedTime) {
                audio.currentTime = parseFloat(savedTime);
            }

            // Handle song ending -> play next song in shuffle queue without repeating until all have played
            audio.addEventListener('ended', () => {
                let state = getPlaylistState();
                let nextIndex = state.index + 1;
                let nextQueue = state.queue;
                if (nextIndex >= nextQueue.length) {
                    nextQueue = shuffleArray(bgTracks);
                    nextIndex = 0;
                }
                savePlaylistState(nextQueue, nextIndex);
                const nextTrackNum = nextQueue[nextIndex];
                const nextUrl = prefix + "sounds/music/background" + nextTrackNum + ".mp3";
                audio.src = nextUrl;
                audio.currentTime = 0;
                sessionStorage.setItem('cosy_wonder_music_time', '0');
                const isMuted = sessionStorage.getItem('cosy_wonder_music_playing') === 'false';
                if (!isMuted) {
                    audio.play().catch(e => console.log("Next track play failed:", e));
                }
            });

            // Keep updating sessionStorage with current time
            const saveTime = () => {
                if (audio && !audio.paused) {
                    sessionStorage.setItem('cosy_wonder_music_time', audio.currentTime.toString());
                }
            };

            audio.addEventListener('timeupdate', saveTime);
            window.addEventListener('beforeunload', () => {
                saveTime();
                sessionStorage.setItem('cosy_wonder_music_playing', (!audio.paused).toString());
            });
        }

        // Autoplay play helper
        const playMusic = () => {
            if (!audio.paused) return; // Already playing
            audio.play()
                .then(() => {
                    sessionStorage.setItem('cosy_wonder_music_playing', 'true');
                })
                .catch(err => {
                    console.log("Autoplay blocked, waiting for user interaction.", err);
                    // Add interactive trigger listeners
                    const startOnInteraction = () => {
                        audio.play().then(() => {
                            sessionStorage.setItem('cosy_wonder_music_playing', 'true');
                            removeInteractionListeners();
                        }).catch(e => console.log(e));
                    };
                    const removeInteractionListeners = () => {
                        document.removeEventListener('click', startOnInteraction);
                        document.removeEventListener('keydown', startOnInteraction);
                        document.removeEventListener('touchstart', startOnInteraction);
                    };
                    document.addEventListener('click', startOnInteraction);
                    document.addEventListener('keydown', startOnInteraction);
                    document.addEventListener('touchstart', startOnInteraction);
                });
        };

        // Detect parent/hub page and inject toggle button
        const isParentPage = currentPathname.includes('speaking-clubs') ||
                             (isSpeakingClub && !currentPathname.includes('/sessions/'));
        if (isParentPage) {
            const heroHeader = document.querySelector('.club-hero') || document.querySelector('.hero-left') || document.querySelector('.hero');
            if (heroHeader && !document.getElementById('wonder-music-toggle-container')) {
                const isFrench = currentPathname.includes('/fr/');
                const isRussian = currentPathname.includes('/ru/');
                const activeState = sessionStorage.getItem('cosy_wonder_music_playing') !== 'false';

                const btnContainer = document.createElement('div');
                btnContainer.id = 'wonder-music-toggle-container';
                btnContainer.style.marginTop = '1.5rem';

                const enPlayLabel = '🎵 Play Background Music';
                const enPauseLabel = '🎵 Pause Background Music';
                const frPlayLabel = "🎵 Jouer la musique d'ambiance";
                const frPauseLabel = "🎵 Suspendre la musique d'ambiance";
                const ruPlayLabel = "🎵 Включить фоновое сопровождение";
                const ruPauseLabel = "🎵 Приостановить фоновое сопровождение";

                let playLabel = enPlayLabel;
                let pauseLabel = enPauseLabel;
                if (isFrench) {
                    playLabel = frPlayLabel;
                    pauseLabel = frPauseLabel;
                } else if (isRussian) {
                    playLabel = ruPlayLabel;
                    pauseLabel = ruPauseLabel;
                }

                const initialLabel = activeState ? pauseLabel : playLabel;

                btnContainer.innerHTML = `
                    <button id="wonder-music-toggle-btn" class="wonder-music-btn">${initialLabel}</button>
                `;

                heroHeader.appendChild(btnContainer);

                if (!document.getElementById('wonder-music-toggle-styles')) {
                    const styleEl = document.createElement('style');
                    styleEl.id = 'wonder-music-toggle-styles';
                    styleEl.textContent = `
                        .wonder-music-btn {
                            background: rgba(255, 255, 255, 0.15);
                            color: white;
                            border: 1px solid rgba(255, 255, 255, 0.3);
                            border-radius: 30px;
                            padding: 0.6rem 1.5rem;
                            font-size: 0.9rem;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.2s ease;
                            display: inline-flex;
                            align-items: center;
                            gap: 8px;
                        }
                        .wonder-music-btn:hover {
                            background: rgba(255, 255, 255, 0.25);
                            border-color: white;
                            transform: translateY(-1px);
                        }
                        .wonder-music-btn:active {
                            transform: translateY(1px);
                        }
                    `;
                    document.head.appendChild(styleEl);
                }

                const toggleBtn = document.getElementById('wonder-music-toggle-btn');
                toggleBtn.addEventListener('click', () => {
                    if (audio.paused) {
                        audio.play()
                            .then(() => {
                                sessionStorage.setItem('cosy_wonder_music_playing', 'true');
                                toggleBtn.textContent = pauseLabel;
                            })
                            .catch(e => console.log(e));
                    } else {
                        audio.pause();
                        sessionStorage.setItem('cosy_wonder_music_playing', 'false');
                        toggleBtn.textContent = playLabel;
                    }
                });
            }
        }

        // Always attempt to play on load/entry unless explicitly muted
        const isMuted = sessionStorage.getItem('cosy_wonder_music_playing') === 'false';

        if (!isMuted) {
            playMusic();
        } else {
            audio.pause();
        }

        // PJAX Interceptor for seamless in-club navigation
        if (!window.cosyWonderNavigationInterceptorSetup) {
            window.cosyWonderNavigationInterceptorSetup = true;

            const handleNavigate = (url, pushState = true) => {
                fetch(url)
                    .then(response => response.text())
                    .then(html => {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(html, 'text/html');

                        // Update title & lang
                        document.title = doc.title;
                        if (doc.documentElement && doc.documentElement.lang) {
                            document.documentElement.lang = doc.documentElement.lang;
                        }

                        // Convert existing relative stylesheet links in document.head to absolute URLs before pushState
                        document.head.querySelectorAll('link[rel="stylesheet"]').forEach(l => {
                            const rawHref = l.getAttribute('href');
                            if (rawHref && !rawHref.startsWith('http://') && !rawHref.startsWith('https://') && !rawHref.startsWith('//')) {
                                l.href = new URL(rawHref, window.location.href).href;
                            }
                        });

                        // Synchronize <head> elements
                        // 1. Remove previous PJAX dynamic styles/links
                        document.querySelectorAll('head [data-pjax-dynamic]').forEach(el => el.remove());

                        // 2. Remove old page inline <style> tags (preserving wonder music toggle styles if present)
                        Array.from(document.head.querySelectorAll('style')).forEach(styleEl => {
                            if (!styleEl.id || styleEl.id !== 'wonder-music-toggle-styles') {
                                styleEl.remove();
                            }
                        });

                        // 3. Process new head stylesheets and inline styles from doc.head
                        if (doc.head) {
                            // Copy inline style tags from new page
                            doc.head.querySelectorAll('style').forEach(newStyle => {
                                const styleCopy = document.createElement('style');
                                styleCopy.textContent = newStyle.textContent;
                                styleCopy.setAttribute('data-pjax-dynamic', 'true');
                                document.head.appendChild(styleCopy);
                            });

                            // Copy/Update stylesheet link tags with resolved absolute URLs
                            doc.head.querySelectorAll('link[rel="stylesheet"]').forEach(newLink => {
                                const rawHref = newLink.getAttribute('href');
                                if (!rawHref) return;
                                const absHref = new URL(rawHref, url).href;

                                const existingLinks = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                                const matchingLink = existingLinks.find(l => {
                                    const lHref = l.getAttribute('href');
                                    return lHref && new URL(lHref, window.location.href).href === absHref;
                                });

                                if (!matchingLink) {
                                    const linkCopy = document.createElement('link');
                                    linkCopy.rel = 'stylesheet';
                                    linkCopy.href = absHref;
                                    linkCopy.setAttribute('data-pjax-dynamic', 'true');
                                    document.head.appendChild(linkCopy);
                                }
                            });
                        }

                        // Swap body classes and inner HTML
                        document.body.className = doc.body.className;
                        document.body.innerHTML = doc.body.innerHTML;

                        // Temporarily stub addEventListener to run DOMContentLoaded/load callbacks immediately
                        const originalAddEventListener = document.addEventListener;
                        const originalWindowAddEventListener = window.addEventListener;

                        document.addEventListener = function(type, listener, options) {
                            if (type === 'DOMContentLoaded') {
                                try {
                                    listener();
                                } catch (e) {
                                    console.error('DOMContentLoaded callback failed:', e);
                                }
                            } else {
                                originalAddEventListener.call(document, type, listener, options);
                            }
                        };

                        window.addEventListener = function(type, listener, options) {
                            if (type === 'load') {
                                try {
                                    listener();
                                } catch (e) {
                                    console.error('load callback failed:', e);
                                }
                            } else {
                                originalWindowAddEventListener.call(window, type, listener, options);
                            }
                        };

                        // Execute script tags that might be in the swapped body
                        const scripts = document.body.querySelectorAll('script');
                        scripts.forEach(oldScript => {
                            if (oldScript.src) return; // Do not re-run external scripts
                            const newScript = document.createElement('script');
                            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                            oldScript.parentNode.replaceChild(newScript, oldScript);
                        });

                        // Restore original addEventListener
                        document.addEventListener = originalAddEventListener;
                        window.addEventListener = originalWindowAddEventListener;

                        if (pushState) {
                            history.pushState({ cosyWonderPjax: true }, '', url);
                        }

                        // Reinitialize all components
                        if (window.COSY && typeof window.COSY.initTheme === 'function') {
                            window.COSY.initTheme();
                        }
                        if (window.COSY && typeof window.COSY.renderNav === 'function') {
                            window.COSY.renderNav();
                        }
                        if (window.COSY && typeof window.COSY.reinit === 'function') {
                            window.COSY.reinit();
                        }
                        if (typeof setupWonderModeRouter === 'function') {
                            setupWonderModeRouter();
                        }
                        if (typeof setupEmbeddedArticles === 'function') {
                            setupEmbeddedArticles();
                        }
                        if (typeof setupWonderMusic === 'function') {
                            setupWonderMusic();
                        }
                        if (typeof updateNavActiveState === 'function') {
                            updateNavActiveState();
                        }
                        if (window.COSY_UI_I18N && typeof window.COSY_UI_I18N.refresh === 'function') {
                            window.COSY_UI_I18N.refresh();
                        }

                        // Scroll to top
                        window.scrollTo(0, 0);
                    })
                    .catch(err => {
                        console.error('Seamless transition failed, falling back to browser navigate:', err);
                        window.location.href = url;
                    });
            };

            document.addEventListener('click', (e) => {
                const link = e.target.closest('a');
                if (!link) return;

                const href = link.getAttribute('href');
                if (!href || href.startsWith('#') || href.startsWith('javascript:')) return;

                // Resolve absolute URL
                const absoluteUrl = new URL(href, window.location.href);

                // Only intercept if we are staying within the same origin and navigating to/from wonder-club
                if (absoluteUrl.origin !== window.location.origin) return;

                const checkSpeakingClub = (path) => {
                    return path.includes('speaking-clubs') ||
                           path.includes('i-couldnt-help-but-wonder') ||
                           path.includes('keeping-up-with-science') ||
                           path.includes('lets-celebrate') ||
                           path.includes('the-greatest-quotes') ||
                           path.includes('mind-matters') ||
                           path.includes('my-life-with-without') ||
                           path.includes('debatable-relatable') ||
                           path.includes('if-you-were') ||
                           path.includes('long-reads') ||
                           path.includes('apps/premium-events/clubs/');
                };

                const targetPath = absoluteUrl.pathname;
                const targetIsSpeaking = checkSpeakingClub(targetPath);
                const currentIsSpeaking = checkSpeakingClub(window.location.pathname);

                // If navigating within speaking clubs (from speaking club page to speaking club page)
                if (targetIsSpeaking && currentIsSpeaking) {
                    e.preventDefault();

                    // Pre-play target session's draft audio synchronously on user click to bypass autoplay restrictions (Wonder Club)
                    const isTargetWonderSession = targetPath.includes('sessions/i-couldnt-help-but-wonder/');
                    if (isTargetWonderSession && typeof WONDER_DRAFT_MAPPING !== 'undefined') {
                        const targetFilename = targetPath.split('/').pop().split('#')[0].split('?')[0];
                        const draftNum = WONDER_DRAFT_MAPPING[targetFilename];
                        if (draftNum) {
                            const targetParams = new URLSearchParams(absoluteUrl.search);
                            const targetMode = targetParams.get('mode') || 'big';
                            const targetDraftStr = String(draftNum).padStart(2, '0');
                            const targetAuthorized = (targetMode === 'big') || (sessionStorage.getItem('cosy_wonder_auth_draft_' + targetDraftStr + '_' + targetMode) === 'true');

                            if (targetAuthorized) {
                                // Lower background ambient music volume immediately
                                if (window.cosyWonderAudio) {
                                    window.cosyWonderAudio.volume = 0.03;
                                }
                                // Clean up any old draft audio
                                if (window.cosyWonderSessionAudio) {
                                    window.cosyWonderSessionAudio.pause();
                                }
                                const prefix = window.COSY && typeof window.COSY.getPrefix === 'function' ? window.COSY.getPrefix() : '/';
                                const audioUrl = prefix + "sounds/draft" + draftNum + ".mp3";
                                const audio = new Audio(audioUrl);
                                window.cosyWonderSessionAudio = audio;
                                audio.play().catch(err => console.log("Direct synchronous pre-play failed:", err));
                            }
                        }
                    }

                    handleNavigate(absoluteUrl.href, true);
                }
            });

            window.addEventListener('popstate', (e) => {
                const checkSpeakingClub = (path) => {
                    return path.includes('speaking-clubs') ||
                           path.includes('i-couldnt-help-but-wonder') ||
                           path.includes('keeping-up-with-science') ||
                           path.includes('lets-celebrate') ||
                           path.includes('the-greatest-quotes') ||
                           path.includes('mind-matters') ||
                           path.includes('my-life-with-without') ||
                           path.includes('debatable-relatable') ||
                           path.includes('if-you-were') ||
                           path.includes('long-reads') ||
                           path.includes('apps/premium-events/clubs/');
                };
                if (checkSpeakingClub(window.location.pathname)) {
                    handleNavigate(window.location.href, false);
                } else {
                    window.location.reload();
                }
            });
        }
    };

    /* ─── WONDER CLUB SESSION AUDIO PLAYER ───────────────────────── */
    const setupWonderSessionAudio = () => {
        const currentPathname = window.location.pathname;
        const isWonderSession = currentPathname.includes('sessions/i-couldnt-help-but-wonder/');

        // Clean up any existing session audio when navigating away from a wonder session page
        if (!isWonderSession) {
            if (window.cosyWonderSessionAudio) {
                window.cosyWonderSessionAudio.pause();
                window.cosyWonderSessionAudio = null;
            }
            return;
        }

        // Parse filename and look up draft number
        const filename = currentPathname.split('/').pop().split('#')[0].split('?')[0];
        const draftNum = WONDER_DRAFT_MAPPING[filename];
        if (!draftNum) return;

        const params = new URLSearchParams(window.location.search);
        const mode = params.get('mode') || 'big';

        const prefix = window.COSY && typeof window.COSY.getPrefix === 'function' ? window.COSY.getPrefix() : '/';
        const audioUrl = prefix + "sounds/draft" + draftNum + ".mp3";

        let audio = window.cosyWonderSessionAudio;
        let isReused = false;

        // Verify if we can reuse the existing pre-played audio
        if (audio && (audio.src === audioUrl || audio.src.endsWith("sounds/draft" + draftNum + ".mp3") || audio.src === new URL(audioUrl, window.location.href).href)) {
            isReused = true;
        } else {
            if (window.cosyWonderSessionAudio) {
                window.cosyWonderSessionAudio.pause();
                window.cosyWonderSessionAudio = null;
            }
            audio = new Audio(audioUrl);
            window.cosyWonderSessionAudio = audio;
        }

        // Determine language
        const isFrench = currentPathname.includes('/fr/');
        const playerTitle = isFrench
            ? `🎙️ Brouillon audio de la chronique de Carrie (Session ${draftNum})`
            : `🎙️ Carrie's Audio Column Draft (Session ${draftNum})`;
        const playText = isFrench ? `▶ Écouter le brouillon` : `▶ Play Column Draft`;
        const pauseText = isFrench ? `⏸ Suspendre le brouillon` : `⏸ Pause Draft`;

        // Create player elements
        const playerContainer = document.createElement('div');
        playerContainer.className = 'wonder-audio-player';
        playerContainer.innerHTML = `
            <div class="player-header">
                <span class="player-title-text">${playerTitle}</span>
                <span class="player-status-badge">draft_active.wav</span>
            </div>
            <div class="player-controls">
                <button class="player-btn" id="wonder-draft-play-btn">${playText}</button>
                <div class="player-progress-container" id="wonder-draft-progress-container">
                    <div class="player-progress-bar" id="wonder-draft-progress"></div>
                </div>
                <span class="player-time" id="wonder-draft-time">0:00 / 0:00</span>
            </div>
        `;

        // Inject the player container
        const playerPlaceholder = document.querySelector('.wonder-audio-player-placeholder');
        const metaGrid = document.querySelector('.session-meta-grid');
        const wonderColumnBox = document.querySelector('.wonder-column-box');
        const contentContainer = document.querySelector('.content-container');
        if (playerPlaceholder) {
            playerPlaceholder.appendChild(playerContainer);
        } else if (metaGrid) {
            metaGrid.parentNode.insertBefore(playerContainer, metaGrid.nextSibling);
        } else if (wonderColumnBox) {
            wonderColumnBox.parentNode.insertBefore(playerContainer, wonderColumnBox);
        } else if (contentContainer) {
            contentContainer.prepend(playerContainer);
        }

        // Move the localized transcript details element inside the player box so they are attached together
        const transcriptDetails = document.querySelector('.transcript-details');
        if (transcriptDetails) {
            playerContainer.appendChild(transcriptDetails);
        }

        // Add player styles if not already added to head
        if (!document.getElementById('wonder-audio-player-styles')) {
            const styleEl = document.createElement('style');
            styleEl.id = 'wonder-audio-player-styles';
            styleEl.textContent = `
                .wonder-audio-player {
                    background: var(--surface-color, #fffcf5);
                    border: 2px dashed var(--sage, #9d81d9);
                    border-radius: 16px;
                    padding: 1.5rem;
                    margin: 2rem 0;
                    font-family: 'Courier New', Courier, monospace;
                    color: var(--text-color, #4c3185);
                    box-shadow: var(--shadow-sm);
                    transition: all 0.3s ease;
                }
                .player-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                    border-bottom: 1px dashed var(--border, rgba(157, 129, 217, 0.3));
                    padding-bottom: 0.5rem;
                }
                .player-title-text {
                    font-weight: bold;
                    font-size: 1rem;
                }
                .player-status-badge {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    opacity: 0.7;
                    letter-spacing: 0.05em;
                }
                .player-controls {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .player-btn {
                    background: var(--sage, #9d81d9);
                    color: white;
                    border: none;
                    border-radius: 20px;
                    padding: 0.5rem 1.2rem;
                    font-family: 'Courier New', Courier, monospace;
                    font-size: 0.85rem;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.2s;
                    white-space: nowrap;
                    box-shadow: var(--shadow-sm);
                }
                .player-btn:hover {
                    opacity: 0.9;
                    transform: translateY(-1px);
                }
                .player-progress-container {
                    flex-grow: 1;
                    height: 8px;
                    background: rgba(157, 129, 217, 0.15);
                    border-radius: 4px;
                    position: relative;
                    cursor: pointer;
                    overflow: hidden;
                }
                .player-progress-bar {
                    height: 100%;
                    width: 0%;
                    background: var(--sage, #9d81d9);
                    border-radius: 4px;
                    transition: width 0.1s linear;
                }
                .player-time {
                    font-size: 0.85rem;
                    opacity: 0.8;
                    min-width: 85px;
                    text-align: right;
                }
                /* Dark Theme Adaptations */
                body.theme-wonder-amy .wonder-audio-player,
                body.theme-wonder-album .wonder-audio-player,
                body.theme-wonder-watched .wonder-audio-player {
                    background: #18141c;
                    border: 2px dashed var(--section-title-color, #e11d48);
                    color: #f1f0f3;
                }
                body.theme-wonder-amy .player-progress-container,
                body.theme-wonder-album .player-progress-container,
                body.theme-wonder-watched .player-progress-container {
                    background: rgba(255, 255, 255, 0.1);
                }
                body.theme-wonder-amy .player-progress-bar,
                body.theme-wonder-amy .player-btn {
                    background: #e11d48;
                }
                body.theme-wonder-album .player-progress-bar,
                body.theme-wonder-album .player-btn {
                    background: #8b5cf6;
                }
                body.theme-wonder-watched .player-progress-bar,
                body.theme-wonder-watched .player-btn {
                    background: #10b981;
                }
                .wonder-audio-player .transcript-details {
                    margin: 1.25rem 0 0 0;
                }
            `;
            document.head.appendChild(styleEl);
        }

        const playBtn = document.getElementById('wonder-draft-play-btn');
        const progressBar = document.getElementById('wonder-draft-progress');
        const progressContainer = document.getElementById('wonder-draft-progress-container');
        const timeDisplay = document.getElementById('wonder-draft-time');

        // Format duration helper
        const formatTime = (seconds) => {
            if (isNaN(seconds)) return "0:00";
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        };

        // Pause ambient background music when draft audio plays
        const pauseBackgroundMusic = () => {
            audio.volume = 1.0; // Draft is nice and loud
            if (window.cosyWonderAudio) {
                window.cosyWonderAudio.volume = 0.03; // Lower ambient music significantly
                // If the user hasn't explicitly muted the background music, make sure it is playing
                const isAmbientMuted = sessionStorage.getItem('cosy_wonder_music_playing') === 'false';
                if (!isAmbientMuted && window.cosyWonderAudio.paused) {
                    window.cosyWonderAudio.play().catch(e => console.log("Ambient music play failed:", e));
                }
            }
        };

        // Resume ambient background music if it was playing before
        const resumeBackgroundMusic = () => {
            if (window.cosyWonderAudio) {
                window.cosyWonderAudio.volume = 0.15; // Restore normal ambient volume
            }
        };

        // Playback controls
        const togglePlay = () => {
            if (audio.paused) {
                pauseBackgroundMusic();
                audio.play()
                    .then(() => {
                        playBtn.textContent = pauseText;
                    })
                    .catch(err => {
                        console.log("Audio play blocked, waiting for interaction", err);
                    });
            } else {
                audio.pause();
                playBtn.textContent = playText;
                resumeBackgroundMusic();
            }
        };

        if (playBtn) playBtn.addEventListener('click', togglePlay);

        // Update progress and time
        const updateProgressBar = () => {
            const percent = (audio.currentTime / (audio.duration || 1)) * 100;
            if (progressBar && !isNaN(percent)) progressBar.style.width = `${percent}%`;
            if (timeDisplay) {
                const currentStr = formatTime(audio.currentTime);
                const durationStr = formatTime(audio.duration);
                timeDisplay.textContent = `${currentStr} / ${durationStr}`;
            }
        };

        audio.addEventListener('timeupdate', updateProgressBar);

        // Loaded metadata to set initial duration
        audio.addEventListener('loadedmetadata', () => {
            if (timeDisplay) timeDisplay.textContent = `0:00 / ${formatTime(audio.duration)}`;
        });

        // Handle ended state
        audio.addEventListener('ended', () => {
            if (playBtn) playBtn.textContent = playText;
            if (progressBar) progressBar.style.width = '0%';
            resumeBackgroundMusic();
        });

        // Scrubbing/seeking support
        if (progressContainer) {
            progressContainer.addEventListener('click', (e) => {
                const rect = progressContainer.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const width = rect.width;
                const clickPercent = clickX / width;
                if (!isNaN(audio.duration)) {
                    audio.currentTime = clickPercent * audio.duration;
                }
            });
        }

        // Initialize UI values
        updateProgressBar();

        // Automatic autoplay attempt
        const tryAutoplay = () => {
            pauseBackgroundMusic();
            if (isReused && !audio.paused) {
                if (playBtn) playBtn.textContent = pauseText;
                return;
            }
            audio.play()
                .then(() => {
                    if (playBtn) playBtn.textContent = pauseText;
                })
                .catch(() => {
                    // Autoplay blocked by browser. Add one-time user interaction listeners to play
                    const playOnInteraction = () => {
                        pauseBackgroundMusic();
                        audio.play()
                            .then(() => {
                                if (playBtn) playBtn.textContent = pauseText;
                                removeListeners();
                            })
                            .catch(e => console.log(e));
                    };
                    const removeListeners = () => {
                        document.removeEventListener('click', playOnInteraction);
                        document.removeEventListener('keydown', playOnInteraction);
                        document.removeEventListener('touchstart', playOnInteraction);
                    };
                    document.addEventListener('click', playOnInteraction);
                    document.addEventListener('keydown', playOnInteraction);
                    document.addEventListener('touchstart', playOnInteraction);
                });
        };

        // Attempt autoplay
        tryAutoplay();
    };

    /* ─── SCIENCE CLUB SESSION AUDIO PLAYER ───────────────────────── */
    const setupScienceSessionAudio = () => {
        const currentPathname = window.location.pathname;
        const isKusSession = currentPathname.includes('sessions/keeping-up-with-science/');

        // Clean up any existing session audio when navigating away from a science session page
        if (!isKusSession) {
            if (window.cosyScienceSessionAudio) {
                window.cosyScienceSessionAudio.pause();
                window.cosyScienceSessionAudio = null;
            }
            return;
        }

        // Parse filename and look up draft number
        const filename = currentPathname.split('/').pop().split('#')[0].split('?')[0];
        const draftNum = KUS_DRAFT_MAPPING[filename];
        if (!draftNum) return;

        const params = new URLSearchParams(window.location.search);
        const mode = params.get('mode') || 'big';

        const prefix = window.COSY && typeof window.COSY.getPrefix === 'function' ? window.COSY.getPrefix() : '/';
        const audioUrl = prefix + "sounds/keeping-up-with-science/draft" + draftNum + "/draft" + draftNum + ".mp3";

        let audio = window.cosyScienceSessionAudio;
        let isReused = false;

        // Verify if we can reuse the existing pre-played audio
        if (audio && (audio.src === audioUrl || audio.src.endsWith("sounds/keeping-up-with-science/draft" + draftNum + "/draft" + draftNum + ".mp3") || audio.src === new URL(audioUrl, window.location.href).href)) {
            isReused = true;
        } else {
            if (window.cosyScienceSessionAudio) {
                window.cosyScienceSessionAudio.pause();
                window.cosyScienceSessionAudio = null;
            }
            audio = new Audio(audioUrl);
            window.cosyScienceSessionAudio = audio;
        }

        // Determine language
        const isFrench = currentPathname.includes('/fr/');
        const isRussian = currentPathname.includes('/ru/');

        const playerTitle = isFrench
            ? `🎙️ Briefing Audio Scientifique (Session ${draftNum})`
            : (isRussian ? `🎙️ Научный аудио-брифинг (Сессия ${draftNum})` : `🎙️ Science Audio Briefing (Session ${draftNum})`);

        const playText = isFrench
            ? `▶ Écouter le briefing`
            : (isRussian ? `▶ Слушать брифинг` : `▶ Play Audio Briefing`);

        const pauseText = isFrench
            ? `⏸ Suspendre le briefing`
            : (isRussian ? `⏸ Пауза брифинга` : `⏸ Pause Briefing`);

        // Create player elements
        const playerContainer = document.createElement('div');
        playerContainer.className = 'science-audio-player';
        playerContainer.innerHTML = `
            <div class="player-header">
                <span class="player-title-text">${playerTitle}</span>
                <span class="player-status-badge">briefing_active.wav</span>
            </div>
            <div class="player-controls">
                <button class="player-btn" id="science-draft-play-btn">${playText}</button>
                <div class="player-progress-container" id="science-draft-progress-container">
                    <div class="player-progress-bar" id="science-draft-progress"></div>
                </div>
                <span class="player-time" id="science-draft-time">0:00 / 0:00</span>
            </div>
        `;

        // Inject the player container inside placeholder
        const playerPlaceholder = document.querySelector('.science-audio-player-placeholder');
        const contentContainer = document.querySelector('.content-container');
        if (playerPlaceholder) {
            playerPlaceholder.appendChild(playerContainer);
        } else if (contentContainer) {
            // Fallback placement inside content container
            const digest = document.querySelector('.science-digest-summary');
            if (digest) {
                digest.parentNode.insertBefore(playerContainer, digest);
            } else {
                contentContainer.prepend(playerContainer);
            }
        }

        // Move the localized transcript details element inside the player box so they are attached together
        const transcriptDetails = document.querySelector('.transcript-details');
        if (transcriptDetails) {
            playerContainer.appendChild(transcriptDetails);
        }

        // Add player styles if not already added to head
        if (!document.getElementById('science-audio-player-styles')) {
            const styleEl = document.createElement('style');
            styleEl.id = 'science-audio-player-styles';
            styleEl.textContent = `
                .science-audio-player {
                    background: var(--cream-dark, #FAF7F2);
                    border: 2px dashed #0F6E56;
                    border-radius: 16px;
                    padding: 1.5rem;
                    margin: 2rem 0;
                    font-family: 'Courier New', Courier, monospace;
                    color: var(--ink, #07372b);
                    box-shadow: var(--shadow-sm);
                    transition: all 0.3s ease;
                }
                .science-audio-player .player-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                    border-bottom: 1px dashed rgba(15, 110, 86, 0.3);
                    padding-bottom: 0.5rem;
                }
                .science-audio-player .player-title-text {
                    font-weight: bold;
                    font-size: 1rem;
                    color: #0F6E56;
                }
                .science-audio-player .player-status-badge {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    opacity: 0.7;
                    letter-spacing: 0.05em;
                    color: var(--ink, #07372b);
                }
                .science-audio-player .player-controls {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .science-audio-player .player-btn {
                    background: #0F6E56;
                    color: white;
                    border: none;
                    border-radius: 20px;
                    padding: 0.5rem 1.2rem;
                    font-family: 'Courier New', Courier, monospace;
                    font-size: 0.85rem;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.2s;
                    white-space: nowrap;
                    box-shadow: var(--shadow-sm);
                }
                .science-audio-player .player-btn:hover {
                    background: #0d5c46;
                    transform: translateY(-1px);
                }
                .science-audio-player .player-progress-container {
                    flex-grow: 1;
                    height: 8px;
                    background: rgba(15, 110, 86, 0.15);
                    border-radius: 4px;
                    position: relative;
                    cursor: pointer;
                    overflow: hidden;
                }
                .science-audio-player .player-progress-bar {
                    height: 100%;
                    width: 0%;
                    background: #0F6E56;
                    border-radius: 4px;
                    transition: width 0.1s linear;
                }
                .science-audio-player .player-time {
                    font-size: 0.85rem;
                    opacity: 0.8;
                    min-width: 85px;
                    text-align: right;
                    color: var(--ink, #07372b);
                }
                .science-audio-player .transcript-details {
                    margin: 1.25rem 0 0 0;
                    background: var(--surface-color, #ffffff) !important;
                    border: 1px solid var(--border) !important;
                    color: var(--ink, #07372b) !important;
                }
                .science-audio-player .transcript-details div,
                .science-audio-player .transcript-details p,
                .science-audio-player .transcript-details span {
                    color: var(--ink, #07372b) !important;
                }
            `;
            document.head.appendChild(styleEl);
        }

        const playBtn = document.getElementById('science-draft-play-btn');
        const progressBar = document.getElementById('science-draft-progress');
        const progressContainer = document.getElementById('science-draft-progress-container');
        const timeDisplay = document.getElementById('science-draft-time');

        // Format duration helper
        const formatTime = (seconds) => {
            if (isNaN(seconds)) return "0:00";
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        };

        // Playback controls
        const togglePlay = () => {
            if (audio.paused) {
                audio.play()
                    .then(() => {
                        playBtn.textContent = pauseText;
                    })
                    .catch(err => {
                        console.log("Audio play blocked, waiting for interaction", err);
                    });
            } else {
                audio.pause();
                playBtn.textContent = playText;
            }
        };

        if (playBtn) playBtn.addEventListener('click', togglePlay);

        // Update progress and time
        const updateProgressBar = () => {
            const percent = (audio.currentTime / (audio.duration || 1)) * 100;
            if (progressBar && !isNaN(percent)) progressBar.style.width = `${percent}%`;
            if (timeDisplay) {
                const currentStr = formatTime(audio.currentTime);
                const durationStr = formatTime(audio.duration);
                timeDisplay.textContent = `${currentStr} / ${durationStr}`;
            }
        };

        audio.addEventListener('timeupdate', updateProgressBar);

        // Loaded metadata to set initial duration
        audio.addEventListener('loadedmetadata', () => {
            if (timeDisplay) timeDisplay.textContent = `0:00 / ${formatTime(audio.duration)}`;
        });

        // Handle ended state
        audio.addEventListener('ended', () => {
            if (playBtn) playBtn.textContent = playText;
            if (progressBar) progressBar.style.width = '0%';
        });

        // Scrubbing/seeking support
        if (progressContainer) {
            progressContainer.addEventListener('click', (e) => {
                const rect = progressContainer.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const width = rect.width;
                const clickPercent = clickX / width;
                if (!isNaN(audio.duration)) {
                    audio.currentTime = clickPercent * audio.duration;
                }
            });
        }

        // Initialize UI values
        updateProgressBar();

        // Automatic autoplay attempt
        const tryAutoplay = () => {
            if (isReused && !audio.paused) {
                if (playBtn) playBtn.textContent = pauseText;
                return;
            }
            audio.play()
                .then(() => {
                    if (playBtn) playBtn.textContent = pauseText;
                })
                .catch(() => {
                    // Autoplay blocked by browser. Add one-time user interaction listeners to play
                    const playOnInteraction = () => {
                        audio.play()
                            .then(() => {
                                if (playBtn) playBtn.textContent = pauseText;
                                removeListeners();
                            })
                            .catch(e => console.log(e));
                    };
                    const removeListeners = () => {
                        document.removeEventListener('click', playOnInteraction);
                        document.removeEventListener('keydown', playOnInteraction);
                        document.removeEventListener('touchstart', playOnInteraction);
                    };
                    document.addEventListener('click', playOnInteraction);
                    document.addEventListener('keydown', playOnInteraction);
                    document.addEventListener('touchstart', playOnInteraction);
                });
        };

        // Attempt autoplay
        tryAutoplay();
    };

    const autoCollapseFoldableSections = () => {
        const foldables = document.querySelectorAll('.round-block, .mistake-block');
        foldables.forEach(el => {
            const id = el.id;
            if (!id) return;
            // Keep vocabulary open
            if (id === 'vocabulary' || id.startsWith('vocabulary-')) {
                return;
            }
            // Keep description open
            if (id === 'description' || id.startsWith('description-')) {
                return;
            }

            // Remove open class
            el.classList.remove('open');

            // Handle body element visibility
            const body = el.querySelector('.round-body, .vocab-body, .history-body, .history-session-body, .mistake-body');
            if (body) {
                body.style.display = 'none';
            }

            // Handle arrow toggle text
            const toggle = el.querySelector('.round-toggle');
            if (toggle) {
                toggle.textContent = '▼';
            }
        });
    };

    /* ─── ACCESSIBILITY ENHANCEMENTS (WCAG 2.1.1) ───────────────── */
    const setupAccessibilityAttributes = () => {
        // Collapsible round headers
        document.querySelectorAll('.round-block, .mistake-block').forEach(block => {
            const header = block.querySelector('.round-header, .vocab-header, .mistake-header');
            if (header) {
                if (!header.hasAttribute('role')) header.setAttribute('role', 'button');
                if (!header.hasAttribute('tabindex')) header.setAttribute('tabindex', '0');
                header.setAttribute('aria-expanded', block.classList.contains('open') ? 'true' : 'false');
            }
        });

        // Round toggles (question-block expanders)
        document.querySelectorAll('.round-toggle').forEach(toggle => {
            if (!toggle.hasAttribute('role')) toggle.setAttribute('role', 'button');
            if (!toggle.hasAttribute('tabindex')) toggle.setAttribute('tabindex', '0');
            if (!toggle.dataset.kbdBound) {
                toggle.dataset.kbdBound = 'true';
                toggle.addEventListener('keydown', (e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                        e.preventDefault();
                        e.stopPropagation();
                        toggle.click();
                    }
                });
            }
        });

        // Grammar tap chips (grammar selector chips)
        document.querySelectorAll('.grammar-tap-chip').forEach(chip => {
            if (!chip.hasAttribute('role')) chip.setAttribute('role', 'button');
            if (!chip.hasAttribute('tabindex')) chip.setAttribute('tabindex', '0');
            if (!chip.dataset.kbdBound) {
                chip.dataset.kbdBound = 'true';
                chip.addEventListener('keydown', (e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                        e.preventDefault();
                        e.stopPropagation();
                        chip.click();
                    }
                });
            }
        });
    };

    /* ─── INITIALIZATION ────────────────────────────────────────── */
    const init = () => {
        if (window.COSY) {
            window.COSY.reinit = init;
        }

        // Global keydown handler to activate role="button" elements on Space/Enter
        if (!window.cosyRoleButtonKeyboardHandlerSetup) {
            window.cosyRoleButtonKeyboardHandlerSetup = true;
            document.addEventListener('keydown', (e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                    const active = document.activeElement;
                    if (active && active.getAttribute('role') === 'button') {
                        e.preventDefault();
                        active.click();
                    }
                }
            });
        }

        setupScrollProgress();
        setupSideSectionDots();
        setupHeaderShrink();
        setupBackToTop();
        setupScrollReveal();
        setupReviewsCarousel();
        setupClubFilters();
        setupSessionSwitcher();
        autoCollapseFoldableSections();
        setupWonderMusic();
        setupWonderSessionAudio();
        setupScienceSessionAudio();
        setupWonderModeRouter();
        if (window.COSY && window.COSY.updateNavActiveState) window.COSY.updateNavActiveState();

        // FAQ Toggle & ARIA Initialization
        document.querySelectorAll('.faq-item').forEach(item => {
            const btn = item.querySelector('.faq-q');
            if (btn) {
                btn.setAttribute('role', 'button');
                btn.setAttribute('tabindex', '0');
                btn.setAttribute('aria-expanded', item.classList.contains('open') ? 'true' : 'false');
                btn.addEventListener('click', () => {
                    const isOpen = item.classList.contains('open');
                    document.querySelectorAll('.faq-item').forEach(i => {
                        i.classList.remove('open');
                        const b = i.querySelector('.faq-q');
                        if (b) b.setAttribute('aria-expanded', 'false');
                    });
                    if (!isOpen) {
                        item.classList.add('open');
                        btn.setAttribute('aria-expanded', 'true');
                    }
                });
            }
        });

        setupAccessibilityAttributes();

        // Mobile Nav Injection
        if (!document.querySelector('.mobile-nav')) {
            const nav = document.createElement('nav');
            const prefix = (window.COSY && typeof window.COSY.getPrefix === 'function') ? window.COSY.getPrefix() : '';
            nav.className = 'mobile-nav';
            const eventsHref = (window.COSY && typeof window.COSY.getNavHref === 'function') ? window.COSY.getNavHref('events') : `${prefix}apps/premium-events/index.html`;
            const coursesHref = (window.COSY && typeof window.COSY.getNavHref === 'function') ? window.COSY.getNavHref('courses') : `${prefix}index.html#courses`;
            nav.innerHTML = `
                <a href="${prefix}practice/index.html" class="mobile-nav-item" id="mnav-practice"><span class="mn-icon">💡</span><span data-i18n="nav.practice">Practice</span></a>
                <a href="https://cosylanguages.github.io/COSYgames/" target="_blank" rel="noopener" class="mobile-nav-item" id="mnav-games"><span class="mn-icon">🎮</span><span data-i18n="nav.games">Games</span></a>
                <a href="${eventsHref}" class="mobile-nav-item" id="mnav-events"><span class="mn-icon">🎉</span><span data-i18n="nav.events">Events</span></a>
                <a href="${coursesHref}" class="mobile-nav-item" id="mnav-courses"><span class="mn-icon">📚</span><span data-i18n="nav.courses">Courses</span></a>
                <a href="${prefix}index.html" class="mobile-nav-item" id="mnav-home"><span class="mn-icon">🏡</span><span data-i18n="nav.home">Home</span></a>`;
            document.body.appendChild(nav);
        }

        window.updateMobileNav();
        window.updateDailyDose();
        document.addEventListener("cosyLanguageChanged", window.updateDailyDose);
        if (window.COSY && window.COSY.renderDict) window.COSY.renderDict();
        setupVocabPronunciation();
        setupEmbeddedVideoPlayers();
        setupEmbeddedArticles();
        setupLyricsDisclaimers();
        setupVocabHover();

        // Initialize first country tab on language pages if present
        const firstTab = document.querySelector('.ctab');
        if (firstTab) {
            const firstCountry = firstTab.getAttribute('data-country');
            if (firstCountry) {
                window.showCountry(firstCountry);
            }
        }

    };

    window.showCountry = function(code) {
        const panels = document.querySelectorAll('.country-panel');
        panels.forEach(p => p.classList.remove('show'));

        const tabs = document.querySelectorAll('.ctab');
        tabs.forEach(t => t.classList.remove('active'));

        const targetPanel = document.getElementById(`country-${code}`);
        if (targetPanel) targetPanel.classList.add('show');

        const targetTab = document.querySelector(`.ctab[data-country="${code}"]`);
        if (targetTab) targetTab.classList.add('active');
    };

    window.updateDailyDose = function() {
        const htmlLang = document.documentElement.lang || (document.body && document.body.dataset ? document.body.dataset.langTheme : '');
        const lang = (htmlLang || localStorage.getItem('cosy_user_lang') || 'en').toLowerCase();

        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const dayOfYear = Math.floor((now - start) / (1000 * 60 * 60 * 24));

        const fact = document.getElementById('fun-fact-of-the-day');
        if (fact) {
            const factList = (window.COSY_DAILY_FACTS && window.COSY_DAILY_FACTS[lang]) ? window.COSY_DAILY_FACTS[lang] : [
                "Languages connect people across cultures and time."
            ];
            const factItem = factList[dayOfYear % factList.length];
            fact.innerHTML = factItem;
        }

        const idiom = document.getElementById('idiom-of-the-day');
        if (idiom) {
            const idiomList = (window.COSY_DAILY_IDIOMS && window.COSY_DAILY_IDIOMS[lang]) ? window.COSY_DAILY_IDIOMS[lang] : [
                { idiom: "Piece of cake", level: "A1", meaning: "Very easy to do", example: "Don't worry, learning languages is a piece of cake with practice!" }
            ];
            const item = idiomList[dayOfYear % idiomList.length];

            // Resolve proper relative or absolute practice URL based on page depth
            const isSubPage = window.location.pathname.includes('/languages/');
            const practiceBase = isSubPage ? '../../practice/index.html' : 'practice/index.html';
            const practiceUrl = `${practiceBase}?lang=${lang.toUpperCase()}&topic=idioms`;

            idiom.innerHTML = `
                <div class="idiom-box">
                    <div class="idiom-header">
                        <div class="idiom-phrase">💡 "${item.idiom}"</div>
                        <span class="idiom-badge" data-level="${item.level}">${item.level}</span>
                    </div>
                    <div class="idiom-meaning"><strong>Meaning:</strong> ${item.meaning}</div>
                    <div class="idiom-example">💬 "${item.example}"</div>
                    <div class="idiom-footer">
                        <a href="${practiceUrl}" class="idiom-practice-btn">Practice this Idiom 💡 →</a>
                    </div>
                </div>
            `;
        }
    };

    window.captureLead = function(lang) {
        const container = event.target.closest('.lang-card-soon') || event.target.closest('.start-strip');
        const email = container.querySelector('.lead-email')?.value.trim();
        if (!email || !email.includes('@')) return alert('Valid email required.');
        container.querySelector('.lead-capture').innerHTML = `<span>Thanks! ✅</span>`;
    };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();

})();
