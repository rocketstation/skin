const v = require('./index.js')

test('animationOrigin', () => {
  expect(v([true, false, -1, 1, 'invalid'])).toEqual({
    animationFillingMode: 'both,none,backwards,forwards',
  })
  expect(v(true)).toEqual({ animationFillingMode: 'both' })
  expect(v(false)).toEqual({ animationFillingMode: 'none' })
  expect(v(-1)).toEqual({ animationFillingMode: 'backwards' })
  expect(v(1)).toEqual({ animationFillingMode: 'forwards' })
  expect(v('invalid')).toEqual({})
})
