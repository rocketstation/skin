const v = require('./index.js')

test('shrink', () => {
  expect(v(0)).toEqual({ flexShrink: 0 })
})
