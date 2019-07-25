const v = require('./index.js')

test('borderSizeLeft', () => {
  expect(v(0)).toEqual({
    borderLeftWidth: 0,
  })
})
