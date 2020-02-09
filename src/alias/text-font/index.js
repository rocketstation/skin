module.exports = function(v) {
  return { fontFamily: Array.isArray(v) ? v.join(',') : v }
}
