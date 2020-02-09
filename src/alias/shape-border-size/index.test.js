const v = require('./index.js')

test('shapeBorderSize', () => {
  expect(v(1)).toEqual({ strokeWidth: 1 })
})
