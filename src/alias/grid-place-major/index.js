module.exports = function(v) {
  switch (v) {
    case 'space':
      return { justifyContent: 'space-evenly' }
    case 'space-inner':
      return { justifyContent: 'space-between' }
    case 'space-outer':
      return { justifyContent: 'space-around' }
    default:
      return { justifyContent: v }
  }
}
