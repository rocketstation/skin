module.exports = function(v) {
  if (v == null) return {}

  if (v.constructor === Array && v[0] === 'space-around' && v[1] === true) {
    return {
      justifyContent: 'space-evenly',
    }
  }

  return {
    justifyContent: v === 'start' || v === 'end' ? 'flex-' + v : v,
  }
}
