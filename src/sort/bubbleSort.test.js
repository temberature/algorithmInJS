var expect = require('chai').expect;
var bubbleSort = require('./bubbleSort');

describe('bubbleSort', function() {
    it('bubbleSort([2, 3, 1]) === [1, 2, 3]', function() {
        var r = bubbleSort([2, 3, 1]);
        expect(r).to.eql([1, 2, 3]);
    })
})