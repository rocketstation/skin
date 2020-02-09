const v = require('./index.js')

test('boxCornerRightTop', () => {
  expect(v(1)).toEqual({
    borderTopRightRadius: '1px',
  })
  expect(v([1, 1])).toEqual({
    borderTopRightRadius: '1px/1px',
  })
})
