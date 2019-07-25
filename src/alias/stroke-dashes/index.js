module.exports = function(v) {
  if (v == null) return {}
  return {
    strokeDasharray: v.constructor === Array ? v.join(' ') : v,
  }
}
