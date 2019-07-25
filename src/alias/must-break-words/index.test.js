const v = require('./index.js')

test('mustBreakWords', () => {
  expect(v(true)).toEqual({ overflowWrap: 'break-word' })
  expect(v(false)).toEqual({ overflowWrap: 'normal' })
})
