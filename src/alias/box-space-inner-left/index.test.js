const v = require('./index.js')

test('boxSpaceInnerLeft', () => {
  expect(v(0)).toEqual({
    paddingLeft: 0,
  })
})
