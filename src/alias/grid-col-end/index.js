module.exports = function(v) {
  return {
    gridColumnEnd: Array.isArray(v)
      ? v[1] === true
        ? 'span' + ' ' + v[0]
        : v[0]
      : v,
  }
}
