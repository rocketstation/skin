const v = require('./index.js')

test('spaceInner', () => {
  expect(v(0)).toEqual({
    paddingTop: 0,
  })
})