module.exports = function(v) {
  if (v == null) return {}

  switch (v) {
    case true:
      return {
        overflowY: 'visible',
      }

    case false:
      return {
        overflowY: 'hidden',
      }
  }

  if (v.constructor === Array && v[0] === 'auto' && v[1] === true) {
    return {
      overflowY: 'scroll',
    }
  }

  return {
    overflowY: 'auto',
  }
}
