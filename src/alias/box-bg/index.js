module.exports = function(v) {
  return {
    backgroundImage: Array.isArray(v) ? v.join(',') : v === false ? 'none' : v,
  }
}
