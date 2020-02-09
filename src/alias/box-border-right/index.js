const _ = require('../box-border/services')

module.exports = function(v) {
  return { borderRightColor: _.parse(v) }
}
