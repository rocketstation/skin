const v = require('./index.js')

test('scale', () => {
  expect(v(1, 1)).toEqual('scale(1,1)')
})
