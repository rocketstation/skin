const v = require('./index.js')

test('boxWidthMax', () => {
  expect(v(0)).toEqual({ width: 0 })
})
