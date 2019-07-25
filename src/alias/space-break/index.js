module.exports = function(v) {
  if (v == null) return {}

  switch (v) {
    case false:
      return {
        whiteSpace: 'nowrap',
      }

    case true:
      return {
        whiteSpace: 'normal',
      }

    case 'raw':
      return {
        whiteSpace: 'pre',
      }
  }

  if (v.constructor === Array && v[0] === 'raw') {
    switch (v[1]) {
      case true:
        return {
          whiteSpace: 'pre-wrap',
        }

      case false:
        return {
          whiteSpace: 'pre-line',
        }
    }
  }

  return {}
}
