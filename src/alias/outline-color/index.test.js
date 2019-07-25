const v = require('./index.js')

test('outlineColor', () => {
  expect(v(false)).toEqual({ outlineColor: 'transparent' })
  expect(v('hsla(0,0%,0%,0)')).toEqual({ outlineColor: 'hsla(0,0%,0%,0)' })
})
