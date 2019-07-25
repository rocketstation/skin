module.exports = function(v) {
  return 'skewX(' + (typeof v === 'number' ? v + 'deg' : v) + ')'
}
