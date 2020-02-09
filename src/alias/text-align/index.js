const parse = function(v) {
  switch (v) {
    case 'stretch':
      return 'justify'
    default:
      return v
  }
}

module.exports = function(v) {
  return { textAlign: parse(v) }
}
