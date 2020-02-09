const v = require('./index.js')

test('boxOutline', () => {
  expect(v(false)).toEqual({ outlineColor: 'transparent' })
  expect(v('hsla(0,0%,0%,0)')).toEqual({ outlineColor: 'hsla(0,0%,0%,0)' })
})
