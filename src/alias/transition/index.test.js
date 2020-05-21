const v = require('./index.js')

test('transition', () => {
  expect(v(false)).toEqual({ transitionProperty: 'none' })
  expect(v(['background-color', 'color', 'fill'])).toEqual({
    transitionProperty: 'background-color,color,fill',
  })
  expect(v('opacity')).toEqual({ transitionProperty: 'opacity' })
  expect(v(null)).toEqual({ transitionProperty: null })
})
