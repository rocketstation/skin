const v = require('./index.js')

test('trackShrink', () => {
  expect(v(0)).toEqual({ flexShrink: 0 })
})
