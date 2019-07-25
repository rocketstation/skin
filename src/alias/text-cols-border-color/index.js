module.exports = function(v) {
  if (v === false) {
    return {
      columnRuleColor: 'transparent',
    }
  }

  return {
    columnRuleColor: v,
  }
}
