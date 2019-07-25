module.exports = function(v) {
  if (v === true) {
    return {
      outlineStyle: 'solid',
    }
  }

  if (v === false) {
    return {
      outlineStyle: 'none',
    }
  }

  return {
    outlineStyle: v,
  }
}
