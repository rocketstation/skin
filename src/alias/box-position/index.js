module.exports = function(v) {
  switch (v) {
    case true:
      return { position: 'static' }
    case false:
      return { position: 'fixed' }
    default:
      return { position: v }
  }
}
