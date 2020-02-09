const v = require('./index.js')

test('skewY', () => {
  expect(v(360)).toEqual('skewY(360deg)')
})
