module.exports = function(v) {
  if (v == null) return {}

  if (v === false) {
    return {
      textShadow: 'none',
    }
  }

  if (v.constructor === Array) {
    return {
      textShadow: v.reduce(function(r, v) {
        if (typeof v === 'object') {
          return (
            r +
            (r.length ? ',' : '') +
            (v.x
              ? typeof v.x === 'number' && v.x !== 0
                ? v.x + 'px'
                : v.x
              : 0) +
            ' ' +
            (v.y
              ? typeof v.y === 'number' && v.y !== 0
                ? v.y + 'px'
                : v.y
              : 0) +
            ' ' +
            (v.blur
              ? typeof v.blur === 'number' && v.blur !== 0
                ? v.blur + 'px'
                : v.blur
              : 0) +
            (v.color ? ' ' + v.color : '')
          )
        }

        return r + (r.length ? ',' : '') + v
      }, ''),
    }
  }

  if (typeof v === 'object') {
    return {
      textShadow:
        (v.x ? (typeof v.x === 'number' && v.x !== 0 ? v.x + 'px' : v.x) : 0) +
        ' ' +
        (v.y ? (typeof v.y === 'number' && v.y !== 0 ? v.y + 'px' : v.y) : 0) +
        ' ' +
        (v.blur
          ? typeof v.blur === 'number' && v.blur !== 0
            ? v.blur + 'px'
            : v.blur
          : 0) +
        (v.color ? ' ' + v.color : ''),
    }
  }

  return {
    textShadow: v,
  }
}
