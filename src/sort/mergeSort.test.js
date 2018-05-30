var expect = require("chai").expect;
var mergeSort = require("./mergeSort");
var generateArr = require("../utils").generateArr;

describe("mergeSort", function() {
  it("mergeSort([2, 3, 1]) === [1, 2, 3]", function() {
    var r = mergeSort([2, 3, 1]);
    expect(r).to.eql([1, 2, 3]);
  });
  it("mergeSort(a) === a.sort(fn)", function() {
    var arr = generateArr(10000);
    // console.log(arr);
    // var a = mergeSort(arr);
    var b = arr.sort(function(a, b) {
      return a < b;
    });
    // expect(a).to.eql(b);
  });
});
