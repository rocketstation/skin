const v = require('./index.js')

test('transitionDuration', () => {
  expect(v([250, '750ms'])).toEqual({ transitionDuration: '250ms,750ms' })
  expect(v(250)).toEqual({ transitionDuration: '250ms' })
  expect(v('750ms')).toEqual({ transitionDuration: '750ms' })
})
