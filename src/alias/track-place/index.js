module.exports = function(v) {
  switch (v) {
    case 'space':
      return { justifyContent: 'space-evenly' }
    case 'space-inner':
      return { justifyContent: 'space-between' }
    case 'space-outer':
      return { justifyContent: 'space-around' }
    case 'start':
      return { justifyContent: 'flex-start' }
    case 'end':
      return { justifyContent: 'flex-end' }
    default:
      return { justifyContent: v }
  }
}
