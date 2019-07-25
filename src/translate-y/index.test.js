const v = require('./index.js')

test('translateY', () => {
  expect(v(1)).toEqual('translateY(1rem)')
  expect(v('1rem')).toEqual('translateY(1rem)')
})
