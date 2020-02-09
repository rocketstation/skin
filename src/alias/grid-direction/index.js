module.exports = function(v) {
  switch (v) {
    case 'x':
      return { gridAutoFlow: 'row' }
    case 'y':
      return { gridAutoFlow: 'column' }
    case 'x-auto':
      return { gridAutoFlow: 'row dense' }
    case 'y-auto':
      return { gridAutoFlow: 'column dense' }
    default:
      return {}
  }
}
