module.exports = function(every, from) {
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
