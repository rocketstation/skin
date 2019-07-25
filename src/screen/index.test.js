const v = require('./index.js')

test('screen', () => {
  expect(v({ orientation: `'landscape'` })).toEqual(
    `@media screen and (orientation:'landscape')`
  )
})
