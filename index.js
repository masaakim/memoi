
var Memoi = require('./lib/memoi.js');

if (option) {
  var memoi = new Memoi(option);
} else {
  var memoi = new Memoi()
}

module.exports = memoi;
