module.exports = function(v) {
  if (v == null) return {}
  return {
    backgroundPositionX:
      v.constructor === Array
        ? v.reduce(function(r, v) {
            return (
              r +
              (r.length ? ',' : '') +
              (typeof v === 'number' && v !== 0 ? v + 'rem' : v)
            )
          }, '')
        : v,
  }
}
