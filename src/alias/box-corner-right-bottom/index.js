const _ = require('../box-corner/services')

module.exports = function(v) {
  return {
    borderBottomRightRadius: _.parse(v),
  }
}
