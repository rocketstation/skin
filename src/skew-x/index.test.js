const v = require('./index.js')

test('skewX', () => {
  expect(v(360)).toEqual('skewX(360deg)')
})
