module.exports = function(key, val) {
  return (
    'repeat' +
    '(' +
    (key === 'fill' || key === 'fit' ? 'auto-' + key : key) +
    ',' +
    (val != null
      ? typeof val === 'number' && val !== 0
        ? val + 'fr'
        : val
      : '1fr') +
    ')'
  )
}
