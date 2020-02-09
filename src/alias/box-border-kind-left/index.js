const _ = require('../box-border-kind/services')

module.exports = function(v) {
  return { borderLeftStyle: _.parse(v) }
}
