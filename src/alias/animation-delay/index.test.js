const v = require('./index.js')

test('animationDelay', () => {
  expect(v([100, '100ms'])).toEqual({ animationDelay: '100ms,100ms' })
  expect(v(100)).toEqual({ animationDelay: '100ms' })
  expect(v('100ms')).toEqual({ animationDelay: '100ms' })
})
