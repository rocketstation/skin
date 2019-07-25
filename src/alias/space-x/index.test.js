const v = require('./index.js')

test('spaceX', () => {
  expect(v(0)).toEqual({ gridRowGap: 0 })
})
