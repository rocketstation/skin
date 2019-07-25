const v = require('./index.js')

test('spaceOuterLeft', () => {
  expect(v(0)).toEqual({
    marginLeft: 0,
  })
})
