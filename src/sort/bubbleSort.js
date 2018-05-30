var comparator = function(a, b) {
  return a - b;
}

var bubbleSort = function(a, cmp) {
  cmp = cmp || comparator;
  var temp;
  for (var i = 0; i < a.length; i++) {
    for (var j = i; j > 0; j--) {
      if (cmp(a[j], a[j - 1]) < 0) {
        temp = a[j];
        a[j] = a[j - 1];
        a[j - 1] = temp;
      }
    }
  }
  return a;
};

module.exports = bubbleSort;
