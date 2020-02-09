const v = require('./index.js')
test('boxOrder', () => {
  expect(v(1)).toEqual({ zIndex: 1 })
})
