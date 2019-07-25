module.exports = function(v) {
  return {
    alignItems: v === 'start' || v === 'end' ? 'flex-' + v : v,
  }
}
