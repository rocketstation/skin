module.exports = function(v) {
  if (v == null) return {}

  if (v.constructor === Array) {
    return {
      backgroundOrigin: v.reduce(function(r, v) {
        switch (v) {
          case 'border':
            return r + (r.length ? ',' : '') + 'border-box'

          case 'space':
            return r + (r.length ? ',' : '') + 'padding-box'

          case 'content':
            return r + (r.length ? ',' : '') + 'content-box'

          default:
            return r
        }
      }, ''),
    }
  }

  switch (v) {
    case 'border':
      return {
        backgroundOrigin: 'border-box',
      }

    case 'space':
      return {
        backgroundOrigin: 'padding-box',
      }

    case 'content':
      return {
        backgroundOrigin: 'content-box',
      }

    default:
      return {}
  }
}
