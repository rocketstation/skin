module.exports = function(v) {
  if (v == null) return {}

  if (v.constructor === Array) {
    return {
      backgroundAttachment: v.reduce(function(r, v) {
        switch (v) {
          case 'local':
            return r + (r.length ? ',' : '') + 'local'

          case 'global':
            return r + (r.length ? ',' : '') + 'scroll'

          case false:
            return r + (r.length ? ',' : '') + 'fixed'

          default:
            return r
        }
      }, ''),
    }
  }

  switch (v) {
    case 'local':
      return {
        backgroundAttachment: 'local',
      }

    case 'global':
      return {
        backgroundAttachment: 'scroll',
      }

    case false:
      return {
        backgroundAttachment: 'fixed',
      }

    default:
      return {}
  }
}
