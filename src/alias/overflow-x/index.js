module.exports = function(v) {
  if (v == null) return {}

  switch (v) {
    case true:
      return {
        overflowX: 'visible',
      }

    case false:
      return {
        overflowX: 'hidden',
      }
  }

  if (v.constructor === Array && v[0] === 'auto' && v[1] === true) {
    return {
      overflowX: 'scroll',
    }
  }

  return {
    overflowX: 'auto',
  }
}
