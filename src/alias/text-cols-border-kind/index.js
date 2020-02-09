module.exports = function(v) {
  switch (v) {
    case true:
      return { columnRuleStyle: 'solid' }
    case false:
      return { columnRuleStyle: 'none' }
    default:
      return { columnRuleStyle: v }
  }
}
