const v = require('./index.js')

test('scale3d', () => {
  expect(v(1, 1, 1)).toEqual('scale3d(1,1,1)')
})
