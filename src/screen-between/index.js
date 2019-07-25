module.exports = function(from, to) {
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
