const parse = function(v) {
  switch (v) {
    case 'x':
      return 'row'
    case 'y':
      return 'column'
  }
}

module.exports = function(v) {
  return {
    flexDirection: Array.isArray(v)
      ? v[1] === true
        ? `${parse(v[0])}-reverse`
        : parse(v[0])
      : parse(v),
  }
}
