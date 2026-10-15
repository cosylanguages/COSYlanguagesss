/**
 * COSYlanguages Daily Strip Component Engine
 * File: js/daily-strip.js
 */

(function () {
    'use strict';

    const COSY_DATA_DAILY_BASE = 'https://cosylanguages.github.io/COSYdata/daily/';

    const LANG_VOICE_MAP = {
        'en': 'en-US',
        'fr': 'fr-FR',
        'it': 'it-IT',
        'ru': 'ru-RU',
        'el': 'el-GR',
        'es': 'es-ES',
        'de': 'de-DE',
        'pt': 'pt-PT',
        'hy': 'hy-AM',
        'ka': 'ka-GE',
        'tt': 'tt',
        'ba': 'ba',
        'br': 'br',
        'cv': 'cv'
    };

    const TABS_CONFIG = [
        { id: 'speaking', label: 'Speaking Prompt', icon: '🗣️' },
        { id: 'writing', label: 'Writing Prompt', icon: '✍️' },
        { id: 'idiom', label: 'Idiom of the Day', icon: '💬' },
        { id: 'fact', label: 'Fun Fact', icon: '💡' }
    ];

    function getDayOfYear() {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
        return Math.floor(diff / 86400000);
    }

    function getTodayKey() {
        const d = new Date();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${d.getFullYear()}-${month}-${day}`;
    }

    function getYesterdayKey() {
        const d = new Date();
        d.setDate(d.getDate() - 1);
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${d.getFullYear()}-${month}-${day}`;
    }

    async function fetchCategoryData(lang, category) {
        const cacheKey = `cosy_daily_${lang}_${category}`;
        try {
            const cached = sessionStorage.getItem(cacheKey);
            if (cached) {
                return JSON.parse(cached);
            }
        } catch (e) {
            // Ignore sessionStorage access errors
        }

        const remoteCategory = category === 'fact' ? 'facts' : (category === 'idiom' ? 'idioms' : category);
        const url = `${COSY_DATA_DAILY_BASE}${lang}/${remoteCategory}.json`;

        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
                try {
                    sessionStorage.setItem(cacheKey, JSON.stringify(data));
                } catch (e) {
                    // Ignore storage quota errors
                }
                return data;
            }
        } catch (err) {
            // Fallback handled downstream
        }
        return null;
    }

    function getLocalFallback(lang, category) {
        if (category === 'fact') {
            const list = (window.COSY_DAILY_FACTS && window.COSY_DAILY_FACTS[lang])
                ? window.COSY_DAILY_FACTS[lang]
                : ["Learning a new language expands memory and cognitive flexibility."];
            return list;
        }
        if (category === 'idiom') {
            const list = (window.COSY_DAILY_IDIOMS && window.COSY_DAILY_IDIOMS[lang])
                ? window.COSY_DAILY_IDIOMS[lang]
                : [{ idiom: "Break a leg", meaning: "Good luck!" }];
            return list;
        }
        if (category === 'speaking') {
            return [
                { prompt: "Describe your favorite childhood memory in 3 minutes.", translation: "Опишите ваше самое любимое воспоминание из детства за 3 минуты." }
            ];
        }
        if (category === 'writing') {
            return [
                { prompt: "Write 3 sentences about your goals for this week.", translation: "Напишите 3 предложения о ваших целях на эту неделю." }
            ];
        }
        return [];
    }

    function parseDailyItem(item) {
        if (!item) return { text: 'No content available today.', translation: '', meta: '' };
        if (typeof item === 'string') {
            return { text: item, translation: '', meta: '' };
        }
        const text = item.prompt || item.fact || item.idiom || item.text || item.question || item.phrase || '';
        const translation = item.translation || item.meaning || item.explanation || item.ru || item.en || '';
        let meta = '';
        if (item.level) meta += `CEFR ${item.level.toUpperCase()}`;
        if (item.example) {
            if (meta) meta += ' • ';
            meta += `Example: "${item.example}"`;
        }
        return { text, translation, meta };
    }

    class DailyStripComponent {
        constructor(element) {
            this.container = element;
            this.lang = this.container.getAttribute('data-lang') || localStorage.getItem('cosy.pinnedLang') || 'en';
            this.activeTab = 'speaking';
            this.categoryData = {};
            this.uniqueId = 'ds_' + Math.random().toString(36).substring(2, 9);
            this.init();
        }

        async init() {
            this.renderShell();
            this.bindEvents();
            await this.loadAllCategories();
            this.renderContent();
            this.updateStreakUI();
        }

        renderShell() {
            const currentStreak = localStorage.getItem('cosy-streak') || '0';
            const todayStr = getTodayKey();
            const lastPractice = localStorage.getItem('cosy-last-practice');
            const isDoneToday = lastPractice === todayStr;

            this.container.classList.add('daily-strip-container');
            this.container.innerHTML = `
                <div class="daily-strip-header">
                    <div class="daily-strip-title-wrap">
                        <span class="daily-strip-title-icon">🌟</span>
                        <h2 class="daily-strip-title">Daily Practice Strip</h2>
                        <span class="daily-strip-lang-badge">${this.lang.toUpperCase()}</span>
                    </div>
                    <div class="daily-strip-header-actions">
                        <div class="daily-strip-streak" title="Your current practice streak">
                            🔥 <span class="daily-strip-streak-count">${currentStreak}</span> day streak
                        </div>
                        <button type="button" class="daily-strip-done-btn ${isDoneToday ? 'completed' : ''}" aria-label="Mark daily practice done">
                            ${isDoneToday ? '✓ Done today' : 'Mark done today'}
                        </button>
                    </div>
                </div>

                <div class="daily-strip-tabs" role="tablist" aria-label="Daily Dose Categories">
                    ${TABS_CONFIG.map((tab, idx) => `
                        <button type="button"
                                class="daily-strip-tab"
                                id="${this.uniqueId}_tab_${tab.id}"
                                role="tab"
                                aria-selected="${tab.id === this.activeTab ? 'true' : 'false'}"
                                aria-controls="${this.uniqueId}_panel_${tab.id}"
                                tabindex="${tab.id === this.activeTab ? '0' : '-1'}"
                                data-tab="${tab.id}">
                            <span>${tab.icon}</span> ${tab.label}
                        </button>
                    `).join('')}
                </div>

                <div class="daily-strip-panels">
                    ${TABS_CONFIG.map((tab) => `
                        <div id="${this.uniqueId}_panel_${tab.id}"
                             class="daily-strip-panel"
                             role="tabpanel"
                             aria-labelledby="${this.uniqueId}_tab_${tab.id}"
                             ${tab.id !== this.activeTab ? 'hidden' : ''}>
                            <div class="daily-strip-content-main">
                                <p class="daily-strip-prompt">Loading daily content...</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        bindEvents() {
            // Tab click & keyboard events
            const tabsList = this.container.querySelector('.daily-strip-tabs');
            tabsList.addEventListener('click', (e) => {
                const btn = e.target.closest('.daily-strip-tab');
                if (btn) {
                    this.switchTab(btn.getAttribute('data-tab'));
                }
            });

            tabsList.addEventListener('keydown', (e) => {
                const tabs = Array.from(tabsList.querySelectorAll('.daily-strip-tab'));
                const currentIndex = tabs.findIndex(t => t.getAttribute('data-tab') === this.activeTab);
                let targetIndex = -1;

                if (e.key === 'ArrowRight') {
                    targetIndex = (currentIndex + 1) % tabs.length;
                } else if (e.key === 'ArrowLeft') {
                    targetIndex = (currentIndex - 1 + tabs.length) % tabs.length;
                } else if (e.key === 'Home') {
                    targetIndex = 0;
                } else if (e.key === 'End') {
                    targetIndex = tabs.length - 1;
                }

                if (targetIndex !== -1) {
                    e.preventDefault();
                    const targetTab = tabs[targetIndex];
                    this.switchTab(targetTab.getAttribute('data-tab'));
                    targetTab.focus();
                }
            });

            // "Mark done today" button
            const doneBtn = this.container.querySelector('.daily-strip-done-btn');
            doneBtn.addEventListener('click', () => {
                this.handleMarkDone();
            });

            // Listen for global language change
            window.addEventListener('cosy:langchange', (e) => {
                if (!this.container.getAttribute('data-lang')) {
                    const newLang = (e.detail && e.detail.lang) || localStorage.getItem('cosy.pinnedLang') || 'en';
                    if (newLang !== this.lang) {
                        this.lang = newLang;
                        this.reloadForLang();
                    }
                }
            });
        }

        switchTab(tabId) {
            if (this.activeTab === tabId) return;
            this.activeTab = tabId;

            TABS_CONFIG.forEach(tab => {
                const tabBtn = this.container.querySelector(`#${this.uniqueId}_tab_${tab.id}`);
                const panel = this.container.querySelector(`#${this.uniqueId}_panel_${tab.id}`);
                const isActive = tab.id === tabId;

                if (tabBtn) {
                    tabBtn.setAttribute('aria-selected', isActive ? 'true' : 'false');
                    tabBtn.setAttribute('tabindex', isActive ? '0' : '-1');
                }
                if (panel) {
                    if (isActive) {
                        panel.removeAttribute('hidden');
                    } else {
                        panel.setAttribute('hidden', '');
                    }
                }
            });
        }

        async loadAllCategories() {
            const dayIdx = getDayOfYear();
            for (const config of TABS_CONFIG) {
                let list = await fetchCategoryData(this.lang, config.id);
                if (!list || list.length === 0) {
                    list = getLocalFallback(this.lang, config.id);
                }
                const rawItem = list[dayIdx % list.length];
                this.categoryData[config.id] = parseDailyItem(rawItem);
            }
        }

        renderContent() {
            TABS_CONFIG.forEach(tab => {
                const panel = this.container.querySelector(`#${this.uniqueId}_panel_${tab.id}`);
                if (!panel) return;

                const item = this.categoryData[tab.id] || { text: 'Content unavailable.', translation: '', meta: '' };
                const hasTranslation = Boolean(item.translation);

                panel.innerHTML = `
                    <div class="daily-strip-content-main">
                        <p class="daily-strip-prompt">${this.escapeHTML(item.text)}</p>
                        ${hasTranslation ? `<div class="daily-strip-translation" id="${this.uniqueId}_trans_${tab.id}" hidden>${this.escapeHTML(item.translation)}</div>` : ''}
                        ${item.meta ? `<div class="daily-strip-meta">${this.escapeHTML(item.meta)}</div>` : ''}
                    </div>
                    <div class="daily-strip-footer">
                        <div class="daily-strip-actions-left">
                            <button type="button" class="daily-strip-audio-btn" aria-label="Listen to audio pronunciation">
                                🔊 Listen
                            </button>
                            ${hasTranslation ? `
                                <button type="button" class="daily-strip-toggle-translation-btn" data-target="${this.uniqueId}_trans_${tab.id}">
                                    🌐 Show Translation
                                </button>
                            ` : ''}
                        </div>
                    </div>
                `;

                // Bind audio button
                const audioBtn = panel.querySelector('.daily-strip-audio-btn');
                if (audioBtn) {
                    audioBtn.addEventListener('click', () => {
                        this.speakText(item.text);
                    });
                }

                // Bind translation toggle button
                const transBtn = panel.querySelector('.daily-strip-toggle-translation-btn');
                if (transBtn) {
                    transBtn.addEventListener('click', () => {
                        const transDiv = panel.querySelector(`#${this.uniqueId}_trans_${tab.id}`);
                        if (transDiv) {
                            const isHidden = transDiv.hasAttribute('hidden');
                            if (isHidden) {
                                transDiv.removeAttribute('hidden');
                                transBtn.textContent = '🌐 Hide Translation';
                            } else {
                                transDiv.setAttribute('hidden', '');
                                transBtn.textContent = '🌐 Show Translation';
                            }
                        }
                    });
                }
            });
        }

        speakText(text) {
            if (!('speechSynthesis' in window)) return;
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = LANG_VOICE_MAP[this.lang] || 'en-US';
            window.speechSynthesis.speak(utterance);
        }

        handleMarkDone() {
            const todayStr = getTodayKey();
            const yesterdayStr = getYesterdayKey();
            const lastPractice = localStorage.getItem('cosy-last-practice');
            let streak = parseInt(localStorage.getItem('cosy-streak') || '0', 10);

            if (lastPractice !== todayStr) {
                if (lastPractice === yesterdayStr) {
                    streak += 1;
                } else {
                    streak = 1;
                }
                localStorage.setItem('cosy-streak', String(streak));
                localStorage.setItem('cosy-last-practice', todayStr);
            }

            this.updateStreakUI();
        }

        updateStreakUI() {
            const currentStreak = localStorage.getItem('cosy-streak') || '0';
            const todayStr = getTodayKey();
            const lastPractice = localStorage.getItem('cosy-last-practice');
            const isDoneToday = lastPractice === todayStr;

            const streakCountEl = this.container.querySelector('.daily-strip-streak-count');
            if (streakCountEl) streakCountEl.textContent = currentStreak;

            const doneBtn = this.container.querySelector('.daily-strip-done-btn');
            if (doneBtn) {
                if (isDoneToday) {
                    doneBtn.classList.add('completed');
                    doneBtn.textContent = '✓ Done today';
                } else {
                    doneBtn.classList.remove('completed');
                    doneBtn.textContent = 'Mark done today';
                }
            }
        }

        async reloadForLang() {
            const langBadge = this.container.querySelector('.daily-strip-lang-badge');
            if (langBadge) langBadge.textContent = this.lang.toUpperCase();
            await this.loadAllCategories();
            this.renderContent();
        }

        escapeHTML(str) {
            if (!str) return '';
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;');
        }
    }

    function initAllDailyStrips() {
        document.querySelectorAll('[data-daily-strip]').forEach(el => {
            if (!el.__dailyStripInstance) {
                el.__dailyStripInstance = new DailyStripComponent(el);
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAllDailyStrips);
    } else {
        initAllDailyStrips();
    }

    window.COSY_DailyStrip = DailyStripComponent;
})();
