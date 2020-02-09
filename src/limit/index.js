const _ = require('../services')

module.exports = function(min = 'auto', max = 'auto') {
  return `minmax(${_.setRem(min)},${_.setRem(max)})`
}
