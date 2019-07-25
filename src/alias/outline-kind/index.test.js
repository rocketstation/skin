const v = require('./index.js')

test('outlineKind', () => {
  expect(v(false)).toEqual({ outlineStyle: 'none' })
  expect(v(true)).toEqual({ outlineStyle: 'solid' })
  expect(v('solid')).toEqual({ outlineStyle: 'solid' })
})
