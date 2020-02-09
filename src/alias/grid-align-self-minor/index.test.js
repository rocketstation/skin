const v = require('./index.js')

test('gridAlignSelfMinor', () => {
  expect(v('start')).toEqual({ alignSelf: 'start' })
  expect(v('end')).toEqual({ alignSelf: 'end' })
  expect(v('center')).toEqual({ alignSelf: 'center' })
  expect(v('stretch')).toEqual({ alignSelf: 'stretch' })
})
