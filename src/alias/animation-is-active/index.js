module.exports = function(v) {
  if (v == null) return {}
  return {
    animationPlayState:
      v.constructor === Array
        ? v.reduce(function(r, v) {
            return r + (r.length ? ',' : '') + (v ? 'running' : 'paused')
          }, '')
        : v
        ? 'running'
        : 'paused',
  }
}
