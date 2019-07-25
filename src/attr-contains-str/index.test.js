const v = require('./index.js')

test('attrContainsStr', () => {
  expect(v('foo', 'bar')).toEqual(`[foo*="bar"]`)
})
