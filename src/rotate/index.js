module.exports = function(v) {
  return 'rotate(' + (typeof v === 'number' ? v + 'deg' : v) + ')'
}
