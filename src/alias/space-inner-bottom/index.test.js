const v = require('./index.js')

test('spaceInnerBottom', () => {
  expect(v(0)).toEqual({
    paddingBottom: 0,
  })
})
