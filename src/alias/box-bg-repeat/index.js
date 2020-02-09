const parse = function(v) {
  switch (v) {
    case true:
      return 'repeat'
    case false:
      return 'no-repeat'
    case 'y':
      return 'repeat-y'
    case 'x':
      return 'repeat-x'
    default:
      return v
  }
}

module.exports = function(v) {
  return {
    backgroundRepeat: Array.isArray(v)
      ? v.reduce(function(r, v) {
          if (r.length > 0) return `${r},${parse(v)}`

          return parse(v)
        }, '')
      : parse(v),
  }
}
