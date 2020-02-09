const v = require('./index.js')

test('boxSpaceInnerY', () => {
  expect(v(0)).toEqual({
    paddingBottom: 0,
    paddingTop: 0,
  })
})
