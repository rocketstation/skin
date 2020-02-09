const v = require('./index.js')

test('position', () => {
  expect(v(true)).toEqual({ position: 'static' })
  expect(v('relative')).toEqual({ position: 'relative' })
  expect(v('absolute')).toEqual({ position: 'absolute' })
  expect(v(false)).toEqual({ position: 'fixed' })
})
