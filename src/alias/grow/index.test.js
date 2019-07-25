const v = require('./index.js')

test('grow', () => {
  expect(v(0)).toEqual({ flexGrow: 0 })
})
