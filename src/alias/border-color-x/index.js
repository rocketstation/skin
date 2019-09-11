module.exports = function(v) {
  var next = v === false ? 'transparent' : v

  return {
    borderLeftColor: next,
    borderRightColor: next,
  }
}
