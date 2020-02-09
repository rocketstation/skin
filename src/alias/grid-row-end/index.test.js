const v = require('./index.js')

test('gridRowEnd', () => {
  expect(v(1)).toEqual({ gridRowEnd: 1 })
  expect(v([1, true])).toEqual({ gridRowEnd: 'span 1' })
})
