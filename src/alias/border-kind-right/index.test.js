const v = require('./index.js')

test('borderKindRight', () => {
  expect(v('dashed')).toEqual({
    borderRightStyle: 'dashed',
  })
  expect(v(true)).toEqual({
    borderRightStyle: 'solid',
  })
  expect(v(false)).toEqual({
    borderRightStyle: 'none',
  })
})
