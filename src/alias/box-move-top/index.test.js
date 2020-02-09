const v = require('./index.js')

test('boxMoveTop', () => {
  expect(v(0)).toEqual({ top: 0 })
})
