const _ = require('../../services')

const parse = function(v) {
  switch (v) {
    case 'fill':
      return 'cover'
    case 'fit':
      return 'contain'
    default:
      if (v && typeof v === 'object') {
        return `${_.setRem(v.width) || 'auto'} ${_.setRem(v.height) || 'auto'}`
      }

      return v
  }
}

module.exports = function(v) {
  return {
    backgroundSize: Array.isArray(v)
      ? v.reduce(function(r, v) {
          if (r.length > 0) return `${r},${parse(v)}`

          return parse(v)
        }, '')
      : parse(v),
  }
}
