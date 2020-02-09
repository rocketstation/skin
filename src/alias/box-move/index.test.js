const v = require('./index.js')

test('boxMove', () => {
  expect(v(0)).toEqual({ bottom: 0, left: 0, right: 0, top: 0 })
})
