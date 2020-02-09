const _ = require('../../services')

const parse = function(v) {
  if (v && typeof v === 'object') {
    return Object.entries(v).reduce(function(r, v) {
      return `${r}${v[0]} ${_.setRem(v[1])} `
    }, '')
  }

  return v
}

module.exports = function(v) {
  return {
    backgroundPosition: Array.isArray(v)
      ? v.reduce(function(r, v) {
          if (r.length > 0) return `${r},${parse(v)}`

          return parse(v)
        }, '')
      : parse(v),
  }
}
