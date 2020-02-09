const v = require('./index.js')

test('attrEquals', () => {
  expect(v('foo', 'bar')).toEqual('[foo=bar]')
})
