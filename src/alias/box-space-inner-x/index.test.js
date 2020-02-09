const v = require('./index.js')

test('boxSpaceInnerX', () => {
  expect(v(0)).toEqual({
    paddingLeft: 0,
    paddingRight: 0,
  })
})
