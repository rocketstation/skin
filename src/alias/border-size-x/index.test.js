const v = require('./index.js')

test('borderSizeX', () => {
  expect(v(0)).toEqual({
    borderLeftWidth: 0,
    borderRightWidth: 0,
  })
})
