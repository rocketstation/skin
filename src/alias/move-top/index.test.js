const v = require('./index.js')

test('moveTop', () => {
  expect(v(0)).toEqual({ top: 0 })
})
