import test from 'node:test';
import assert from 'node:assert/strict';

test('Theme & Sub-theme selection from COSYdata themes-index.json', async () => {
    const indexUrl = 'https://raw.githubusercontent.com/cosylanguages/COSYdata/main/vocabulary/en/themes-index.json';
    const res = await fetch(indexUrl);
    assert.equal(res.ok, true, 'COSYdata themes-index.json should fetch successfully');

    const indexData = await res.json();

    // Helper to extract base word IDs (e.g. "en:sweep:verb" -> "sweep")
    const getWords = (key) => {
        const items = indexData[key] || [];
        return items.map(id => id.split(':')[1] || id);
    };

    // 1. Verify housing/chores returns sweep, mop, iron, dust
    const housingChoresWords = getWords('housing/chores');
    assert.equal(housingChoresWords.includes('sweep'), true, 'housing/chores should include sweep');
    assert.equal(housingChoresWords.includes('mop'), true, 'housing/chores should include mop');
    assert.equal(housingChoresWords.includes('iron'), true, 'housing/chores should include iron');
    assert.equal(housingChoresWords.includes('dust'), true, 'housing/chores should include dust');

    // 2. Verify activities (and activities/daily_life) includes sweep and mop via primary & secondary theme indexing
    const activitiesWords = getWords('activities');
    assert.equal(activitiesWords.includes('sweep'), true, 'activities should include sweep');
    assert.equal(activitiesWords.includes('mop'), true, 'activities should include mop');
});
