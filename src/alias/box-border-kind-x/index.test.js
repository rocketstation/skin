const v = require('./index.js')

test('boxBorderKindX', () => {
  expect(v('dashed')).toEqual({
    borderLeftStyle: 'dashed',
    borderRightStyle: 'dashed',
  })
  expect(v(true)).toEqual({
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
  })
  expect(v(false)).toEqual({
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
  })
})
