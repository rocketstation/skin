const _ = require('../box-corner/services')

module.exports = function(v) {
  const next = _.parse(v)

  return {
    borderTopLeftRadius: next,
    borderTopRightRadius: next,
  }
}
