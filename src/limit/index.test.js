const v = require('./index.js')

test('limit', () => {
  expect(v()).toEqual('minmax(auto,auto)')
  expect(v(1, 1)).toEqual('minmax(1rem,1rem)')
  expect(v('1fr', '1fr')).toEqual('minmax(1fr,1fr)')
})
