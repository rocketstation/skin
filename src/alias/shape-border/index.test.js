const v = require('./index.js')

test('shapeBorder', () => {
  expect(v(false)).toEqual({ stroke: 'transparent' })
  expect(v('black')).toEqual({ stroke: 'black' })
})
