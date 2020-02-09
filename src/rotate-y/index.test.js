const v = require('./index.js')

test('rotateY', () => {
  expect(v(1)).toEqual('rotateY(1deg)')
})
