module.exports = function(v) {
  if (v == null) return {}
  return {
    transitionTimingFunction: v.constructor === Array ? v.join(',') : v,
  }
}
