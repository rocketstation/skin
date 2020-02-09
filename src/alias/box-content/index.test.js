const v = require('./index.js')

test('boxContent', () => {
  expect(v(true)).toEqual({ content: '""' })
  expect(v('"tst"')).toEqual({ content: '"tst"' })
})
