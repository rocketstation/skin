module.exports = function(x, y) {
  return (
    'translate(' +
    (typeof x === 'number' ? x + 'rem' : x) +
    ',' +
    (typeof y === 'number' ? y + 'rem' : y) +
    ')'
  )
}
