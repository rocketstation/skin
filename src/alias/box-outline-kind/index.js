module.exports = function(v) {
  switch (v) {
    case true:
      return { outlineStyle: 'solid' }
    case false:
      return { outlineStyle: 'none' }
    default:
      return { outlineStyle: v }
  }
}
