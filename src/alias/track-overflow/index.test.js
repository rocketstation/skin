const v = require('./index.js')

test('trackOverflow', () => {
  expect(v(-1)).toEqual({ flexWrap: 'wrap-reverse' })
  expect(v(false)).toEqual({ flexWrap: 'nowrap' })
  expect(v(1)).toEqual({ flexWrap: 'wrap' })
  expect(v(null)).toEqual({ flexWrap: null })
})
