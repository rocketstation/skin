const v = require('./index.js')

test('boxBgMove', () => {
  expect(
    v([
      'center',
      'center center',
      { left: 1, top: 1 },
      { bottom: '100%', right: '100%' },
    ])
  ).toEqual({
    backgroundPosition:
      'center,center center,left 1rem top 1rem ,bottom 100% right 100% ',
  })
  expect(v('center')).toEqual({ backgroundPosition: 'center' })
  expect(v('center center')).toEqual({ backgroundPosition: 'center center' })
  expect(v({ left: 1, top: 1 })).toEqual({
    backgroundPosition: 'left 1rem top 1rem ',
  })
  expect(v({ bottom: '100%', right: '100%' })).toEqual({
    backgroundPosition: 'bottom 100% right 100% ',
  })
})
