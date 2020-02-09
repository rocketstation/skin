const v = require('./index.js')

test('skew', () => {
  expect(v(360, 360)).toEqual('skew(360deg,360deg)')
})
