const _ = require('../box-border-kind/services')

module.exports = function(v) {
  return { borderRightStyle: _.parse(v) }
}
