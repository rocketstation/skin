const parse = function(v) {
  switch (v) {
    case 'local':
      return 'local'
    case 'global':
      return 'scroll'
    case false:
      return 'fixed'
    default:
      return v
  }
}

module.exports = function(v) {
  return {
    backgroundAttachment: Array.isArray(v)
      ? v.reduce(function(r, v) {
          if (r.length > 0) return `${r},${parse(v)}`

          return parse(v)
        }, '')
      : parse(v),
  }
}
