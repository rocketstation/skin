const v = require('./index.js')

test('boxOpacity', () => {
  expect(v(100)).toEqual({ opacity: 1 })
})
