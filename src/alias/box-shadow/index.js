const _ = require('../../services')

const parse = function(v) {
  if (v && typeof v === 'object') {
    let next = `${_.setPx(v.x)} ${_.setPx(v.y)}`

    next += ` ${_.setPx(v.blur || 0)}`
    next += ` ${_.setPx(v.size || 0)}`

    if (v.color) next += ` ${v.color}`
    if (v.isReversed) next += ` inset`

    return next
  }

  return v
}

module.exports = function(v) {
  if (v === false) return { boxShadow: 'none' }

  return {
    boxShadow: Array.isArray(v)
      ? v.reduce(function(r, v) {
          if (r.length > 0) return `${r},${parse(v)}`

          return parse(v)
        }, '')
      : parse(v),
  }
}
