module.exports = function(v) {
  if (v == null) return {}

  if (v.constructor === Array) {
    return {
      animationDirection: v.reduce(function(r, v) {
        switch (v) {
          case -1:
            return r + (r.length ? ',' : '') + 'reverse'

          case -2:
            return r + (r.length ? ',' : '') + 'alternate-reverse'

          case 2:
            return r + (r.length ? ',' : '') + 'alternate'

          case 1:
            return r + (r.length ? ',' : '') + 'normal'

          default:
            return r
        }
      }, ''),
    }
  }

  switch (v) {
    case 1:
      return {
        animationDirection: 'normal',
      }

    case -1:
      return {
        animationDirection: 'reverse',
      }

    case 2:
      return {
        animationDirection: 'alternate',
      }

    case -2:
      return {
        animationDirection: 'alternate-reverse',
      }

    default:
      return {}
  }
}
