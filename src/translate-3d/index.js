const _ = require('../services')

module.exports = function(x, y, z) {
  return `translate3d(${_.setRem(x)},${_.setRem(y)},${_.setRem(z)})`
}
