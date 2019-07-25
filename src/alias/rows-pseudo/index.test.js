const v = require('./index.js')

test('rowsPseudo', () => {
  expect(v('auto')).toEqual({ gridAutoRows: 'auto' })
  expect(v([1, 'auto', '100%'])).toEqual({ gridAutoRows: '1fr auto 100%' })
})
