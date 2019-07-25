const v = require('./index.js')

test('translate', () => {
  expect(v(1, 1)).toEqual('translate(1rem,1rem)')
  expect(v('1rem', '1rem')).toEqual('translate(1rem,1rem)')
})
