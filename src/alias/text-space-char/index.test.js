const v = require('./index.js')

test('textSpaceChar', () => {
  expect(v(0)).toEqual({ letterSpacing: 0 })
})
