const v = require('./index.js')

test('textOverflow', () => {
  expect(v(false)).toEqual({ whiteSpace: 'nowrap' })
  expect(v(true)).toEqual({ whiteSpace: 'normal' })
  expect(v('raw')).toEqual({ whiteSpace: 'pre' })
  expect(v('raw-fit')).toEqual({ whiteSpace: 'pre-wrap' })
  expect(v('raw-fit-strict')).toEqual({ whiteSpace: 'pre-line' })
  expect(v(null)).toEqual({ whiteSpace: null })
})
