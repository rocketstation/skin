const v = require('./index.js')

test('attrStartsWithStr', () => {
  expect(v('foo', 'bar')).toEqual(`[foo^="bar"]`)
})
