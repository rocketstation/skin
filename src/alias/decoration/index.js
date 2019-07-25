module.exports = function(v) {
  switch (v) {
    case 'top':
      return {
        textDecoration: 'overline',
      }

    case 'center':
      return {
        textDecoration: 'line-through',
      }

    case 'bottom':
      return {
        textDecoration: 'underline',
      }

    case false:
      return {
        textDecoration: 'none',
      }

    default:
      return {}
  }
}
