const v = require('./index.js')

test('weight', () => {
  expect(v(400)).toEqual({ fontWeight: 400 })
})
