const v = require('./index.js')

test('bgRepeat', () => {
  expect(v([false, true, 'y', 'x', 'invalid'])).toEqual({
    backgroundRepeat: 'no-repeat,repeat,repeat-y,repeat-x',
  })
  expect(v(false)).toEqual({ backgroundRepeat: 'no-repeat' })
  expect(v(true)).toEqual({ backgroundRepeat: 'repeat' })
  expect(v('y')).toEqual({ backgroundRepeat: 'repeat-y' })
  expect(v('x')).toEqual({ backgroundRepeat: 'repeat-x' })
  expect(v('invalid')).toEqual({})
})
