const v = require('./index.js')

test('shapeBorderKind', () => {
  expect(v([1, 1])).toEqual({ strokeDasharray: '1 1' })
})
