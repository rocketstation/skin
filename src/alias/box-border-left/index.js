const _ = require('../box-border/services')

module.exports = function(v) {
  return { borderLeftColor: _.parse(v) }
}
