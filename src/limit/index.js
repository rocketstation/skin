module.exports = function(min, max) {
  return (
    'minmax' +
    '(' +
    (min != null
      ? typeof min === 'number' && min !== 0
        ? min + 'rem'
        : min
      : 'auto') +
    ',' +
    (max != null
      ? typeof max === 'number' && max !== 0
        ? max + 'rem'
        : max
      : 'auto') +
    ')'
  )
}
