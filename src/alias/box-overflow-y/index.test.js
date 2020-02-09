const v = require('./index.js')

test('boxOverflowY', () => {
  expect(v(false)).toEqual({ overflowY: 'hidden' })
  expect(v(true)).toEqual({ overflowY: 'visible' })
  expect(v('auto')).toEqual({ overflowY: 'auto' })
})
