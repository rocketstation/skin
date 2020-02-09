const v = require('./index.js')

test('boxBorderSize', () => {
  expect(v(0)).toEqual({
    borderBottomWidth: 0,
  })
})
