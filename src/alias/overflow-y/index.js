module.exports = function(v) {
  if (v == null) return {}

  switch (v) {
    case true:
      return {
        overflowY: 'visible',
      }

    case false:
      return {
        overflowY: 'hidden',
      }
  }

  return {
    overflowY: v,
  }
}
