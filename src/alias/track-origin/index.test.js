const v = require('./index.js')

test('trackOrigin', () => {
  expect(v(0)).toEqual({ flexBasis: 0 })
})
