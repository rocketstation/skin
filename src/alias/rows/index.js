module.exports = function(v) {
  if (v == null) return {}

  if (v === false) {
    return {
      gridTemplateRows: 'none',
    }
  }

  return {
    gridTemplateRows:
      v.constructor === Array
        ? v.reduce(function(r, v) {
            return (
              r +
              (r.length ? ' ' : '') +
              (typeof v === 'number' && v !== 0 ? v + 'fr' : v)
            )
          }, '')
        : typeof v === 'number' && v !== 0
        ? v + 'fr'
        : v,
  }
}
