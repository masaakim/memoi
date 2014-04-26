
var memoi = require('memoi');
var fib = memoi.memoize(function(n) {
  if (n < 2) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
});

// or

var option = {storage: ['localStorage']};
var memoi = new Memoi(option);
var fib = memoi.memoize(function(n) {
  if (n < 2) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
});

memoi.get(memoi.memo['fib(10)']); // => 55
