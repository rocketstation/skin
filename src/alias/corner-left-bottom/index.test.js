const v = require('./index.js')

test('cornerLeftBottom', () => {
  expect(v(1)).toEqual({
    borderBottomLeftRadius: '1px',
  })
  expect(v([1, 1])).toEqual({
    borderBottomLeftRadius: '1px/1px',
  })
})
