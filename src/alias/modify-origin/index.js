const _ = require('../../services')

module.exports = function(v) {
  return {
    transformOrigin: Array.isArray(v)
      ? v.reduce(function(r, v) {
          if (r.length > 0) return `${r} ${_.setRem(v)}`

          return _.setRem(v)
        }, '')
      : _.setRem(v),
  }
}
