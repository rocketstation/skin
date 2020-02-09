const v = require('./index.js')

test('boxCornerBottom', () => {
  expect(v(1)).toEqual({
    borderBottomLeftRadius: '1px',
    borderBottomRightRadius: '1px',
  })
  expect(v([1, 1])).toEqual({
    borderBottomLeftRadius: '1px/1px',
    borderBottomRightRadius: '1px/1px',
  })
})
