const v = require('./index.js')

test('boxHeight', () => {
  expect(v(0)).toEqual({ height: 0 })
})
