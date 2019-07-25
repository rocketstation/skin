const v = require('./index.js')

test('rowStart', () => {
  expect(v(1)).toEqual({ gridRowStart: 1 })
})
