const v = require('./index.js')

test('textSpaceWord', () => {
  expect(v(0)).toEqual({ wordSpacing: 0 })
})
