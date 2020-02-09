const _ = require('../box-corner/services')

module.exports = function(v) {
  return {
    borderTopRightRadius: _.parse(v),
  }
}
