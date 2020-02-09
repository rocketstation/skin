const v = require('./index.js')

test('boxBorderColorY', () => {
  expect(v(false)).toEqual({
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  })
  expect(v('hsla(0,0%,0%,1)')).toEqual({
    borderBottomColor: 'hsla(0,0%,0%,1)',
    borderTopColor: 'hsla(0,0%,0%,1)',
  })
})
