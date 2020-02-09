const _ = require('../../services')

module.exports = function(v) {
  if (v === false) return { gridTemplateColumns: 'none' }

  return {
    gridTemplateColumns: Array.isArray(v)
      ? v.reduce(function(r, v) {
          if (r.length > 0) return `${r} ${_.setFr(v)}`

          return _.setFr(v)
        }, '')
      : _.setFr(v),
  }
}
