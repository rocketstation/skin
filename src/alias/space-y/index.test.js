const v = require('./index.js')

test('spaceY', () => {
  expect(v(0)).toEqual({ gridColumnGap: 0 })
})
