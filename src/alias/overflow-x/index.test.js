const v = require('./index.js')

test('overflowX', () => {
  expect(v(undefined)).toEqual({})
  expect(v(false)).toEqual({ overflowX: 'hidden' })
  expect(v(true)).toEqual({ overflowX: 'visible' })
  expect(v('auto')).toEqual({ overflowX: 'auto' })
})
