module.exports = function(v) {
  if (v === false) {
    return {
      fill: 'transparent',
    }
  }

  return {
    fill: v,
  }
}
