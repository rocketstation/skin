const v = require('./index.js')

test('animation', () => {
  expect(v(['foo', 'bar'])).toEqual({ animationName: 'foo,bar' })
  expect(v('foobar')).toEqual({ animationName: 'foobar' })
})
