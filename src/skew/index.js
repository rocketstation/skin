module.exports = function(x, y) {
  return (
    'skew(' +
    (typeof x === 'number' ? x + 'deg' : x) +
    ',' +
    (typeof y === 'number' ? y + 'deg' : y) +
    ')'
  )
}
