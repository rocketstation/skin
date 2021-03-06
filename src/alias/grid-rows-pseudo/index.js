const _ = require('../../services')

module.exports = function(v) {
  if (v === 'auto') return { gridAutoRows: 'auto' }

  return {
    gridAutoRows: Array.isArray(v)
      ? v.reduce(function(r, v) {
          if (r.length > 0) return `${r} ${_.setFr(v)}`

          return _.setFr(v)
        }, '')
      : _.setFr(v),
  }
}
