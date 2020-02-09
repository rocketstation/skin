const v = require('./index.js')

test('gridRowStart', () => {
  expect(v(1)).toEqual({ gridRowStart: 1 })
})
