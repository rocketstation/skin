const v = require('./index.js')

test('transition', () => {
  expect(v(false)).toEqual({ transitionProperty: 'none' })
  expect(v(['box', 'text', 'modify'])).toEqual({
    transitionProperty: 'background-color,color,transform',
  })
  expect(v('box')).toEqual({ transitionProperty: 'background-color' })
  expect(v('box-border')).toEqual({ transitionProperty: 'border-color' })
  expect(v('text')).toEqual({ transitionProperty: 'color' })
  expect(v('shape')).toEqual({ transitionProperty: 'fill' })
  expect(v('shape-border')).toEqual({ transitionProperty: 'stroke' })
  expect(v('modify')).toEqual({ transitionProperty: 'transform' })
  expect(v(null)).toEqual({ transitionProperty: null })
})
