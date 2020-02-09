const v = require('./index.js')

test('boxMoveY', () => {
  expect(v(0)).toEqual({ bottom: 0, top: 0 })
})
