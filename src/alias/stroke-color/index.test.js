const v = require('./index.js')

test('strokeColor', () => {
  expect(v('black')).toEqual({ stroke: 'black' })
})
