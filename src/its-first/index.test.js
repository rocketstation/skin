const v = require('./index.js')

test('itsFirst', () => {
  expect(v()).toEqual(':nth-child(0n+1)')
  expect(v(1, 0)).toEqual(':nth-child(1n+0)')
})
