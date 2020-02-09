const v = require('./index.js')

test('textColsSize', () => {
  expect(v(0)).toEqual({ columnWidth: 0 })
})
