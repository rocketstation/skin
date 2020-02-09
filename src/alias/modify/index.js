module.exports = function(v) {
  if (v === false) return { transform: 'none' }

  return { transform: v.constructor === Array ? v.join(' ') : v }
}
