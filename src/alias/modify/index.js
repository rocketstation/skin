module.exports = function(v) {
  if (v == null) return {}

  if (v === false) {
    return {
      transform: 'none',
    }
  }

  return {
    transform: v.constructor === Array ? v.join(' ') : v,
  }
}
