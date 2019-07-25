const v = require('./index.js')

test('case', () => {
  expect(v(undefined)).toEqual({})
  expect(v('lower')).toEqual({ textTransform: 'lowercase' })
  expect(v('upper')).toEqual({ textTransform: 'uppercase' })
  expect(v(false)).toEqual({ textTransform: 'none' })
})
