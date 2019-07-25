const v = require('./index.js')

test('textColsAmount', () => {
  expect(v(1)).toEqual({ columnCount: 1 })
})
