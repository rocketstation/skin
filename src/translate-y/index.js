module.exports = function(v) {
  return 'translateY(' + (typeof v === 'number' ? v + 'rem' : v) + ')'
}
