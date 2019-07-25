const v = require('./index.js')

test('animationDuration', () => {
  expect(v([250, '750ms'])).toEqual({ animationDuration: '250ms,750ms' })
  expect(v(250)).toEqual({ animationDuration: '250ms' })
  expect(v('750ms')).toEqual({ animationDuration: '750ms' })
})
