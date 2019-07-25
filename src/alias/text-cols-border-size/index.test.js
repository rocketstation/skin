const v = require('./index.js')

test('textColsBorderSize', () => {
  expect(v(1)).toEqual({ columnRuleWidth: 1 })
})
