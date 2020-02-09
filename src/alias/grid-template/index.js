module.exports = function(v) {
  return {
    gridTemplateAreas: Array.isArray(v)
      ? v.reduce(function(r, v) {
          return `${r}"${
            Array.isArray(v)
              ? v.reduce(function(r, v) {
                  if (r.length > 0) return `${r} ${v}`

                  return v
                }, '')
              : v
          }"`
        }, '')
      : v,
  }
}
