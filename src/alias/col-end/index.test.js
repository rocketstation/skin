const v = require('./index.js')

test('colEnd', () => {
  expect(v(1)).toEqual({ gridColumnEnd: 1 })
  expect(v([1, true])).toEqual({ gridColumnEnd: 'span 1' })
})
