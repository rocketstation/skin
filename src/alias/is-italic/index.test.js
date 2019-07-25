const v = require('./index.js')

test('isItalic', () => {
  expect(v(true)).toEqual({ fontStyle: 'italic' })
  expect(v(false)).toEqual({ fontStyle: 'normal' })
})
