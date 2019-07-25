const v = require('./index.js')

test('textColsSpace', () => {
  expect(v(0)).toEqual({ columnGap: 0 })
})
