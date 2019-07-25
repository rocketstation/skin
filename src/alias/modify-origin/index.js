module.exports = function(v) {
  if (v == null) return {}

  if (v.constructor === Array) {
    return {
      transformOrigin: v.reduce(function(r, v, i, a) {
        return (
          r +
          (r.length ? ' ' : '') +
          (typeof v === 'number' && v !== 0 ? v + 'rem' : v)
        )
      }, ''),
    }
  }

  return {
    transformOrigin: typeof v === 'number' && v !== 0 ? v + 'rem' : v,
  }
}
