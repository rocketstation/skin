const v = require('./index.js')

test('boxSpaceOuterTop', () => {
  expect(v(0)).toEqual({
    marginTop: 0,
  })
})
