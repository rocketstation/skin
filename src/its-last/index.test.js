const v = require('./index.js')

test('itsLast', () => {
  expect(v()).toEqual(':nth-last-child(0n+1)')
  expect(v(1, 0)).toEqual(':nth-last-child(1n+0)')
})
