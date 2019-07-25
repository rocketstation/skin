module.exports = function(v) {
  if (v == null) return {}

  if (v.constructor === Array) {
    return {
      backgroundRepeat: v.reduce(function(r, v) {
        switch (v) {
          case true:
            return r + (r.length ? ',' : '') + 'repeat'

          case false:
            return r + (r.length ? ',' : '') + 'no-repeat'

          case 'y':
            return r + (r.length ? ',' : '') + 'repeat-y'

          case 'x':
            return r + (r.length ? ',' : '') + 'repeat-x'

          default:
            return r
        }
      }, ''),
    }
  }

  switch (v) {
    case true:
      return {
        backgroundRepeat: 'repeat',
      }

    case false:
      return {
        backgroundRepeat: 'no-repeat',
      }

    case 'y':
      return {
        backgroundRepeat: 'repeat-y',
      }

    case 'x':
      return {
        backgroundRepeat: 'repeat-x',
      }

    default:
      return {}
  }
}
