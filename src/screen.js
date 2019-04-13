var screen = function(screen) {
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

screen.between = function(from, to) {
  return screen({ from: from, to: to })
}

screen.from = function(from) {
  return screen({ from: from })
}

screen.to = function(to) {
  return screen({ to: to })
}

module.exports = screen
