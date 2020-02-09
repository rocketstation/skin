const v = require('./index.js')

test('gridPlaceMinor', () => {
  expect(v('start')).toEqual({ alignContent: 'start' })
  expect(v('end')).toEqual({ alignContent: 'end' })
  expect(v('center')).toEqual({ alignContent: 'center' })
  expect(v('space')).toEqual({ alignContent: 'space-evenly' })
  expect(v('space-inner')).toEqual({ alignContent: 'space-between' })
  expect(v('space-outer')).toEqual({ alignContent: 'space-around' })
})
