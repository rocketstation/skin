const v = require('./index.js')

test('boxWidthMin', () => {
  expect(v(0)).toEqual({ minWidth: 0 })
})
