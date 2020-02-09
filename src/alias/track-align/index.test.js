const v = require('./index.js')

test('trackAlign', () => {
  expect(v('start')).toEqual({ alignItems: 'flex-start' })
  expect(v('end')).toEqual({ alignItems: 'flex-end' })
  expect(v('center')).toEqual({ alignItems: 'center' })
  expect(v('stretch')).toEqual({ alignItems: 'stretch' })
})
