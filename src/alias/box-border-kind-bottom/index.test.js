const v = require('./index.js')

test('boxBorderKindBottom', () => {
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
