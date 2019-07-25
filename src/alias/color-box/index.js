module.exports = function(v) {
  if (v === false) {
    return {
      backgroundColor: 'transparent',
    }
  }

  return {
    backgroundColor: v,
  }
}
