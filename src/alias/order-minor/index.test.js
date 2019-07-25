const v = require('./index.js')
test('orderMinor', () => {
  expect(v(1)).toEqual({ zIndex: 1 })
})
