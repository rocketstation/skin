const v = require('./index.js')

test('borderSizeTop', () => {
  expect(v(0)).toEqual({
    borderTopWidth: 0,
  })
})
