
module.exports = function (options) {
  options = options || {};
  return new Memoi(options);
};

function Memoi(options) {
  if (!(this instanceof Memoi)) {
    return new Memoi(options);
  }
  this.memo = {};
  this.options = options || {};

  this.ze = function(func) {
    var self = this;
    var key = identity.apply(this, arguments);
    if (hasOwnProperty.call(self.memo, key)) {
      return self.memo.key;
    } else {
      self.memo.key = func.apply(this, arguments);
      return self.memo.key;
    }
  };
}

function identity(val) {
  return val;
}
