const v = require('./index.js')

test('rotateX', () => {
  expect(v(1)).toEqual('rotateX(1deg)')
})
