const v = require('./index.js')

test('textShadow', () => {
  expect(v(false)).toEqual({ textShadow: 'none' })
  expect(
    v([
      '1px 1px 1px hsla(0,0%,0%,1)',
      { blur: 1, color: 'hsla(0,0%,0%,1)', x: 1, y: 1 },
    ])
  ).toEqual({
    textShadow: '1px 1px 1px hsla(0,0%,0%,1),1px 1px 1px hsla(0,0%,0%,1)',
  })
  expect(v('1px 1px 1px hsla(0,0%,0%,1)')).toEqual({
    textShadow: '1px 1px 1px hsla(0,0%,0%,1)',
  })
  expect(v({ blur: 1, color: 'hsla(0,0%,0%,1)', x: 1, y: 1 })).toEqual({
    textShadow: '1px 1px 1px hsla(0,0%,0%,1)',
  })
})
