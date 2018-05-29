var bubbleSort = function(a) {
    var tmp;
    for(var j = 1; j < a.length; j++) {
        for(var i = 0; i < a.length - j; i++) {
            if (a[i] > a[i + 1]) {
                tmp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = tmp;
            }
        }
    }
    return a;
};

module.exports = bubbleSort;
