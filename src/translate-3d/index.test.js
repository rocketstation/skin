const v = require('./index.js')

test('translate3d', () => {
  expect(v(1, 1, 1)).toEqual('translate3d(1rem,1rem,1rem)')
  expect(v('1rem', '1rem', '1rem')).toEqual('translate3d(1rem,1rem,1rem)')
})
