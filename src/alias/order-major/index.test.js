const v = require('./index.js')

test('orderMajor', () => {
  expect(v(1)).toEqual({ order: 1 })
})
