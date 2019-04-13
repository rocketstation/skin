const screen = require('./screen')

const from = `(min-width:${600 / 16}em)`
const to = `(max-width:${(1200 - 1) / 16}em)`

it('handles custom', () => {
  expect(screen({ orientation: `'landscape'` })).toEqual(
    `@media screen and (orientation:'landscape')`
  )
})

it('handles from', () => {
  expect(screen.from(600)).toEqual(`@media screen and ${from}`)
})

it('handles to', () => {
  expect(screen.to(1200)).toEqual(`@media screen and ${to}`)
})

it('handles between', () => {
  expect(screen.between(600, 1200)).toEqual(
    `@media screen and ${from} and ${to}`
  )
})
