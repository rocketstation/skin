const _ = require('../../services')

module.exports = {
  parse(v) {
    return Array.isArray(v) ? `${_.setPx(v[0])}/${_.setPx(v[1])}` : _.setPx(v)
  },
}
