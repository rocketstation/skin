const v = require('./index.js')

test('boxMoveRight', () => {
  expect(v(0)).toEqual({ right: 0 })
})
