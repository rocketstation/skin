const v = require('./index.js')

test('content', () => {
  expect(v(true)).toEqual({ content: '""' })
  expect(v('"tst"')).toEqual({ content: '"tst"' })
})
