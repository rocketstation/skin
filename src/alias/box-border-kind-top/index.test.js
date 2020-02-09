const v = require('./index.js')

test('boxBorderKindTop', () => {
  expect(v('dashed')).toEqual({
    borderTopStyle: 'dashed',
  })
  expect(v(true)).toEqual({
    borderTopStyle: 'solid',
  })
  expect(v(false)).toEqual({
    borderTopStyle: 'none',
  })
})
