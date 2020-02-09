module.exports = function(v) {
  switch (v) {
    case 'space':
      return { alignContent: 'space-evenly' }
    case 'space-inner':
      return { alignContent: 'space-between' }
    case 'space-outer':
      return { alignContent: 'space-around' }
    default:
      return { alignContent: v }
  }
}
