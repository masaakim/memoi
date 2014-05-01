var memoi = require('./');
var test = require('tape');

var fibonacci_memo = memoi(function(n) {
  return n < 2 ? n: fibonacci_memo(n - 1) + fibonacci_memo(n - 2);
});

var fibonacci = memoi(function(n) {
  return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
});

test('memoize', function(t) {
  var result = fibonacci_memo(10);
  var expected = fibonacci(10);

  t.equal(result, expected, "memoized result is same");

  t.end();
});
