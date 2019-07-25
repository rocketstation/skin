const v = require('./index.js')

test('skew', () => {
  expect(v(1, 1)).toEqual('skew(1deg,1deg)')
  expect(v('1deg', '1deg')).toEqual('skew(1deg,1deg)')
})
