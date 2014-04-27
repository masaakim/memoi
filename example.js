
var memoi = require('memoi')();

var fib = memoi.ze(function(n) {
  if (n < 2) return n;
  else return fi (n - 1) + fib(n - 2);
});
