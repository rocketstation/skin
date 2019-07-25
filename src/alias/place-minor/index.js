module.exports = function(v) {
  if (v == null) return {}

  if (v.constructor === Array && v[0] === 'space-around' && v[1] === true) {
    return {
      alignContent: 'space-evenly',
    }
  }

  return {
    alignContent: v,
  }
}
