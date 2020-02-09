const _ = require('../box-border/services')

module.exports = function(v) {
  return { borderTopColor: _.parse(v) }
}
