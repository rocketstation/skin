const _ = require('./services')

module.exports = function(v) {
  const next = _.parse(v)

  return {
    borderBottomStyle: next,
    borderLeftStyle: next,
    borderRightStyle: next,
    borderTopStyle: next,
  }
}
