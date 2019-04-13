const attr = require('./attr')

const key = 'foo'
const val = 'val'

it('handles contains', () => {
  expect(attr(key).contains(val)).toEqual(`[${key}~=${val}]`)
})

it('handles containsStr', () => {
  expect(attr(key).containsStr(val)).toEqual(`[${key}*="${val}"]`)
})

it('handles endsWithStr', () => {
  expect(attr(key).endsWithStr(val)).toEqual(`[${key}$="${val}"]`)
})

it('handles equals', () => {
  expect(attr(key).equals(val)).toEqual(`[${key}=${val}]`)
})

it('handles is', () => {
  expect(attr(key).is).toEqual(`[${key}]`)
})

it('handles starts', () => {
  expect(attr(key).starts(val)).toEqual(`[${key}|=${val}]`)
})

it('handles startsWithStr', () => {
  expect(attr(key).startsWithStr(val)).toEqual(`[${key}^="${val}"]`)
})
