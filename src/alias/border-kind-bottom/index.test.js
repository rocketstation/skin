const v = require('./index.js')

test('borderKindBottom', () => {
  expect(v('dashed')).toEqual({
    borderBottomStyle: 'dashed',
  })
  expect(v(true)).toEqual({
    borderBottomStyle: 'solid',
  })
  expect(v(false)).toEqual({
    borderBottomStyle: 'none',
  })
})
