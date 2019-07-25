module.exports = function(v) {
  if (v == null) return {}
  return {
    animationIterationCount:
      v.constructor === Array
        ? v.reduce(function(r, v) {
            return r + (r.length ? ',' : '') + (v === true ? 'infinite' : v)
          }, '')
        : v === true
        ? 'infinite'
        : v,
  }
}
