const v = require('./index.js')

test('boxHeightMin', () => {
  expect(v(0)).toEqual({ minHeight: 0 })
})
