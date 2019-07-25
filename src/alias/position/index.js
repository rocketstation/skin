module.exports = function(v) {
  if (v === false) {
    return {
      position: 'fixed',
    }
  }

  if (v === true) {
    return {
      position: 'static',
    }
  }

  return {
    position: v,
  }
}
