const v = require('./index.js')

test('heightMax', () => {
  expect(v(false)).toEqual({ maxHeight: 'none' })
  expect(v(0)).toEqual({ maxHeight: 0 })
})
