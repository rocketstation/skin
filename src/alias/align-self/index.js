module.exports = function(v) {
  return {
    alignSelf: v === 'start' || v === 'end' ? 'flex-' + v : v,
  }
}
