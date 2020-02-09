const v = require('./index.js')

test('rotateZ', () => {
  expect(v(1)).toEqual('rotateZ(1deg)')
})
