const v = require('./index.js')

test('custom', () => {
  expect(v({ foo: 'bar' })).toEqual({ foo: 'bar' })
})
