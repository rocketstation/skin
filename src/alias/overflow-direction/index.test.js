const v = require('./index.js')

test('overflowDirection', () => {
  expect(v(undefined)).toEqual({})
  expect(v(-1)).toEqual({ flexWrap: 'wrap-reverse' })
  expect(v(false)).toEqual({ flexWrap: 'nowrap' })
  expect(v(1)).toEqual({ flexWrap: 'wrap' })
})
