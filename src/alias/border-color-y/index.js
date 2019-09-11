module.exports = function(v) {
  var next = v === false ? 'transparent' : v

  return {
    borderBottomColor: next,
    borderTopColor: next,
  }
}
