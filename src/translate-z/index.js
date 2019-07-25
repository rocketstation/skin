module.exports = function(v) {
  return 'translateZ(' + (typeof v === 'number' ? v + 'rem' : v) + ')'
}
