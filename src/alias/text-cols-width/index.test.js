const v = require('./index.js')

test('textColsWidth', () => {
  expect(v(0)).toEqual({ columnWidth: 0 })
})
