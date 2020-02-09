const v = require('./index.js')

test('textSize', () => {
  expect(v(1)).toEqual({ fontSize: 1 })
})
