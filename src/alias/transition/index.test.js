const v = require('./index.js')

test('transition', () => {
  expect(v(false)).toEqual({ transitionProperty: 'none' })
  expect(v(['color-box', 'color-text', 'modify', 'border-color'])).toEqual({
    transitionProperty: 'background-color,color,transform,border-color',
  })
  expect(v('color-box')).toEqual({ transitionProperty: 'background-color' })
  expect(v('color-text')).toEqual({ transitionProperty: 'color' })
  expect(v('modify')).toEqual({ transitionProperty: 'transform' })
  expect(v('border-color')).toEqual({ transitionProperty: 'border-color' })
})
