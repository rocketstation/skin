const v = require('./index.js')

test('gridAlignMajor', () => {
  expect(v('start')).toEqual({ justifyItems: 'start' })
  expect(v('end')).toEqual({ justifyItems: 'end' })
  expect(v('center')).toEqual({ justifyItems: 'center' })
  expect(v('stretch')).toEqual({ justifyItems: 'stretch' })
})
