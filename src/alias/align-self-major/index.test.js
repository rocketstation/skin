const v = require('./index.js')

test('alignSelfMajor', () => {
  expect(v(undefined)).toEqual({})
  expect(v('start')).toEqual({ justifySelf: 'start' })
  expect(v('end')).toEqual({ justifySelf: 'end' })
  expect(v('center')).toEqual({ justifySelf: 'center' })
  expect(v('stretch')).toEqual({ justifySelf: 'stretch' })
})
