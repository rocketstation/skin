const v = require('./index.js')
test('trackOrder', () => {
  expect(v(1)).toEqual({ order: 1 })
})
