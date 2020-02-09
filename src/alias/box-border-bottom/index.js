const _ = require('../box-border/services')

module.exports = function(v) {
  return { borderBottomColor: _.parse(v) }
}
