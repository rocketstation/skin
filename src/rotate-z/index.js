module.exports = function(v) {
  return 'rotateZ(' + (typeof v === 'number' ? v + 'deg' : v) + ')'
}
