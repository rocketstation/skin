const v = require('./index.js')

test('trackDirection', () => {
  expect(v('x')).toEqual({ flexDirection: 'row' })
  expect(v(['x', true])).toEqual({ flexDirection: 'row-reverse' })
  expect(v(['x', false])).toEqual({ flexDirection: 'row' })
  expect(v('y')).toEqual({ flexDirection: 'column' })
  expect(v(['y', true])).toEqual({ flexDirection: 'column-reverse' })
  expect(v(['y', false])).toEqual({ flexDirection: 'column' })
})
