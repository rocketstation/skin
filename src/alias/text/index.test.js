const v = require('./index.js')

test('text', () => {
  expect(v(false)).toEqual({ color: 'transparent' })
  expect(v('hsla(0,0%,0%,1)')).toEqual({ color: 'hsla(0,0%,0%,1)' })
})
