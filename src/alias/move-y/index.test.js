const v = require('./index.js')

test('moveY', () => {
  expect(v(0)).toEqual({
    bottom: 0,
    top: 0,
  })
})
