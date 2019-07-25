const v = require('./index.js')

test('screenFrom', () => {
  expect(v(600)).toEqual(`@media screen and (min-width:${600 / 16}em)`)
})
