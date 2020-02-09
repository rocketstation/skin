const v = require('./index.js')

test('boxBorderBottom', () => {
  expect(v(false)).toEqual({
    borderBottomColor: 'transparent',
  })
  expect(v('hsla(0,0%,0%,1)')).toEqual({
    borderBottomColor: 'hsla(0,0%,0%,1)',
  })
})
