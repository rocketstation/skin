const v = require('./index.js')

test('boxMoveX', () => {
  expect(v(0)).toEqual({ left: 0, right: 0 })
})
