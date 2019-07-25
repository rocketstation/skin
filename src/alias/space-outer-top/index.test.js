const v = require('./index.js')

test('spaceOuterTop', () => {
  expect(v(0)).toEqual({
    marginTop: 0,
  })
})
