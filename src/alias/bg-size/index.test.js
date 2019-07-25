const v = require('./index.js')

test('bgSize', () => {
  expect(
    v(['fill', 'fit', 'auto', { height: 1, width: '100%' }, 'ivalid'])
  ).toEqual({ backgroundSize: 'cover,contain,auto,100% 1rem' })
  expect(v('fill')).toEqual({ backgroundSize: 'cover' })
  expect(v('fit')).toEqual({ backgroundSize: 'contain' })
  expect(v('auto')).toEqual({ backgroundSize: 'auto' })
  expect(v({ height: 1, width: '100%' })).toEqual({
    backgroundSize: '100% 1rem',
  })
  expect(v('ivalid')).toEqual({})
})
