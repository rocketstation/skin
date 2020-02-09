const _ = require('../services')

module.exports = function(v) {
  return `translateX(${_.setRem(v)})`
}
