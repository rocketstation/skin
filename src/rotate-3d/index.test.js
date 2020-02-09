const v = require('./index.js')

test('rotate3d', () => {
  expect(v(1, 1, 1, 1)).toEqual('rotate3d(1,1,1,1deg)')
})
