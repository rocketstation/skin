const v = require('./index.js')

test('linear', () => {
  expect(v(360, 'white', 'black')).toEqual(
    'linear-gradient(360deg,white,black)'
  )
  expect(v(360, ['white', 0], ['black', 100])).toEqual(
    'linear-gradient(360deg,white 0%,black 100%)'
  )
})
