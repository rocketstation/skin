var parseNth = function(kind) {
  var next = ':nth-'

  switch (kind) {
    case 'first':
      next += 'child'
      break
    case 'last':
      next += 'last-child'
      break
  }

  return function(every, from) {
    return (
      next +
      '(' +
      (every == null ? 0 : every) +
      'n' +
      '+' +
      (from == null ? 1 : from) +
      ')'
    )
  }
}

var its = function(v) {
  return '&' + ' ' + v
}

its.after = '::after'

its.before = '::before'

its.children = '>*'

its.first = function(every, from) {
  return parseNth('first')(every, from)
}

its.highlight = '::selection'

its.last = function(every, from) {
  return parseNth('last')(every, from)
}

its.nextMultiple = '&~*'

its.nextSingle = '&+*'

its.placeholder = '::placeholder'

module.exports = its
