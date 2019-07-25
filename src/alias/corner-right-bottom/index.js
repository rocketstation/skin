module.exports = function(v) {
  if (v == null) return {}

  var next = v

  switch (true) {
    case typeof v === 'number' && v !== 0:
      next += 'px'
      break
    case typeof v === 'object' && v.constructor === Array: {
      var x = v[0]
      var y = v[1]

      if (typeof x === 'number' && x !== 0) x += 'px'
      if (typeof y === 'number' && y !== 0) y += 'px'

      next = x + '/' + y
      break
    }
  }

  return {
    borderBottomRightRadius: next,
  }
}
