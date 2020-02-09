const v = require('./index.js')

test('gridRows', () => {
  expect(v(false)).toEqual({ gridTemplateRows: 'none' })
  expect(v([1, 'auto', '100%'])).toEqual({ gridTemplateRows: '1fr auto 100%' })
})
