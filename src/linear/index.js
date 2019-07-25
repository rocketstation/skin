module.exports = function(k) {
  var v = ''

  for (var i = 1; i < arguments.length; i++) {
    v +=
      (v.length ? ',' : '') +
      (arguments[i].constructor === Array
        ? arguments[i][0] + ' ' + arguments[i][1] + '%'
        : arguments[i])
  }

  return 'linear-gradient' + '(' + k + 'deg' + ',' + v + ')'
}
