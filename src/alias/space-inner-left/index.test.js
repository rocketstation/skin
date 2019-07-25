const v = require('./index.js')

test('spaceInnerLeft', () => {
  expect(v(0)).toEqual({
    paddingLeft: 0,
  })
})
