module.exports = function(v) {
  switch (v) {
    case true:
      return { overflowX: 'visible' }
    case false:
      return { overflowX: 'hidden' }
    default:
      return { overflowX: v }
  }
}
