const v = require('./index.js')

test('repeat', () => {
  expect(v('fill', '1rem')).toEqual('repeat(auto-fill,1rem)')
  expect(v('fit', '1rem')).toEqual('repeat(auto-fit,1rem)')
  expect(v(3)).toEqual('repeat(3,1fr)')
  expect(v(3, 1)).toEqual('repeat(3,1fr)')
  expect(v(3, 'auto')).toEqual('repeat(3,auto)')
})
