const v = require('./index.js')

test('boxBgSize', () => {
  expect(v(['fill', 'fit', 'auto', { height: 1, width: '100%' }])).toEqual({
    backgroundSize: 'cover,contain,auto,100% 1rem',
  })
  expect(v('fill')).toEqual({ backgroundSize: 'cover' })
  expect(v('fit')).toEqual({ backgroundSize: 'contain' })
  expect(v('auto')).toEqual({ backgroundSize: 'auto' })
  expect(v({ height: 1, width: '100%' })).toEqual({
    backgroundSize: '100% 1rem',
  })
  expect(v(null)).toEqual({ backgroundSize: null })
})
