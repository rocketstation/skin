const _ = require('../../services')

const parse = function(v) {
  if (v && typeof v === 'object') {
    let next = `${_.setPx(v.x)} ${_.setPx(v.y)} ${_.setPx(v.blur || 0)}`

    if (v.color) next += ` ${v.color}`

    return next
  }

  return v
}

module.exports = function(v) {
  if (v === false) return { textShadow: 'none' }

  return {
    textShadow: Array.isArray(v)
      ? v.reduce(function(r, v) {
          if (r.length > 0) return `${r},${parse(v)}`

          return parse(v)
        }, '')
      : parse(v),
  }
}
