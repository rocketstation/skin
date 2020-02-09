module.exports = function(v) {
  return { animationTimingFunction: Array.isArray(v) ? v.join(',') : v }
}
