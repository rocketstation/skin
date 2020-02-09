const parse = function(v) {
  switch (v) {
    case 'border':
      return 'border-box'
    case 'space':
      return 'padding-box'
    case 'content':
      return 'content-box'
    default:
      return v
  }
}

module.exports = function(v) {
  return {
    backgroundOrigin: Array.isArray(v)
      ? v.reduce(function(r, v) {
          if (r.length > 0) return `${r},${parse(v)}`

          return parse(v)
        }, '')
      : parse(v),
  }
}
