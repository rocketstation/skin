const v = require('./index.js')

test('textIsItalic', () => {
  expect(v(true)).toEqual({ fontStyle: 'italic' })
  expect(v(false)).toEqual({ fontStyle: 'normal' })
})
