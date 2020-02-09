const v = require('./index.js')

test('boxSpaceInnerRight', () => {
  expect(v(0)).toEqual({
    paddingRight: 0,
  })
})
