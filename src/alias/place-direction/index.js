module.exports = function(v) {
  if (v == null) return {}

  var next

  if (v.constructor === Array && v[1] === true) {
    switch (v[0]) {
      case 'x':
        next = 'row'
        break
      case 'y':
        next = 'column'
        break
    }

    if (v[1] === true) next += ' dense'

    return {
      gridAutoFlow: next,
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
    gridAutoFlow: next,
  }
}
