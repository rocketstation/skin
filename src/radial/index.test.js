const v = require('./index.js')

test('radial', () => {
  expect(v('white', 'black')).toEqual('radial-gradient(white,black)')
  expect(v(['white', 0], ['black', 100])).toEqual(
    'radial-gradient(white 0%,black 100%)'
  )
})
