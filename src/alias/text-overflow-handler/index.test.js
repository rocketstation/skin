const v = require('./index.js')

test('textOverflowHandler', () => {
  expect(v(true)).toEqual({ textOverflow: 'ellipsis' })
  expect(v(false)).toEqual({ textOverflow: 'clip' })
})
