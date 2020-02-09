module.exports = function(screen) {
  var queries = '@media screen'

  for (var query in screen) {
    if (Object.prototype.hasOwnProperty.call(screen, query)) {
      queries += ` and (${query}:${screen[query]})`
    }
  }

  return queries
}
