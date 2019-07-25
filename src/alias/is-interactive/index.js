module.exports = function(v) {
  switch (v) {
    case true:
      return {
        cursor: 'pointer',
      }

    case false:
      return {
        cursor: 'auto',
      }

    default:
      return {}
  }
}
