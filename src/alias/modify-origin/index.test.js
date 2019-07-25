const v = require('./index.js')

test('modifyOrigin', () => {
  expect(v(undefined)).toEqual({})
  expect(v('center')).toEqual({ transformOrigin: 'center' })
  expect(v(1)).toEqual({ transformOrigin: '1rem' })
  expect(v(['50%', '50%', 1])).toEqual({ transformOrigin: '50% 50% 1rem' })
})
