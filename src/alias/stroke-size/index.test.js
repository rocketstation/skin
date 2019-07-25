const v = require('./index.js')

test('strokeSize', () => {
  expect(v(1)).toEqual({ strokeWidth: 1 })
})
