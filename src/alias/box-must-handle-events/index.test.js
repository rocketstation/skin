const v = require('./index.js')

test('boxMustHandleEvents', () => {
  expect(v(true)).toEqual({ pointerEvents: 'auto' })
  expect(v(false)).toEqual({ pointerEvents: 'none' })
})
