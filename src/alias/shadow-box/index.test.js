const v = require('./index.js')

test('shadowBox', () => {
  expect(v(false)).toEqual({ boxShadow: 'none' })
  expect(
    v([
      '1px 1px 1px 1px hsla(0,0%,0%,1) inset',
      {
        blur: 1,
        color: 'hsla(0,0%,0%,1)',
        isReversed: true,
        size: 1,
        x: 1,
        y: 1,
      },
    ])
  ).toEqual({
    boxShadow:
      '1px 1px 1px 1px hsla(0,0%,0%,1) inset,1px 1px 1px 1px hsla(0,0%,0%,1) inset',
  })
  expect(v('1px 1px 1px 1px hsla(0,0%,0%,1) inset')).toEqual({
    boxShadow: '1px 1px 1px 1px hsla(0,0%,0%,1) inset',
  })
  expect(
    v({
      blur: 1,
      color: 'hsla(0,0%,0%,1)',
      isReversed: true,
      size: 1,
      x: 1,
      y: 1,
    })
  ).toEqual({ boxShadow: '1px 1px 1px 1px hsla(0,0%,0%,1) inset' })
})
