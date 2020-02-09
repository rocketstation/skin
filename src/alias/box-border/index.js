const _ = require('./services')

module.exports = function(v) {
  const next = _.parse(v)

  return {
    borderBottomColor: next,
    borderLeftColor: next,
    borderRightColor: next,
    borderTopColor: next,
  }
}
