const v = require('./index.js')

test('boxSpaceOuterRight', () => {
  expect(v(0)).toEqual({
    marginRight: 0,
  })
})
