const v = require('./index.js')

test('./perspective', () => {
  expect(v(1)).toEqual('perspective(1rem)')
  expect(v('1rem')).toEqual('perspective(1rem)')
})
