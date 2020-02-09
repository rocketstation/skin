const v = require('./index.js')

test('boxMustBreakWords', () => {
  expect(v(true)).toEqual({ overflowWrap: 'break-word' })
  expect(v(false)).toEqual({ overflowWrap: 'normal' })
})
