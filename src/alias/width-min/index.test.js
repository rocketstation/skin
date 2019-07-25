const v = require('./index.js')

test('widthMin', () => {
  expect(v(0)).toEqual({ minWidth: 0 })
})
