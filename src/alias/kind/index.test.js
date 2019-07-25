const v = require('./index.js')

test('kind', () => {
  expect(v(undefined)).toEqual({})
  expect(v('box')).toEqual({ display: 'block' })
  expect(v('text')).toEqual({ display: 'inline' })
  expect(v('track')).toEqual({ display: 'flex' })
  expect(v('grid')).toEqual({ display: 'grid' })
  expect(v(false)).toEqual({ display: 'none' })
})
