const v = require('./index.js')

test('itsHighlight', () => {
  expect(v).toEqual('::selection')
})
