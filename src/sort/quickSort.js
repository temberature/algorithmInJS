function comparator(a, b) {
  return a - b;
}


var quickSort = function(a, cmp) {
  var swap = function(a, i, j) {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
    return a;
  }
  var partition = function(a, left, right, cmp) {
    var pviot = a[right - 1];
    var minEnd = left;
    var maxEnd;
    for (maxEnd = left; maxEnd < right - 1; maxEnd++) {
      if (cmp(a[maxEnd], pviot) < 0) {
        swap(a, maxEnd, minEnd);
        minEnd += 1;
      }
    }
    swap(a, minEnd, right - 1);
    return minEnd;
  }
  var sortIter = function(a, left, right, cmp) {
    if (left < right) {
      var p = partition(a, left, right, cmp);
      sortIter(a, left, p, cmp);
      sortIter(a, p + 1, right, cmp);
    }
    return a;
  }
  cmp = cmp || comparator;
  return sortIter(a, 0, a.length, cmp);
};

module.exports = quickSort;
