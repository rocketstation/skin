const v = require('./index.js')

test('boxSpaceInnerBottom', () => {
  expect(v(0)).toEqual({
    paddingBottom: 0,
  })
})
