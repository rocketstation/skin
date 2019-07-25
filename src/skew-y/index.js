module.exports = function(v) {
  return 'skewY(' + (typeof v === 'number' ? v + 'deg' : v) + ')'
}
