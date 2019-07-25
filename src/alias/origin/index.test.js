const v = require('./index.js')

test('origin', () => {
  expect(v(0)).toEqual({ flexBasis: 0 })
})
