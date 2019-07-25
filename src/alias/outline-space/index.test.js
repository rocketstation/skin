const v = require('./index.js')

test('outlineSpace', () => {
  expect(v(1)).toEqual({ outlineOffset: 1 })
})
