const v = require('./index.js')

test('cornerRightBottom', () => {
  expect(v(1)).toEqual({
    borderBottomRightRadius: '1px',
  })
  expect(v([1, 1])).toEqual({
    borderBottomRightRadius: '1px/1px',
  })
})
