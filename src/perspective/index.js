module.exports = function(v) {
  return 'perspective' + '(' + (typeof v === 'number' ? v + 'rem' : v) + ')'
}
