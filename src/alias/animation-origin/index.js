module.exports = function(v) {
  if (v == null) return {}

  if (v.constructor === Array) {
    return {
      animationFillingMode: v.reduce(function(r, v) {
        switch (v) {
          case false:
            return r + (r.length ? ',' : '') + 'none'

          case true:
            return r + (r.length ? ',' : '') + 'both'

          case 1:
            return r + (r.length ? ',' : '') + 'forwards'

          case -1:
            return r + (r.length ? ',' : '') + 'backwards'

          default:
            return r
        }
      }, ''),
    }
  }

  switch (v) {
    case false:
      return {
        animationFillingMode: 'none',
      }

    case true:
      return {
        animationFillingMode: 'both',
      }

    case 1:
      return {
        animationFillingMode: 'forwards',
      }

    case -1:
      return {
        animationFillingMode: 'backwards',
      }

    default:
      return {}
  }
}
