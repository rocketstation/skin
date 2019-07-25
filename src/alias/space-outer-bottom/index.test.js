const v = require('./index.js')

test('spaceOuterBottom', () => {
  expect(v(0)).toEqual({
    marginBottom: 0,
  })
})
