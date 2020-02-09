const v = require('./index.js')

test('animationDirection', () => {
  expect(
    v(['backwards-forwards', 'backwards', 'forwards', 'forwards-backwards'])
  ).toEqual({
    animationDirection: 'alternate-reverse,reverse,normal,alternate',
  })
  expect(v('backwards-forwards')).toEqual({
    animationDirection: 'alternate-reverse',
  })
  expect(v('backwards')).toEqual({ animationDirection: 'reverse' })
  expect(v('forwards')).toEqual({ animationDirection: 'normal' })
  expect(v('forwards-backwards')).toEqual({
    animationDirection: 'alternate',
  })
  expect(v(null)).toEqual({ animationDirection: null })
})
