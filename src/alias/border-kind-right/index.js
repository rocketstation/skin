module.exports = function(v) {
  var next = v

  switch (next) {
    case true:
      next = 'solid'
      break

    case false:
      next = 'none'
      break
  }

  return {
    borderRightStyle: next,
  }
}
