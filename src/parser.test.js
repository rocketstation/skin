const fn = require('./parser')

const rules = { foo: 'bar' }

test('parses rules & skin', () => {
  expect(fn(rules)).toEqual(rules)
  expect(fn({ rules })).toEqual(rules)
})
