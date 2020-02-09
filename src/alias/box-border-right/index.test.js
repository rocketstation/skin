const v = require('./index.js')

test('boxBorderRight', () => {
  expect(v(false)).toEqual({
    borderRightColor: 'transparent',
  })
  expect(v('hsla(0,0%,0%,1)')).toEqual({
    borderRightColor: 'hsla(0,0%,0%,1)',
  })
})
