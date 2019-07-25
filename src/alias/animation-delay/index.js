module.exports = function(v) {
  if (v == null) return {}
  return {
    animationDelay:
      v.constructor === Array
        ? v.reduce(function(r, v) {
            return (
              r + (r.length ? ',' : '') + (typeof v === 'number' ? v + 'ms' : v)
            )
          }, '')
        : typeof v === 'number'
        ? v + 'ms'
        : v,
  }
}
