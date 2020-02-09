const v = require('./index.js')

test('boxSpaceOuterLeft', () => {
  expect(v(0)).toEqual({
    marginLeft: 0,
  })
})
