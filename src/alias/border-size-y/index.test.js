const v = require('./index.js')

test('borderSizeY', () => {
  expect(v(0)).toEqual({
    borderBottomWidth: 0,
    borderTopWidth: 0,
  })
})
