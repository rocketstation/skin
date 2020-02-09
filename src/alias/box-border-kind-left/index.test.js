const v = require('./index.js')

test('boxBorderKindLeft', () => {
  expect(v('dashed')).toEqual({
    borderLeftStyle: 'dashed',
  })
  expect(v(true)).toEqual({
    borderLeftStyle: 'solid',
  })
  expect(v(false)).toEqual({
    borderLeftStyle: 'none',
  })
})
