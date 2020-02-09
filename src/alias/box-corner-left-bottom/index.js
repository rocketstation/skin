const _ = require('../box-corner/services')

module.exports = function(v) {
  return {
    borderBottomLeftRadius: _.parse(v),
  }
}
