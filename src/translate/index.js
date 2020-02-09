const _ = require('../services')

module.exports = function(x, y) {
  return `translate(${_.setRem(x)},${_.setRem(y)})`
}
