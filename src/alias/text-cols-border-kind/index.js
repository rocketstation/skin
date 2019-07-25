module.exports = function(v) {
  if (v === true) {
    return {
      columnRuleStyle: 'solid',
    }
  }

  if (v === false) {
    return {
      columnRuleStyle: 'none',
    }
  }

  return {
    columnRuleStyle: v,
  }
}
