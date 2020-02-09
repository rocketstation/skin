const v = require('./index.js')

test('textAlign', () => {
  expect(v('start')).toEqual({ textAlign: 'start' })
  expect(v('end')).toEqual({ textAlign: 'end' })
  expect(v('center')).toEqual({ textAlign: 'center' })
  expect(v('stretch')).toEqual({ textAlign: 'justify' })
})
