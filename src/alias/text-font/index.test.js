const v = require('./index.js')

test('textFont', () => {
  expect(v(['serif', 'sans-serif'])).toEqual({ fontFamily: 'serif,sans-serif' })
})
