var expect = require("chai").expect;
var quickSort = require("./quickSort");
var generateArr = require("../utils").generateArr;

describe("quickSort", function() {
  it("quickSort([2, 3, 1]) === [1, 2, 3]", function() {
    var r = quickSort([2, 3, 1]);
    expect(r).to.eql([1, 2, 3]);
  });
  it("quickSort(a) === a.sort(fn)", function() {
    var arr = generateArr(10000);
    // console.log(arr);
    // var a = quickSort(arr);
    var b = arr.sort(function(a, b) {
      return a < b;
    });
    // expect(a).to.eql(b);
  });
});
