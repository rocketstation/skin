var screen = function(screen) {
  var queries = '@media screen'

  for (var query in screen) {
    if (screen.hasOwnProperty(query)) {
      queries += ' and ' + '(' + query + ':' + screen[query] + ')'
    }
  }

  return queries
}

screen.between = function(from, to) {
  return (
    '@media screen and ' +
    '(min-width:' +
    from / 16 +
    'em' +
    ')' +
    ' and ' +
    '(max-width:' +
    (to - 1) / 16 +
    'em' +
    ')'
  )
}

screen.from = function(from) {
  return '@media screen and ' + '(min-width:' + from / 16 + 'em' + ')'
}

screen.to = function(to) {
  return '@media screen and ' + '(max-width:' + (to - 1) / 16 + 'em' + ')'
}

module.exports = screen
