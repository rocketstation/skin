const _ = require('../box-border/services')

module.exports = function(v) {
  const next = _.parse(v)

  return {
    borderLeftColor: next,
    borderRightColor: next,
  }
}
