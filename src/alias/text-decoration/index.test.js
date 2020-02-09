const v = require('./index.js')

test('textDecoration', () => {
  expect(v('top')).toEqual({ textDecoration: 'overline' })
  expect(v('center')).toEqual({ textDecoration: 'line-through' })
  expect(v('bottom')).toEqual({ textDecoration: 'underline' })
  expect(v(false)).toEqual({ textDecoration: 'none' })
  expect(v('none')).toEqual({ textDecoration: 'none' })
})
