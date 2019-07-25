const v = require('./index.js')

test('fill', () => {
  expect(v(false)).toEqual({ fill: 'transparent' })
  expect(v('hsla(0,0%,0%,1)')).toEqual({ fill: 'hsla(0,0%,0%,1)' })
})
