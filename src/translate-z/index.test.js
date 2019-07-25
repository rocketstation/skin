const v = require('./index.js')

test('translateZ', () => {
  expect(v(1)).toEqual('translateZ(1rem)')
  expect(v('1rem')).toEqual('translateZ(1rem)')
})
