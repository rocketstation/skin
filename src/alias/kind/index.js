module.exports = function(v) {
  switch (v) {
    case 'track':
      return {
        display: 'flex',
      }

    case 'grid':
      return {
        display: 'grid',
      }

    case false:
      return {
        display: 'none',
      }

    case 'box':
      return {
        display: 'block',
      }

    case 'text':
      return {
        display: 'inline',
      }

    default:
      return {}
  }
}
