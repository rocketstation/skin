const v = require('./index.js')

test('moveX', () => {
  expect(v(0)).toEqual({
    left: 0,
    right: 0,
  })
})
