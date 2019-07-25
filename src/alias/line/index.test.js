const v = require('./index.js')

test('line', () => {
  expect(v(1)).toEqual({ lineHeight: 1 })
})
