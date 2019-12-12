const v = require('./index.js')
test('orderZ', () => {
  expect(v(1)).toEqual({ zIndex: 1 })
})
