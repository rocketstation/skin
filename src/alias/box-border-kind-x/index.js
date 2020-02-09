const _ = require('../box-border-kind/services')

module.exports = function(v) {
  const next = _.parse(v)

  return {
    borderLeftStyle: next,
    borderRightStyle: next,
  }
}
