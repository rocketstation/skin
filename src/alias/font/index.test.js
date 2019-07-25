const v = require('./index.js')

test('font', () => {
  expect(v(['serif', 'sans-serif'])).toEqual({ fontFamily: 'serif,sans-serif' })
})
