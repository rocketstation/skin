const v = require('./index.js')

test('overflowY', () => {
  expect(v(undefined)).toEqual({})
  expect(v(false)).toEqual({ overflowY: 'hidden' })
  expect(v(true)).toEqual({ overflowY: 'visible' })
  expect(v('auto')).toEqual({ overflowY: 'auto' })
})
