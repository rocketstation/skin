const parse = function(v) {
  switch (v) {
    case 'box':
      return 'background-color'
    case 'box-border':
      return 'border-color'
    case 'text':
      return 'color'
    case 'shape':
      return 'fill'
    case 'shape-border':
      return 'stroke'
    case 'modify':
      return 'transform'
    default:
      return v
  }
}

module.exports = function(v) {
  if (v === false) return { transitionProperty: 'none' }

  return {
    transitionProperty: Array.isArray(v)
      ? v.reduce(function(r, v) {
          if (r.length > 0) return `${r},${parse(v)}`

          return parse(v)
        }, '')
      : parse(v),
  }
}
