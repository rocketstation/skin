const v = require('./index.js')

test('transitionFn', () => {
  expect(v('ease')).toEqual({ transitionTimingFunction: 'ease' })
})
