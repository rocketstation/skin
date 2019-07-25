const v = require('./index.js')

test('cols', () => {
  expect(v(false)).toEqual({ gridTemplateColumns: 'none' })
  expect(v([1, 'auto', '100%'])).toEqual({
    gridTemplateColumns: '1fr auto 100%',
  })
})
