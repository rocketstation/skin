const v = require('./index.js')

test('placeContent', () => {
  expect(v(undefined)).toEqual({})
  expect(v('start')).toEqual({ justifyContent: 'flex-start' })
  expect(v('end')).toEqual({ justifyContent: 'flex-end' })
  expect(v('center')).toEqual({ justifyContent: 'center' })
  expect(v('space-between')).toEqual({ justifyContent: 'space-between' })
  expect(v('space-around')).toEqual({ justifyContent: 'space-around' })
  expect(v(['space-around', true])).toEqual({ justifyContent: 'space-evenly' })
})
