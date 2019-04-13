const its = require('./its')

it('handles custom', () => {
  expect(its('.tst')).toEqual('& .tst')
})

it('handles after', () => {
  expect(its.after).toEqual('::after')
})

it('handles before', () => {
  expect(its.before).toEqual('::before')
})

it('handles children', () => {
  expect(its.children).toEqual('>*')
})

it('handles first', () => {
  expect(its.first()).toEqual(':nth-child(0n+1)')
  expect(its.first(1, 0)).toEqual(':nth-child(1n+0)')
})

it('handles highlight', () => {
  expect(its.highlight).toEqual('::selection')
})

it('handles last', () => {
  expect(its.last()).toEqual(':nth-last-child(0n+1)')
  expect(its.last(1, 0)).toEqual(':nth-last-child(1n+0)')
})

it('handles nextMultiple', () => {
  expect(its.nextMultiple).toEqual('&~*')
})

it('handles nextSingle', () => {
  expect(its.nextSingle).toEqual('&+*')
})

it('handles placeholder', () => {
  expect(its.placeholder).toEqual('::placeholder')
})
