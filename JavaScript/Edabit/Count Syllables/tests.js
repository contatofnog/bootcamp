var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Count Syllables (unit tests)\n', () => {
    it('[Test 1] Expected: 2', () => 
        assert.equal(e.numberSyllables("buf-fet"), 2)
    )
    it('[Test 2] Expected: 3', () => 
        assert.equal(e.numberSyllables("beau-ti-ful"), 3)
    )
    it('[Test 3] Expected: 4', () => 
        assert.equal(e.numberSyllables("mon-u-men-tal"), 4)
    )
    it('[Test 4] Expected: 6', () => 
        assert.equal(e.numberSyllables("on-o-mat-o-poe-ia"), 6)
    )
    it('[Test 5] Expected: 3', () => 
        assert.equal(e.numberSyllables("o-ver-ly"), 3)
    )
    it('[Test 6] Expected: 2', () => 
        assert.equal(e.numberSyllables("pas-try"), 2)
    )
    it('[Test 7] Expected: 2', () => 
        assert.equal(e.numberSyllables("flu-id"), 2)
    )
    it('[Test 8] Expected: 3', () => 
        assert.equal(e.numberSyllables("syl-la-ble"), 3)
    )
})
