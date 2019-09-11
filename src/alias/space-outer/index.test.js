const v = require('./index.js')

test('spaceOuter', () => {
  expect(v(0)).toEqual({
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  })
})
