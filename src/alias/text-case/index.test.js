const v = require('./index.js')

test('textCase', () => {
  expect(v('lower')).toEqual({ textTransform: 'lowercase' })
  expect(v('upper')).toEqual({ textTransform: 'uppercase' })
  expect(v(false)).toEqual({ textTransform: 'none' })
  expect(v('none')).toEqual({ textTransform: 'none' })
})
