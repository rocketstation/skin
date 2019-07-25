const v = require('./index.js')

test('spaceWord', () => {
  expect(v(0)).toEqual({ wordSpacing: 0 })
})
