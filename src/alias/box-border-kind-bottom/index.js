const _ = require('../box-border-kind/services')

module.exports = function(v) {
  return { borderBottomStyle: _.parse(v) }
}
