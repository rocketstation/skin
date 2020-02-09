module.exports = function(v) {
  return { transitionTimingFunction: Array.isArray(v) ? v.join(',') : v }
}
