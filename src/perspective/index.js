const _ = require('../services')

module.exports = function(v) {
  return `perspective(${_.setRem(v)})`
}
