const v = require('./index.js')

test('borderColorTop', () => {
  expect(v(false)).toEqual({
    borderTopColor: 'transparent',
  })
  expect(v('hsla(0,0%,0%,1)')).toEqual({
    borderTopColor: 'hsla(0,0%,0%,1)',
  })
})
