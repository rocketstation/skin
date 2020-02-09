const v = require('./index.js')

test('attrStarts', () => {
  expect(v('foo', 'bar')).toEqual('[foo|=bar]')
})
