module.exports = function(v) {
  switch (v) {
    case true:
      return { overflowY: 'visible' }
    case false:
      return { overflowY: 'hidden' }
    default:
      return { overflowY: v }
  }
}
