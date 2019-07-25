module.exports = function(v) {
  return 'rotateY(' + (typeof v === 'number' ? v + 'deg' : v) + ')'
}
