const v = require('./index.js')

test('gridColStart', () => {
  expect(v(1)).toEqual({ gridColumnStart: 1 })
})
