const v = require('./index.js')

test('borderSize', () => {
  expect(v(0)).toEqual({
    borderBottomWidth: 0,
  })
})
