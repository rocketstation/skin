const v = require('./index.js')

test('outlineSize', () => {
  expect(v(1)).toEqual({ outlineWidth: 1 })
})
