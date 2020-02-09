const v = require('./index.js')

test('gridPlaceMajor', () => {
  expect(v('start')).toEqual({ justifyContent: 'start' })
  expect(v('end')).toEqual({ justifyContent: 'end' })
  expect(v('center')).toEqual({ justifyContent: 'center' })
  expect(v('space')).toEqual({ justifyContent: 'space-evenly' })
  expect(v('space-inner')).toEqual({ justifyContent: 'space-between' })
  expect(v('space-outer')).toEqual({ justifyContent: 'space-around' })
})
