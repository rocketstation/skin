const v = require('./index.js')

test('strokeSpace', () => {
  expect(v(1)).toEqual({ strokeDashoffset: 1 })
})
