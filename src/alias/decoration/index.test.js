const v = require('./index.js')

test('decoration', () => {
  expect(v(undefined)).toEqual({})
  expect(v('top')).toEqual({ textDecoration: 'overline' })
  expect(v('center')).toEqual({ textDecoration: 'line-through' })
  expect(v('bottom')).toEqual({ textDecoration: 'underline' })
  expect(v(false)).toEqual({ textDecoration: 'none' })
})
