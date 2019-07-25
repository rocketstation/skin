module.exports = function(v) {
  switch (v) {
    case 'lower':
      return {
        textTransform: 'lowercase',
      }

    case 'upper':
      return {
        textTransform: 'uppercase',
      }

    case false:
      return {
        textTransform: 'none',
      }

    default:
      return {}
  }
}
