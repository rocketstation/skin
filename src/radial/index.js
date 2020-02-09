module.exports = function() {
  var v = ''
  var i = 0

  for (i; i < arguments.length; i++) {
    if (v.length > 0) v += ','

    v += Array.isArray(arguments[i])
      ? `${arguments[i][0]} ${arguments[i][1]}%`
      : arguments[i]
  }

  return `radial-gradient(${v})`
}
