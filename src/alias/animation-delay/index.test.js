const v = require('./index.js')

test('animationDelay', () => {
  expect(v([0, '0ms'])).toEqual({ animationDelay: '0ms,0ms' })
  expect(v(0)).toEqual({ animationDelay: '0ms' })
  expect(v('0ms')).toEqual({ animationDelay: '0ms' })
})
