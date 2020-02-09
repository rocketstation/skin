const v = require('../index.js')

test('custom', () => {
  expect(v.custom({ foo: 'bar' })).toEqual({ foo: 'bar' })
})
