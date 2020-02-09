const v = require('./index.js')

test('boxCornerLeftBottom', () => {
  expect(v(1)).toEqual({
    borderBottomLeftRadius: '1px',
  })
  expect(v([1, 1])).toEqual({
    borderBottomLeftRadius: '1px/1px',
  })
})
