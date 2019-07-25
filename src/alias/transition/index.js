module.exports = function(v) {
  if (v == null) return {}

  if (v === false) {
    return {
      transitionProperty: 'none',
    }
  }

  if (v.constructor === Array) {
    return {
      transitionProperty: v.reduce(function(r, v) {
        switch (v) {
          case 'color-box':
            return r + (r.length ? ',' : '') + 'background-color'

          case 'color-text':
            return r + (r.length ? ',' : '') + 'color'

          case 'modify':
            return r + (r.length ? ',' : '') + 'transform'

          default:
            return r + (r.length ? ',' : '') + v
        }
      }, ''),
    }
  }

  switch (v) {
    case 'color-box':
      return {
        transitionProperty: 'background-color',
      }

    case 'color-text':
      return {
        transitionProperty: 'color',
      }

    case 'modify':
      return {
        transitionProperty: 'transform',
      }

    default:
      return {
        transitionProperty: v,
      }
  }
}
