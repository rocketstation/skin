const v = require('./index.js')

test('boxMoveLeft', () => {
  expect(v(0)).toEqual({ left: 0 })
})
