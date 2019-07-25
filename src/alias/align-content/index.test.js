const v = require('./index.js')

test('alignContent', () => {
  expect(v(undefined)).toEqual({})
  expect(v('start')).toEqual({ alignItems: 'flex-start' })
  expect(v('end')).toEqual({ alignItems: 'flex-end' })
  expect(v('center')).toEqual({ alignItems: 'center' })
  expect(v('stretch')).toEqual({ alignItems: 'stretch' })
})
