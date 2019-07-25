module.exports = function(x, y, z, angle) {
  return (
    'rotate3d(' +
    x +
    ',' +
    y +
    ',' +
    z +
    ',' +
    (typeof angle === 'number' ? angle + 'deg' : angle) +
    ')'
  )
}
