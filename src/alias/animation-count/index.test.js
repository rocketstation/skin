const v = require('./index.js')

test('animationCount', () => {
  expect(v(true)).toEqual({ animationIterationCount: 'infinite' })
  expect(v(1)).toEqual({ animationIterationCount: '1' })
  expect(v([1, 1])).toEqual({ animationIterationCount: '1,1' })
})
