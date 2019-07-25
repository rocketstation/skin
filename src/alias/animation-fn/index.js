module.exports = function(v) {
  if (v == null) return {}
  return {
    animationTimingFunction: v.constructor === Array ? v.join(',') : v,
  }
}
