const v = require('./index.js')

test('spaceInnerY', () => {
  expect(v(0)).toEqual({
    paddingBottom: 0,
    paddingTop: 0,
  })
})
