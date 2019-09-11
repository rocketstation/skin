const v = require('./index.js')

test('corner', () => {
  expect(v(1)).toEqual({
    borderBottomLeftRadius: '1px',
    borderBottomRightRadius: '1px',
    borderTopLeftRadius: '1px',
    borderTopRightRadius: '1px',
  })
  expect(v([1, 1])).toEqual({
    borderBottomLeftRadius: '1px/1px',
    borderBottomRightRadius: '1px/1px',
    borderTopLeftRadius: '1px/1px',
    borderTopRightRadius: '1px/1px',
  })
})
