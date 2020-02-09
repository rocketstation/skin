const v = require('./index.js')

test('rotate', () => {
  expect(v(1)).toEqual('rotate(1deg)')
})
