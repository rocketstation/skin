const v = require('./index.js')

test('boxOutlineSpace', () => {
  expect(v(1)).toEqual({ outlineOffset: 1 })
})
