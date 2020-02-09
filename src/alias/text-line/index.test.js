const v = require('./index.js')

test('textLine', () => {
  expect(v(1)).toEqual({ lineHeight: 1 })
})
