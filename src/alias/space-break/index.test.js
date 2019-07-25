const v = require('./index.js')

test('spaceBreak', () => {
  expect(v(undefined)).toEqual({})
  expect(v(true)).toEqual({ whiteSpace: 'normal' })
  expect(v(false)).toEqual({ whiteSpace: 'nowrap' })
  expect(v('raw')).toEqual({ whiteSpace: 'pre' })
  expect(v(['raw', true])).toEqual({ whiteSpace: 'pre-wrap' })
  expect(v(['raw', false])).toEqual({ whiteSpace: 'pre-line' })
  expect(v('invalid')).toEqual({})
})
