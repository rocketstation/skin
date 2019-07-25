const v = require('./index.js')

test('size', () => {
  expect(v(1)).toEqual({ fontSize: 1 })
})
