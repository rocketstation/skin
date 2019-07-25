const v = require('./index.js')

test('borderColorLeft', () => {
  expect(v(false)).toEqual({
    borderLeftColor: 'transparent',
  })
  expect(v('hsla(0,0%,0%,1)')).toEqual({
    borderLeftColor: 'hsla(0,0%,0%,1)',
  })
})
