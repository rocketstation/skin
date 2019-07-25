const v = require('./index.js')

test('screenBetween', () => {
  expect(v(600, 1200)).toEqual(
    `@media screen and (min-width:${600 / 16}em) and (max-width:${(1200 - 1) /
      16}em)`
  )
})
