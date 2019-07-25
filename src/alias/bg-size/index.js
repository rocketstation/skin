module.exports = function(v) {
  if (v == null) return {}

  if (v.constructor === Array) {
    return {
      backgroundSize: v.reduce(function(r, v) {
        switch (v) {
          case 'fill':
            return r + (r.length ? ',' : '') + 'cover'

          case 'fit':
            return r + (r.length ? ',' : '') + 'contain'

          case 'auto':
            return r + (r.length ? ',' : '') + 'auto'
        }

        if (typeof v === 'object') {
          var width = v.width || 'auto'
          var height = v.height || 'auto'
          if (typeof height === 'number' && height !== 0) height += 'rem'
          if (typeof width === 'number' && width !== 0) width += 'rem'
          return r + (r.length ? ',' : '') + width + ' ' + height
        }

        return r
      }, ''),
    }
  }

  switch (v) {
    case 'fill':
      return {
        backgroundSize: 'cover',
      }

    case 'fit':
      return {
        backgroundSize: 'contain',
      }

    case 'auto':
      return {
        backgroundSize: 'auto',
      }
  }

  if (typeof v === 'object') {
    var width = v.width || 'auto'
    var height = v.height || 'auto'
    if (typeof height === 'number' && height !== 0) height += 'rem'
    if (typeof width === 'number' && width !== 0) width += 'rem'
    return {
      backgroundSize: width + ' ' + height,
    }
  }

  return {}
}
