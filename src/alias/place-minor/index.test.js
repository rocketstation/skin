const v = require('./index.js')

test('placeMinor', () => {
  expect(v(undefined)).toEqual({})
  expect(v('start')).toEqual({ alignContent: 'start' })
  expect(v('end')).toEqual({ alignContent: 'end' })
  expect(v('center')).toEqual({ alignContent: 'center' })
  expect(v('space-between')).toEqual({ alignContent: 'space-between' })
  expect(v('space-around')).toEqual({ alignContent: 'space-around' })
  expect(v(['space-around', true])).toEqual({ alignContent: 'space-evenly' })
})
