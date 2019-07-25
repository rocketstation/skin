module.exports = function(v) {
  if (v == null) return {}

  if (v.constructor === Array) {
    return {
      gridTemplateAreas: v.reduce(function(r, v) {
        return (
          r +
          '"' +
          (v.constructor === Array
            ? v.reduce(function(r, v) {
                r += (r.length ? ' ' : '') + v
                return r
              }, '')
            : v) +
          '"'
        )
      }, ''),
    }
  }

  return {
    gridTemplateAreas: v,
  }
}
