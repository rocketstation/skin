module.exports = function(v) {
  switch (v) {
    case false:
      return { whiteSpace: 'nowrap' }
    case true:
      return { whiteSpace: 'normal' }
    case 'raw':
      return { whiteSpace: 'pre' }
    case 'raw-fit':
      return { whiteSpace: 'pre-wrap' }
    case 'raw-fit-strict':
      return { whiteSpace: 'pre-line' }
    default:
      return { whiteSpace: v }
  }
}
