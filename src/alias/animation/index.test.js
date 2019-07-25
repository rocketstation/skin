const v = require('./index.js')

test('animation', () => {
  expect(v({})).toEqual({ animationName: {} })
  expect(v('tst')).toEqual({ animationName: 'tst' })
})
