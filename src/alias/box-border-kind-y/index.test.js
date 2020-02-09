const v = require('./index.js')

test('boxBorderKindY', () => {
  expect(v('dashed')).toEqual({
    borderBottomStyle: 'dashed',
    borderTopStyle: 'dashed',
  })
  expect(v(true)).toEqual({
    borderBottomStyle: 'solid',
    borderTopStyle: 'solid',
  })
  expect(v(false)).toEqual({
    borderBottomStyle: 'none',
    borderTopStyle: 'none',
  })
})
