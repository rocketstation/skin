const v = require('./index.js')

test('boxBorderColorX', () => {
  expect(v(false)).toEqual({
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  })
  expect(v('hsla(0,0%,0%,1)')).toEqual({
    borderLeftColor: 'hsla(0,0%,0%,1)',
    borderRightColor: 'hsla(0,0%,0%,1)',
  })
})
