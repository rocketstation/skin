const v = require('./index.js')

test('moveRight', () => {
  expect(v(0)).toEqual({ right: 0 })
})
