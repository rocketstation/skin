module.exports = function(modifier, rules) {
  if (typeof modifier === 'object') {
    var config = Object.assign({}, modifier)

    switch (config.modifier) {
      case 'children':
        config.modifier = '&>'
        break
      case 'nextSingle':
        config.modifier = '&+'
        break
      case 'nextMultiple':
        config.modifier = '&~'
        break
      default:
        config.modifier = '& '
    }

    return require('./if')(config, rules)
  }

  var next = [].concat(rules).reduce(function(r, v) {
    return Object.assign(r, v)
  }, {})

  switch (modifier) {
    case 'children':
      return { '>*': next }
    case 'before':
      return { '::before': next }
    case 'after':
      return { '::after': next }
    case 'placeholder':
      return { '::placeholder': next }
    case 'nextSingle':
      return { '&+*': next }
    case 'nextMultiple':
      return { '&~*': next }
    case 'highlight':
      return { '::selection': next }
  }
}
