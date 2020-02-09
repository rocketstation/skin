const v = require('./index.js')

test('trackGrow', () => {
  expect(v(0)).toEqual({ flexGrow: 0 })
})
