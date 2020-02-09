const v = require('./index.js')

test('shapeBorderSpace', () => {
  expect(v(1)).toEqual({ strokeDashoffset: 1 })
})
