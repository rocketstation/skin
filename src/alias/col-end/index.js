module.exports = function(v) {
  if (v == null) return {}

  if (v.constructor === Array) {
    return {
      gridColumnEnd: v[1] === true ? 'span' + ' ' + v[0] : v[0],
    }
  }

  return {
    gridColumnEnd: v,
  }
}
