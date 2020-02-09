const _ = require('../services')

module.exports = function(key, val = '1fr') {
  return `repeat(${
    key === 'fill' || key === 'fit' ? `auto-${key}` : key
  },${_.setFr(val)})`
}
