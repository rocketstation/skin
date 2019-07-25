const v = require('./index.js')

test('attrIs', () => {
  expect(v('foo')).toEqual(`[foo]`)
})
