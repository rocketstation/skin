const v = require('./index.js')

test('gridSpaceX', () => {
  expect(v(0)).toEqual({ gridRowGap: 0 })
})
