const v = require('./index.js')

test('strokeDashes', () => {
  expect(v([1, 1])).toEqual({ strokeDasharray: '1 1' })
})
