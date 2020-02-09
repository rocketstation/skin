const v = require('./index.js')

test('boxCornerLeftTop', () => {
  expect(v(1)).toEqual({
    borderTopLeftRadius: '1px',
  })
  expect(v([1, 1])).toEqual({
    borderTopLeftRadius: '1px/1px',
  })
})
