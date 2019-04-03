const fn = require('./parser')

const skin = { foo: 'bar' }

test('parses rules & skin', () => {
  expect(fn(skin)).toEqual(skin)
  expect(fn({ skin })).toEqual(skin)
})
