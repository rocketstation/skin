const v = require('./index.js')

test('boxSpaceInner', () => {
  expect(v(0)).toEqual({
    paddingTop: 0,
  })
})
