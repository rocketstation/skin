const v = require('./index.js')

test('rotateY', () => {
  expect(v(1)).toEqual('rotateY(1deg)')
  expect(v('1deg')).toEqual('rotateY(1deg)')
})
