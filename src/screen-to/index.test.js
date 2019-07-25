const v = require('./index.js')

test('screenTo', () => {
  expect(v(1200)).toEqual(`@media screen and (max-width:${(1200 - 1) / 16}em)`)
})
