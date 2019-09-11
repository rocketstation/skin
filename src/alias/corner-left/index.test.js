const v = require('./index.js')

test('cornerLeft', () => {
  expect(v(1)).toEqual({
    borderBottomLeftRadius: '1px',
    borderTopLeftRadius: '1px',
  })
  expect(v([1, 1])).toEqual({
    borderBottomLeftRadius: '1px/1px',
    borderTopLeftRadius: '1px/1px',
  })
})
