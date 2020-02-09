const setUnit = function(v, unit) {
  return typeof v === 'number' ? v + unit : v
}

module.exports = {
  setFr(v) {
    return setUnit(v, 'fr')
  },
  setMs(v) {
    return setUnit(v, 'ms')
  },
  setPx(v) {
    return setUnit(v, 'px')
  },
  setRem(v) {
    return setUnit(v, 'rem')
  },
}
