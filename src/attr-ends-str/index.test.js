const v = require('./index.js')

test('attrEndsStr', () => {
  expect(v('foo', 'bar')).toEqual('[foo$="bar"]')
})
