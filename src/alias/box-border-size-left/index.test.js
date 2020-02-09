const v = require('./index.js')

test('boxBorderSizeLeft', () => {
  expect(v(0)).toEqual({
    borderLeftWidth: 0,
  })
})
