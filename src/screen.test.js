const fn = require('./screen')

const prefix = '@media screen'

test('object', () => {
  const from = `(min-width:${600 / 16}em)`
  const to = `(max-width:${1199 / 16}em)`
  const orientation = `(orientation:'landscape')`

  expect(fn({ from: 600, orientation: `'landscape'`, to: 1200 })).toEqual({
    [`${prefix} and ${from} and ${orientation} and ${to}`]: {},
  })
})

test('number', () => {
  expect(fn(960)).toEqual({
    [`${prefix} and (max-width:${959 / 16}em)`]: {},
    [`${prefix} and (min-width:${960 / 16}em)`]: {},
  })
})
