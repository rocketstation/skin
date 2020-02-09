module.exports = function(v) {
  switch (v) {
    case false:
      return { flexWrap: 'nowrap' }
    case 1:
      return { flexWrap: 'wrap' }
    case -1:
      return { flexWrap: 'wrap-reverse' }

    default:
      return { flexWrap: v }
  }
}
