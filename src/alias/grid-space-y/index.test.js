const v = require('./index.js')

test('gridSpaceY', () => {
  expect(v(0)).toEqual({ gridColumnGap: 0 })
})
