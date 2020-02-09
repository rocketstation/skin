const v = require('./index.js')

test('boxCursor', () => {
  expect(v('auto')).toEqual({ cursor: 'auto' })
  expect(v(true)).toEqual({ cursor: 'pointer' })
  expect(v(false)).toEqual({ cursor: 'not-allowed' })
})
