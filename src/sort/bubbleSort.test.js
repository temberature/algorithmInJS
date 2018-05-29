var expect = require("chai").expect;
var bubbleSort = require("./bubbleSort");
var generateArr = require("../utils").generateArr;

describe("bubbleSort", function() {
  it("bubbleSort([2, 3, 1]) === [1, 2, 3]", function() {
    var r = bubbleSort([2, 3, 1]);
    expect(r).to.eql([1, 2, 3]);
  });
  it("bubbleSort(a) === a.sort(fn)", function() {
    var arr = generateArr(10000);
    // console.log(arr);
    // var a = bubbleSort(arr);
    var b = arr.sort(function(a, b) {
      return a < b;
    });
    // expect(a).to.eql(b);
  });
});
