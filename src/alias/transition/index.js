module.exports = function(v) {
  if (v === false) return { transitionProperty: 'none' }

  return {
    transitionProperty: Array.isArray(v)
      ? v.reduce(function(r, v) {
          if (r.length > 0) return `${r},${v}`

          return v
        }, '')
      : v,
  }
}
