const v = require('./index.js')

test('box', () => {
  expect(v(false)).toEqual({ backgroundColor: 'transparent' })
  expect(v('hsla(0,0%,0%,1)')).toEqual({ backgroundColor: 'hsla(0,0%,0%,1)' })
})
