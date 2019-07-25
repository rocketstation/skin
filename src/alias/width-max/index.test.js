const v = require('./index.js')

test('widthMax', () => {
  expect(v(false)).toEqual({ maxWidth: 'none' })
  expect(v(0)).toEqual({ maxWidth: 0 })
})
