const v = require('./index.js')

test('spaceChar', () => {
  expect(v(0)).toEqual({ letterSpacing: 0 })
})
