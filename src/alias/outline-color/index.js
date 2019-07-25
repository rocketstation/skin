module.exports = function(v) {
  if (v === false) {
    return {
      outlineColor: 'transparent',
    }
  }

  return {
    outlineColor: v,
  }
}
