const v = require('./index.js')

test('moveBottom', () => {
  expect(v(0)).toEqual({ bottom: 0 })
})
