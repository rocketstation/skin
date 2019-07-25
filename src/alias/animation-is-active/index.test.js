const v = require('./index.js')

test('animationIsActive', () => {
  expect(v([true, false])).toEqual({ animationPlayState: 'running,paused' })
  expect(v(true)).toEqual({ animationPlayState: 'running' })
  expect(v(false)).toEqual({ animationPlayState: 'paused' })
})
