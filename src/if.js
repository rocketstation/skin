var parseClass = function(v) {
  return '.' + v
}

var parseId = function(v) {
  return '#' + v
}

var parseEvent = function(v) {
  return ':' + v
}

var parseAttr = function(v) {
  if (typeof v === 'object') {
    var next = v.key

    var val = v.val
    var modifier = v.modifier
    var isNot = v.isNot

    if (val) {
      switch (modifier) {
        case 'equals':
          next += '=' + val
          break

        case 'contains':
          next += '~=' + val
          break

        case 'starts':
          next += '|=' + val
          break

        case 'containsStr':
          next += '*=' + '"' + val + '"'
          break

        case 'startsWithStr':
          next += '^=' + '"' + val + '"'
          break

        case 'endsWithStr':
          next += '$=' + '"' + val + '"'
          break
      }
    }

    next = '[' + next + ']'

    return isNot ? ':not' + '(' + next + ')' : next
  }

  return '[' + v + ']'
}

var parseNth = function(v) {
  var next
  var isNot
  var isReversed
  var isStrict

  switch (v) {
    case 'first':
      next = '1'
      break

    case 'last':
      next = '1'
      isReversed = true
      break

    default: {
      next = (v.each || 0) + 'n' + '+' + (v.from || 0)
      isNot = v.isNot
      isReversed = v.isReversed
      isStrict = v.isStrict
    }
  }

  next =
    ':' +
    (isReversed ? 'nth-last' : 'nth') +
    '-' +
    (isStrict ? 'of-type' : 'child') +
    '(' +
    next +
    ')'

  return isNot ? ':not' + '(' + next + ')' : next
}

var parse = function(modifier) {
  if (typeof modifier === 'object') {
    var queries = ['&']

    if (modifier.hasOwnProperty('kind')) {
      queries.push(modifier.kind)
    }

    if (modifier.hasOwnProperty('class')) {
      queries.push(
        []
          .concat(modifier.class)
          .map(parseClass)
          .join('')
      )
    }

    if (modifier.hasOwnProperty('id')) {
      queries.push(
        []
          .concat(modifier.id)
          .map(parseId)
          .join('')
      )
    }

    if (modifier.hasOwnProperty('attr')) {
      queries.push(parseAttr(modifier.attr))
    }

    if (modifier.hasOwnProperty('nth')) {
      queries.push(parseNth(modifier.nth))
    }

    if (modifier.hasOwnProperty('event')) {
      queries.push(parseEvent(modifier.event))
    }

    return queries.join('')
  }

  switch (modifier) {
    case 'first':
      return parseNth('first')
    case 'last':
      return parseNth('last')
  }

  return parseEvent(modifier)
}

module.exports = function(modifier, rules) {
  var next = {}

  next[parse(modifier)] = [].concat(rules).reduce(function(r, v) {
    return Object.assign(r, v)
  }, {})

  return next
}
