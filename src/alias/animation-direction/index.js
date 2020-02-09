const parse = function(v) {
  switch (v) {
    case 'backwards-forwards':
      return 'alternate-reverse'
    case 'backwards':
      return 'reverse'
    case 'forwards':
      return 'normal'
    case 'forwards-backwards':
      return 'alternate'
    default:
      return v
  }
}

module.exports = function(v) {
  return {
    animationDirection: Array.isArray(v)
      ? v.reduce(function(r, v) {
          if (r.length > 0) return `${r},${parse(v)}`

          return parse(v)
        }, '')
      : parse(v),
  }
}
