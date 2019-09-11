const v = require('./index.js')

test('borderKind', () => {
  expect(v('dashed')).toEqual({
    borderBottomStyle: 'dashed',
    borderLeftStyle: 'dashed',
    borderRightStyle: 'dashed',
    borderTopStyle: 'dashed',
  })
  expect(v(true)).toEqual({
    borderBottomStyle: 'solid',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderTopStyle: 'solid',
  })
  expect(v(false)).toEqual({
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    borderTopStyle: 'none',
  })
})
