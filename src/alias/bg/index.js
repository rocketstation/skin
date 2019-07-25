module.exports = function(v) {
  if (v == null) return {}

  if (v === false) {
    return {
      backgroundImage: 'none',
    }
  }

  if (v.constructor === Array) {
    return {
      backgroundImage: v.reduce(function(r, v) {
        return r + (r.length ? ',' : '') + v
      }, ''),
    }
  }

  return {
    backgroundImage: v,
  }
}
