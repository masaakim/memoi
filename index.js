
module.exports = function(fn) {
  var memo = {};
  function identity(val) {
    return val;
  }
  return function() {
    var key = identity.apply(this, arguments);
    if (hasOwnProperty.call(memo, key)) return memo.key;
    else {
      memo.key = fn.apply(this, arguments);
      return memo.key;
    }
  };
};
