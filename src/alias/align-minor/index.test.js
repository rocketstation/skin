const v = require('./index.js')

test('alignMinor', () => {
  expect(v(undefined)).toEqual({})
  expect(v('start')).toEqual({ alignItems: 'start' })
  expect(v('end')).toEqual({ alignItems: 'end' })
  expect(v('center')).toEqual({ alignItems: 'center' })
  expect(v('stretch')).toEqual({ alignItems: 'stretch' })
})
