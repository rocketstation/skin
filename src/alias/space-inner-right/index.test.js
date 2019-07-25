const v = require('./index.js')

test('spaceInnerRight', () => {
  expect(v(0)).toEqual({
    paddingRight: 0,
  })
})
