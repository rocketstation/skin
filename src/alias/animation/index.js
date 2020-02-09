module.exports = function(v) {
  return { animationName: Array.isArray(v) ? v.join(',') : v }
}
