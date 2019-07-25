const v = require('./index.js')

test('rotate', () => {
  expect(v(1)).toEqual('rotate(1deg)')
  expect(v('1deg')).toEqual('rotate(1deg)')
})
