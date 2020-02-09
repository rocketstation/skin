const v = require('./index.js')

test('boxSpaceOuterY', () => {
  expect(v(0)).toEqual({
    marginBottom: 0,
    marginTop: 0,
  })
})
