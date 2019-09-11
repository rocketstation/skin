const v = require('./index.js')

test('corner', () => {
  expect(v(1)).toEqual({
    borderBottomRightRadius: '1px',
    borderTopRightRadius: '1px',
  })
  expect(v([1, 1])).toEqual({
    borderBottomRightRadius: '1px/1px',
    borderTopRightRadius: '1px/1px',
  })
})
