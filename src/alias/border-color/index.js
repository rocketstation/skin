module.exports = function(v) {
  var next = v === false ? 'transparent' : v

  return {
    borderBottomColor: next,
    borderLeftColor: next,
    borderRightColor: next,
    borderTopColor: next,
  }
}
