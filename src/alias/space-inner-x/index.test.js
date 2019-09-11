const v = require('./index.js')

test('spaceInnerX', () => {
  expect(v(0)).toEqual({
    paddingLeft: 0,
    paddingRight: 0,
  })
})
