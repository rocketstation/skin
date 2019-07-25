const v = require('./index.js')

test('matrix', () => {
  expect(v(1, 2, 3, 4, 5, 6)).toEqual('matrix(1,2,3,4,5,6)')
})
