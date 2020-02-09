module.exports = function(v) {
  return { strokeDasharray: Array.isArray(v) ? v.join(' ') : v }
}
