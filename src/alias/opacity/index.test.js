const v = require('./index.js')

test('opacity', () => {
  expect(v(100)).toEqual({ opacity: 1 })
})
