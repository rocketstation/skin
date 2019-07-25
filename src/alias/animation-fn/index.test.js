const v = require('./index.js')

test('animationFn', () => {
  expect(v('ease')).toEqual({ animationTimingFunction: 'ease' })
})
