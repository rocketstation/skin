const _ = require('../box-border-kind/services')

module.exports = function(v) {
  return { borderTopStyle: _.parse(v) }
}
