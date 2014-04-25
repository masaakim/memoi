
require('./util');

/**
 * Memoize and cache strategy.
 *
 * @param {Object} options
 **/

function Memoi(options) {
  if (!(this instanceof Memoi)) {
    return new Memoi(options);
  }

  this.memo = {};
  options = options || {};
}

Memoi.prototype.memoize(func) {
  var key = identity.apply(this, arguments);
  if (hasOwnProperty.call(this.memo, key)) {
    return memo.key;
  } else {
    memo.key = func.apply(this, arguments);
    return memo.key;
  }
}

Memoi.prototype.get(key) {
  if (hasOwnProperty.call(this.memo, key)) {
    return memo.key;
  } else {
    return false;
  }
}

Memoi.prototype.set(key, value) {
  if (!hasOwnProperty.call(this.memo, key)) {
    memo.key = value;
  } else {
    return false;
  }
}
