const fn = require('./on')

const fixtures = {
  activated: '&:active',
  focused: '&:focus',
  hovered: '&:hover',
  visited: '&:visited',
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
