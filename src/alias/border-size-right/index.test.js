const v = require('./index.js')

test('borderSizeRight', () => {
  expect(v(0)).toEqual({
    borderRightWidth: 0,
  })
})
