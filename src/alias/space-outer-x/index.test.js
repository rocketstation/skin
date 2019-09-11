const v = require('./index.js')

test('spaceOuterX', () => {
  expect(v(0)).toEqual({
    marginLeft: 0,
    marginRight: 0,
  })
})
