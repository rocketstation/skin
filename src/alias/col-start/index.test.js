const v = require('./index.js')

test('colStart', () => {
  expect(v(1)).toEqual({ gridColumnStart: 1 })
})
