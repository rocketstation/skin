const v = require('./index.js')

test('boxOutlineKind', () => {
  expect(v(false)).toEqual({ outlineStyle: 'none' })
  expect(v(true)).toEqual({ outlineStyle: 'solid' })
  expect(v('solid')).toEqual({ outlineStyle: 'solid' })
})
