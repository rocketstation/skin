const v = require('./index.js')

test('attrContains', () => {
  expect(v('foo', 'bar')).toEqual(`[foo~=bar]`)
})
