const v = require('./index.js')

test('boxSpaceOuterX', () => {
  expect(v(0)).toEqual({
    marginLeft: 0,
    marginRight: 0,
  })
})
