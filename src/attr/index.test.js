const v = require('./index.js')

test('attr', () => {
  expect(v('foo')).toEqual('[foo]')
})
