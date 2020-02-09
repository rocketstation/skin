const _ = require('./services')

module.exports = function(v) {
  const next = _.parse(v)

  return {
    borderBottomLeftRadius: next,
    borderBottomRightRadius: next,
    borderTopLeftRadius: next,
    borderTopRightRadius: next,
  }
}
