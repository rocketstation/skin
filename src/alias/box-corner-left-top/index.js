const _ = require('../box-corner/services')

module.exports = function(v) {
  return {
    borderTopLeftRadius: _.parse(v),
  }
}
