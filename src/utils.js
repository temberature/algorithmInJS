var generateArr = function(n) {
  var a = [];
  for (var i = 0; i < n; i++) {
    a.push(Math.random() * n);
  }
  return a;
};

module.exports = {
  generateArr: generateArr
};
