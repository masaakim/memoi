
var memoi = require('memoi')();

var fibonacci = memoi(function(n) {
  return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
});
