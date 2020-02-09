const v = require('./index.js')

test('attrStartsStr', () => {
  expect(v('foo', 'bar')).toEqual('[foo^="bar"]')
})
