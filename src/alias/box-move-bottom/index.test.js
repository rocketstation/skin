const v = require('./index.js')

test('boxMoveBottom', () => {
  expect(v(0)).toEqual({ bottom: 0 })
})
