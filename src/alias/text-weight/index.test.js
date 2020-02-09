const v = require('./index.js')

test('textWeight', () => {
  expect(v(400)).toEqual({ fontWeight: 400 })
})
