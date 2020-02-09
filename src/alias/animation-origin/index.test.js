const v = require('./index.js')

test('animationOrigin', () => {
  expect(v([true, false, 'backwards', 'forwards'])).toEqual({
    animationFillMode: 'both,none,backwards,forwards',
  })
  expect(v(true)).toEqual({ animationFillMode: 'both' })
  expect(v(false)).toEqual({ animationFillMode: 'none' })
  expect(v('backwards')).toEqual({ animationFillMode: 'backwards' })
  expect(v('forwards')).toEqual({ animationFillMode: 'forwards' })
})
