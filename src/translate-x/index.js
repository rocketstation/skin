module.exports = function(v) {
  return 'translateX(' + (typeof v === 'number' ? v + 'rem' : v) + ')'
}
