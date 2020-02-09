const _ = require('../../services')

module.exports = function(v) {
  return {
    transitionDuration: Array.isArray(v)
      ? v.reduce(function(r, v) {
          if (r.length > 0) return `${r},${_.setMs(v)}`

          return _.setMs(v)
        }, '')
      : _.setMs(v),
  }
}
