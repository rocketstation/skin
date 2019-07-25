module.exports = function(v) {
  if (v == null) return {}

  var next

  if (v.constructor === Array) {
    switch (v[0]) {
      case 'x':
        next = 'row'
        break
      case 'y':
        next = 'column'
        break
    }

    if (v[1] === true) next += '-reverse'

    return {
      flexDirection: next,
    }
  }

  switch (v) {
    case 'x':
      next = 'row'
      break
    case 'y':
      next = 'column'
      break
  }

  return {
    flexDirection: next,
  }
}
