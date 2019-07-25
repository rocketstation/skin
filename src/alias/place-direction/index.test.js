const v = require('./index.js')

test('placeDirection', () => {
  expect(v(undefined)).toEqual({})
  expect(v('y')).toEqual({ gridAutoFlow: 'column' })
  expect(v(['y', true])).toEqual({ gridAutoFlow: 'column dense' })
  expect(v(['x', true])).toEqual({ gridAutoFlow: 'row dense' })
  expect(v('x')).toEqual({ gridAutoFlow: 'row' })
})
