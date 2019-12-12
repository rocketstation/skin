module.exports = function(v) {
  if (v == null) return {}

  switch (v) {
    case true:
      return {
        overflowX: 'visible',
      }

    case false:
      return {
        overflowX: 'hidden',
      }
  }

  return {
    overflowX: v,
  }
}
