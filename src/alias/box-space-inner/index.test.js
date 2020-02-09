const v = require('./index.js')

test('boxSpaceInner', () => {
  expect(v(0)).toEqual({
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
  })
})
