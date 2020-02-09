module.exports = function(v) {
  return {
    gridRowEnd: Array.isArray(v)
      ? v[1] === true
        ? 'span' + ' ' + v[0]
        : v[0]
      : v,
  }
}
