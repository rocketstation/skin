const fn = require('./screen')

const fixtures = {
  number: {
    in: 300,
    out: `@media screen and (min-width: ${300 / 16}em)`,
  },
  object: {
    in: {
      from: 600,
      orientation: `'landscape'`,
      to: 1200,
    },
    out: `@media screen and (min-width: ${600 /
      16}em) and (orientation: 'landscape') and (max-width: ${1199 / 16}em)`,
  },
}

Object.entries(fixtures).forEach(([k, v]) => {
  test(k, () => {
    ;[].concat(v).forEach((v) => {
      if (typeof v === 'object') {
        expect(fn(v.in || k)).toEqual(
          typeof v.out === 'object' ? v.out : { [v.out]: {} }
        )
      } else {
        expect(fn(k)).toEqual({ [v]: {} })
      }
    })
  })
})
