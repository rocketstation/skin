module.exports = function(x, y, z) {
  return (
    'translate3d(' +
    (typeof x === 'number' ? x + 'rem' : x) +
    ',' +
    (typeof y === 'number' ? y + 'rem' : y) +
    ',' +
    (typeof z === 'number' ? z + 'rem' : z) +
    ')'
  )
}
