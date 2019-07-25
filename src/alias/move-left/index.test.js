const v = require('./index.js')

test('moveLeft', () => {
  expect(v(0)).toEqual({ left: 0 })
})
