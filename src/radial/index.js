module.exports = function() {
  var v = ''

  for (var i = 0; i < arguments.length; i++) {
    v +=
      (v.length ? ',' : '') +
      (arguments[i].constructor === Array
        ? arguments[i][0] + ' ' + arguments[i][1] + '%'
        : arguments[i])
  }

  return 'radial-gradient' + '(' + v + ')'
}
