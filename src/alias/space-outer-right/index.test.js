const v = require('./index.js')

test('spaceOuterRight', () => {
  expect(v(0)).toEqual({
    marginRight: 0,
  })
})
