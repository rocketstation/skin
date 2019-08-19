const v = require('./index.js')

test('animationOrigin', () => {
  expect(v([true, false, -1, 1, 'invalid'])).toEqual({
    animationFillMode: 'both,none,backwards,forwards',
  })
  expect(v(true)).toEqual({ animationFillMode: 'both' })
  expect(v(false)).toEqual({ animationFillMode: 'none' })
  expect(v(-1)).toEqual({ animationFillMode: 'backwards' })
  expect(v(1)).toEqual({ animationFillMode: 'forwards' })
  expect(v('invalid')).toEqual({})
})
