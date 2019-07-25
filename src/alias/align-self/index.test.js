const v = require('./index.js')

test('alignSelf', () => {
  expect(v(undefined)).toEqual({})
  expect(v('start')).toEqual({ alignSelf: 'flex-start' })
  expect(v('end')).toEqual({ alignSelf: 'flex-end' })
  expect(v('center')).toEqual({ alignSelf: 'center' })
  expect(v('stretch')).toEqual({ alignSelf: 'stretch' })
})
