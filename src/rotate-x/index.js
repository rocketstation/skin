module.exports = function(v) {
  return 'rotateX(' + (typeof v === 'number' ? v + 'deg' : v) + ')'
}
