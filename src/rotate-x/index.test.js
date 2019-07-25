const v = require('./index.js')

test('rotateX', () => {
  expect(v(1)).toEqual('rotateX(1deg)')
  expect(v('1deg')).toEqual('rotateX(1deg)')
})
