module.exports = function(to) {
  return '@media screen and ' + '(max-width:' + (to - 1) / 16 + 'em' + ')'
}
