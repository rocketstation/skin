const parse = function(v) {
  return v === true ? 'infinite' : String(v)
}

module.exports = function(v) {
  return {
    animationIterationCount: Array.isArray(v)
      ? v.reduce(function(r, v) {
          if (r.length > 0) return `${r},${parse(v)}`

          return parse(v)
        }, '')
      : parse(v),
  }
}
