const v = require('./index.js')

test('translateX', () => {
  expect(v(1)).toEqual('translateX(1rem)')
  expect(v('1rem')).toEqual('translateX(1rem)')
})
