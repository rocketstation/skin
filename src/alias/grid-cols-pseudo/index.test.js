const v = require('./index.js')

test('gridColsPseudo', () => {
  expect(v('auto')).toEqual({ gridAutoColumns: 'auto' })
  expect(v([1, 'auto', '100%'])).toEqual({ gridAutoColumns: '1fr auto 100%' })
})
