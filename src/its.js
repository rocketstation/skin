var its = function(v) {
  return '&' + ' ' + v
}

its.after = '::after'

its.before = '::before'

its.children = '>*'

its.first = function(every, from) {
  return (
    ':nth-child' +
    '(' +
    (every == null ? 0 : every) +
    'n' +
    '+' +
    (from == null ? 1 : from) +
    ')'
  )
}

its.highlight = '::selection'

its.last = function(every, from) {
  return (
    ':nth-last-child' +
    '(' +
    (every == null ? 0 : every) +
    'n' +
    '+' +
    (from == null ? 1 : from) +
    ')'
  )
}

its.nextMultiple = '&~*'

its.nextSingle = '&+*'

its.placeholder = '::placeholder'

module.exports = its
