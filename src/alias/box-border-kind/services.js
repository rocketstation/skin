module.exports = {
  parse(v) {
    switch (v) {
      case true:
        return 'solid'
      case false:
        return 'none'
      default:
        return v
    }
  },
}
