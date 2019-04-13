const on = require('./on')

it('handles hover', () => {
  expect(on.hover).toEqual(':hover')
})

it('handles focus', () => {
  expect(on.focus).toEqual(':focus')
})

it('handles active', () => {
  expect(on.active).toEqual(':active')
})
