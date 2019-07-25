const v = require('./index.js')

test('animationDirection', () => {
  expect(v([1, -1, 2, -2, 'invalid'])).toEqual({
    animationDirection: 'normal,reverse,alternate,alternate-reverse',
  })
  expect(v(1)).toEqual({ animationDirection: 'normal' })
  expect(v(-1)).toEqual({ animationDirection: 'reverse' })
  expect(v(2)).toEqual({ animationDirection: 'alternate' })
  expect(v(-2)).toEqual({ animationDirection: 'alternate-reverse' })
  expect(v('invalid')).toEqual({})
})
