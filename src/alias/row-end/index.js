module.exports = function(v) {
  if (v == null) return {}

  if (v.constructor === Array) {
    return {
      gridRowEnd: v[1] === true ? 'span' + ' ' + v[0] : v[0],
    }
  }

  return {
    gridRowEnd: v,
  }
}
