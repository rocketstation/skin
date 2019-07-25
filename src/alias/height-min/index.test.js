const v = require('./index.js')

test('heightMin', () => {
  expect(v(0)).toEqual({ minHeight: 0 })
})
