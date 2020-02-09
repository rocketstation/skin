const v = require('./index.js')

test('boxBorderSizeTop', () => {
  expect(v(0)).toEqual({
    borderTopWidth: 0,
  })
})
