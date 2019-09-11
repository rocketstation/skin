const v = require('./index.js')

test('spaceOuterY', () => {
  expect(v(0)).toEqual({
    marginBottom: 0,
    marginTop: 0,
  })
})
