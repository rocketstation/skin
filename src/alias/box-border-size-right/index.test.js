const v = require('./index.js')

test('boxBorderSizeRight', () => {
  expect(v(0)).toEqual({
    borderRightWidth: 0,
  })
})
