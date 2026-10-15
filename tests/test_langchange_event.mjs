import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('Header language panel cosy:langchange event & persistence', () => {
    // Mock browser environment
    const storage = {};
    global.localStorage = {
        getItem: (k) => storage[k] || null,
        setItem: (k, v) => { storage[k] = String(v); },
        removeItem: (k) => { delete storage[k]; }
    };

    const listeners = {};
    const eventTarget = {
        addEventListener: (type, fn) => {
            listeners[type] = listeners[type] || [];
            listeners[type].push(fn);
        },
        dispatchEvent: (evt) => {
            const handlers = listeners[evt.type] || [];
            handlers.forEach(fn => fn(evt));
            return true;
        }
    };

    global.window = {
        ...eventTarget,
        location: { pathname: '/', href: 'http://localhost/' }
    };
    global.document = {
        ...eventTarget,
        readyState: 'complete',
        documentElement: { setAttribute: () => {} },
        head: { appendChild: () => {} },
        body: { className: '', classList: { add: () => {}, remove: () => {} }, appendChild: () => {} },
        getElementById: (id) => {
            if (id === 'cosy-pinned-lang-badge') {
                return global._mockBadgeElement;
            }
            return null;
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        createElement: () => ({ setAttribute: () => {}, appendChild: () => {} })
    };

    global.CustomEvent = class CustomEvent {
        constructor(type, options = {}) {
            this.type = type;
            this.detail = options.detail || {};
            this.bubbles = options.bubbles || false;
        }
    };

    // Mocks for badge element
    let badgeText = '';
    global._mockBadgeElement = {
        get textContent() { return badgeText; },
        set textContent(val) { badgeText = val; }
    };

    let dispatchedEvents = [];
    global.window.addEventListener('cosy:langchange', (evt) => {
        dispatchedEvents.push(evt.detail);
    });

    // Load js/core/engine.js code into execution context
    const engineCode = fs.readFileSync(path.resolve('js/core/engine.js'), 'utf8');
    eval(engineCode);

    assert.ok(global.window.COSY, 'COSY global should be attached to window');

    // 1. Verify initial load event dispatch
    assert.equal(dispatchedEvents.length, 1);
    assert.equal(dispatchedEvents[0].lang, 'en');
    assert.equal(dispatchedEvents[0].initial, true);
    assert.equal(badgeText, 'EN', 'Badge should be updated on initial langchange event');

    // 2. Test pinning a new language (e.g. 'fr')
    global.window.COSY.pinLanguage('fr');

    assert.equal(localStorage.getItem('cosy.pinnedLang'), 'fr', 'localStorage cosy.pinnedLang should be updated to fr');
    assert.equal(dispatchedEvents.length, 2);
    assert.equal(dispatchedEvents[1].lang, 'fr');
    assert.equal(badgeText, 'FR', 'Badge should be updated to FR from cosy:langchange event');

    // 3. Test pinning another language (e.g. 'it')
    global.window.COSY.pinLanguage('it');

    assert.equal(localStorage.getItem('cosy.pinnedLang'), 'it', 'localStorage cosy.pinnedLang should be updated to it');
    assert.equal(dispatchedEvents.length, 3);
    assert.equal(dispatchedEvents[2].lang, 'it');
    assert.equal(badgeText, 'IT', 'Badge should be updated to IT from cosy:langchange event');
});
