const fn = require('./its')

test('custom', () => {
  ;[
    [{ kind: true }, '& *'],
    [
      {
        modifier: 'children',
        kind: true,
      },
      '&>*',
    ],
    [
      {
        modifier: 'nextSingle',
        kind: true,
      },
      '&+*',
    ],
    [
      {
        modifier: 'nextMultiple',
        kind: true,
      },
      '&~*',
    ],
  ].forEach((v) => {
    expect(fn(v[0])).toEqual({ [v[1]]: {} })
  })
})

test('before', () => {
  expect(fn('before')).toEqual({ '::before': {} })
})

test('after', () => {
  expect(fn('after')).toEqual({ '::after': {} })
})

test('children', () => {
  expect(fn('children')).toEqual({ '>*': {} })
})

test('nextSingle', () => {
  expect(fn('nextSingle')).toEqual({ '&+*': {} })
})

test('nextMultiple', () => {
  expect(fn('nextMultiple')).toEqual({ '&~*': {} })
})

test('highlight', () => {
  expect(fn('highlight')).toEqual({ '::selection': {} })
})

test('placeholder', () => {
  expect(fn('placeholder')).toEqual({ '::placeholder': {} })
})
