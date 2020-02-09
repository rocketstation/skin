const _ = require('../services')

module.exports = function(v) {
  return `translateY(${_.setRem(v)})`
}
