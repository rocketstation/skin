const v = require('./index.js')

test('textColsBorderKind', () => {
  expect(v(true)).toEqual({ columnRuleStyle: 'solid' })
  expect(v(false)).toEqual({ columnRuleStyle: 'none' })
  expect(v('solid')).toEqual({ columnRuleStyle: 'solid' })
})
