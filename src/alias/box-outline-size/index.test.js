const v = require('./index.js')

test('boxOutlineSize', () => {
  expect(v(1)).toEqual({ outlineWidth: 1 })
})
