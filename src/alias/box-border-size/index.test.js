const v = require('./index.js')

test('boxBorderSize', () => {
  expect(v(0)).toEqual({
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  })
})
