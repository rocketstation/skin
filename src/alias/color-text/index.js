module.exports = function(v) {
  if (v === false) {
    return {
      color: 'transparent',
    }
  }

  return {
    color: v,
  }
}
