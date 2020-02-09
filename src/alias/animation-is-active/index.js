const parse = function(v) {
  switch (v) {
    case true:
      return 'running'
    case false:
      return 'paused'
    default:
      return v
  }
}

module.exports = function(v) {
  return {
    animationPlayState: Array.isArray(v)
      ? v.reduce(function(r, v) {
          if (r.length > 0) return `${r},${parse(v)}`

          return parse(v)
        }, '')
      : parse(v),
  }
}
