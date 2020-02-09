const parse = function(v) {
  switch (v) {
    case false:
      return 'none'
    case true:
      return 'both'
    default:
      return v
  }
}

module.exports = function(v) {
  return {
    animationFillMode: Array.isArray(v)
      ? v.reduce(function(r, v) {
          if (r.length > 0) return `${r},${parse(v)}`

          return parse(v)
        }, '')
      : parse(v),
  }
}
