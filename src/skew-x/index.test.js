const v = require('./index.js')

test('skewX', () => {
  expect(v(1)).toEqual('skewX(1deg)')
  expect(v('1deg')).toEqual('skewX(1deg)')
})
