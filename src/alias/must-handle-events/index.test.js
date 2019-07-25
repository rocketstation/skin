const v = require('./index.js')

test('mustHandleEvents', () => {
  expect(v(true)).toEqual({ pointerEvents: 'auto' })
  expect(v(false)).toEqual({ pointerEvents: 'none' })
})
