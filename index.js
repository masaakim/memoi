
var Memoi = require('./lib/memoi.js');

var memoi = function(option) {
  if (option) new Memoi(option)
  else new Memoi()
};

module.exports = memoi;
