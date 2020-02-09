module.exports = function(v) {
  switch (v) {
    case true:
      return { cursor: 'pointer' }
    case false:
      return { cursor: 'not-allowed' }
    default:
      return { cursor: v }
  }
}
