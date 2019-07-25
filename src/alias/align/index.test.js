const v = require('./index.js')

test('align', () => {
  expect(v(undefined)).toEqual({})
  expect(v('left')).toEqual({ textAlign: 'left' })
  expect(v('right')).toEqual({ textAlign: 'right' })
  expect(v('center')).toEqual({ textAlign: 'center' })
  expect(v('stretch')).toEqual({ textAlign: 'justify' })
})
