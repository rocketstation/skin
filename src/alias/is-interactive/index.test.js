const v = require('./index.js')

test('isInteractive', () => {
  expect(v(undefined)).toEqual({})
  expect(v(true)).toEqual({ cursor: 'pointer' })
  expect(v(false)).toEqual({ cursor: 'auto' })
})
