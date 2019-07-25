const v = require('./index.js')

test('skewY', () => {
  expect(v(1)).toEqual('skewY(1deg)')
  expect(v('1deg')).toEqual('skewY(1deg)')
})
