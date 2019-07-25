const v = require('./index.js')

test('attrEndsWithStr', () => {
  expect(v('foo', 'bar')).toEqual(`[foo$="bar"]`)
})
