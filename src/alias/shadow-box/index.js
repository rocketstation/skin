module.exports = function(v) {
  if (v == null) return {}

  if (v === false) {
    return {
      boxShadow: 'none',
    }
  }

  if (v.constructor === Array) {
    return {
      boxShadow: v.reduce(function(r, v) {
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
            ' ' +
            (v.size
              ? typeof v.size === 'number' && v.size !== 0
                ? v.size + 'px'
                : v.size
              : 0) +
            (v.color ? ' ' + v.color : '') +
            (v.isReversed ? ' ' + 'inset' : '')
          )
        }

        return r + (r.length ? ',' : '') + v
      }, ''),
    }
  }

  if (typeof v === 'object') {
    return {
      boxShadow:
        (v.x ? (typeof v.x === 'number' && v.x !== 0 ? v.x + 'px' : v.x) : 0) +
        ' ' +
        (v.y ? (typeof v.y === 'number' && v.y !== 0 ? v.y + 'px' : v.y) : 0) +
        ' ' +
        (v.blur
          ? typeof v.blur === 'number' && v.blur !== 0
            ? v.blur + 'px'
            : v.blur
          : 0) +
        ' ' +
        (v.size
          ? typeof v.size === 'number' && v.size !== 0
            ? v.size + 'px'
            : v.size
          : 0) +
        (v.color ? ' ' + v.color : '') +
        (v.isReversed ? ' ' + 'inset' : ''),
    }
  }

  return {
    boxShadow: v,
  }
}
