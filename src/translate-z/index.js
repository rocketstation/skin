const _ = require('../services')

module.exports = function(v) {
  return `translateZ(${_.setRem(v)})`
}
