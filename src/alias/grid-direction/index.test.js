const v = require('./index.js')

test('gridDirection', () => {
  expect(v(undefined)).toEqual({})
  expect(v('y')).toEqual({ gridAutoFlow: 'column' })
  expect(v('y-auto')).toEqual({ gridAutoFlow: 'column dense' })
  expect(v('x-auto')).toEqual({ gridAutoFlow: 'row dense' })
  expect(v('x')).toEqual({ gridAutoFlow: 'row' })
})
