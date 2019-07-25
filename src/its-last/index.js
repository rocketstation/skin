module.exports = function(every, from) {
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
