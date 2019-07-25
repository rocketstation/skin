const v = require('./index.js')

test('hasSuffix', () => {
  expect(v(true)).toEqual({ textOverflow: 'ellipsis' })
  expect(v(false)).toEqual({ textOverflow: 'clip' })
})
