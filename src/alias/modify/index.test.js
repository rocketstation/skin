const v = require('./index.js')

test('modify', () => {
  expect(v(false)).toEqual({ transform: 'none' })
  expect(v(['rotate(360deg)', 'rotate(360deg)', 'rotate(360deg)'])).toEqual({
    transform: 'rotate(360deg) rotate(360deg) rotate(360deg)',
  })
  expect(v('rotate(360deg)')).toEqual({ transform: 'rotate(360deg)' })
})
