var parse = function(screen) {
  var queries = ['@media screen']

  for (var query in screen) {
    if (screen.hasOwnProperty(query)) {
      var val = screen[query]

      switch (query) {
        case 'from':
          queries.push('(min-width:' + val / 16 + 'em' + ')')
          break
        case 'to':
          queries.push('(max-width:' + (val - 1) / 16 + 'em' + ')')
          break
        default:
          queries.push('(' + query + ':' + val + ')')
      }
    }
  }

  return queries.join(' and ')
}

var combine = function(rules) {
  return [].concat(rules).reduce((r, v) => Object.assign(r, v), {})
}

module.exports = function(screen) {
  var rules = {}

  if (typeof screen === 'number') {
    rules[parse({ to: screen })] = combine(arguments[1])
    rules[parse({ from: screen })] = combine(arguments[2])
  } else rules[parse(screen)] = combine(arguments[1])

  return rules
}
