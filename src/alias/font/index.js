module.exports = function(v) {
  if (v == null) return {}
  return {
    fontFamily: v.constructor === Array ? v.join(',') : v,
  }
}
