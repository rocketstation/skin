const v = require('./index.js')

test('transitionDelay', () => {
  expect(v([0, '0ms'])).toEqual({ transitionDelay: '0ms,0ms' })
  expect(v(0)).toEqual({ transitionDelay: '0ms' })
  expect(v('0ms')).toEqual({ transitionDelay: '0ms' })
})
