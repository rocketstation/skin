const v = require('./index.js')

test('boxBorder', () => {
  expect(v(false)).toEqual({
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
  })
  expect(v('hsla(0,0%,0%,1)')).toEqual({
    borderBottomColor: 'hsla(0,0%,0%,1)',
    borderLeftColor: 'hsla(0,0%,0%,1)',
    borderRightColor: 'hsla(0,0%,0%,1)',
    borderTopColor: 'hsla(0,0%,0%,1)',
  })
})
