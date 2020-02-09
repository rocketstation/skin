const v = require('./index.js')

test('boxBorderLeft', () => {
  expect(v(false)).toEqual({
    borderLeftColor: 'transparent',
  })
  expect(v('hsla(0,0%,0%,1)')).toEqual({
    borderLeftColor: 'hsla(0,0%,0%,1)',
  })
})
