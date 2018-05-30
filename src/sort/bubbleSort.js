var bubbleSort = function(a) {
  var tmp;
  for (var j = 1; j < a.length; j++) {
    for (var i = 0; i < a.length - j; i++) {
      if (a[i] > a[i + 1]) {
        tmp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = tmp;
      }
    }
  }
  return a;
};

var bubbleSortR = function(a) {
  var bubbleIter = function(a, k) {
    return a[k] > a[k + 1]
      ? a.slice(0, k).concat(a[k + 1], a[k], a.slice(k + 2))
      : bubbleIter(a, k + 1);
  };
  return bubbleIter(a, 1);
};

module.exports = bubbleSort;
