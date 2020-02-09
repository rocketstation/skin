const v = require('./index.js')

test('textColsBorder', () => {
  expect(v(false)).toEqual({ columnRuleColor: 'transparent' })
  expect(v('hsla(0,0,0,0)')).toEqual({ columnRuleColor: 'hsla(0,0,0,0)' })
})
