const v = require('./index.js')

test('boxSpaceOuterBottom', () => {
  expect(v(0)).toEqual({
    marginBottom: 0,
  })
})
