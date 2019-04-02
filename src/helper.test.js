const fn = require('./helper')

const rules = { foo: 'bar' }

it('comines rules', () => {
  expect(
    fn(rules, rules, rules)
      .hover(rules)
      .children(rules).rules
  ).toEqual({ ...rules, ':hover': rules, '>*': rules })
})

it('parses skin', () => {
  expect(fn(fn(rules)).rules).toEqual(rules)
})

it('handles active', () => {
  expect(fn(rules).active(rules).rules).toEqual({ ...rules, ':active': rules })
})

it('handles hover', () => {
  expect(fn(rules).hover(rules).rules).toEqual({ ...rules, ':hover': rules })
})

it('handles focus', () => {
  expect(fn(rules).focus(rules).rules).toEqual({ ...rules, ':focus': rules })
})

it('handles after', () => {
  expect(fn(rules).after(rules).rules).toEqual({ ...rules, '::after': rules })
})

it('handles before', () => {
  expect(fn(rules).before(rules).rules).toEqual({ ...rules, '::before': rules })
})

it('handles class', () => {
  expect(fn(rules).class('tst', rules).rules).toEqual({
    ...rules,
    '.tst': rules,
  })
})

it('handles id', () => {
  expect(fn(rules).id('tst', rules).rules).toEqual({ ...rules, '#tst': rules })
})

it('handles if', () => {
  expect(fn(rules).if('tst', rules).rules).toEqual({ ...rules, tst: rules })
})

it('handles first', () => {
  expect(fn(rules).first(rules).rules).toEqual({
    ...rules,
    ':first-child': rules,
  })
})

it('handles last', () => {
  expect(fn(rules).last(rules).rules).toEqual({
    ...rules,
    ':last-child': rules,
  })
})

it('handles children', () => {
  expect(fn(rules).children(rules).rules).toEqual({ ...rules, '>*': rules })
})

it('handles next single', () => {
  expect(fn(rules).nextSingle(rules).rules).toEqual({ ...rules, '&+*': rules })
})

it('handles next multiple', () => {
  expect(fn(rules).nextMultiple(rules).rules).toEqual({
    ...rules,
    '&~*': rules,
  })
})

it('handles highlight', () => {
  expect(fn(rules).highlight(rules).rules).toEqual({
    ...rules,
    '::selection': rules,
  })
})

it('handles placeholder', () => {
  expect(fn(rules).placeholder(rules).rules).toEqual({
    ...rules,
    '::placeholder': rules,
  })
})

it('handles attr', () => {
  expect(fn(rules).attr('tst', rules).rules).toEqual({
    ...rules,
    '[tst]': rules,
  })
  expect(
    fn(rules).attr({ isNot: true, key: 'foo', val: 'bar' }, rules).rules
  ).toEqual({
    ...rules,
    ':not([foo=bar])': rules,
  })
  expect(
    fn(rules).attr({ key: 'foo', modifier: 'contains', val: 'bar' }, rules)
      .rules
  ).toEqual({ ...rules, '[foo~=bar]': rules })
  expect(
    fn(rules).attr({ key: 'foo', modifier: 'starts', val: 'bar' }, rules).rules
  ).toEqual({ ...rules, '[foo|=bar]': rules })
  expect(
    fn(rules).attr({ key: 'foo', modifier: 'containsStr', val: 'bar' }, rules)
      .rules
  ).toEqual({ ...rules, [`[foo*="bar"]`]: rules })
  expect(
    fn(rules).attr({ key: 'foo', modifier: 'startsWithStr', val: 'bar' }, rules)
      .rules
  ).toEqual({ ...rules, [`[foo^="bar"]`]: rules })
  expect(
    fn(rules).attr({ key: 'foo', modifier: 'endsWithStr', val: 'bar' }, rules)
      .rules
  ).toEqual({ ...rules, [`[foo$="bar"]`]: rules })
})

it('handles nth', () => {
  expect(fn(rules).nth({ each: 1, from: 1 }, rules).rules).toEqual({
    ...rules,
    ':nth-child(1n+1)': rules,
  })
  expect(
    fn(rules).nth(
      { each: 1, from: 1, isNot: true, isReversed: true, isStrict: true },
      rules
    ).rules
  ).toEqual({ ...rules, ':not(:nth-last-of-type(1n+1))': rules })
})

it('handles screen', () => {
  expect(fn(rules).screen(960, rules, rules).rules).toEqual({
    ...rules,
    [`@media screen and (max-width:${(960 - 1) / 16}em)`]: rules,
    [`@media screen and (min-width:${960 / 16}em)`]: rules,
  })

  const from = `(min-width:${1200 / 16}em)`
  const to = `(max-width:${(600 - 1) / 16}em)`
  const orientation = `(orientation:'landscape')`

  expect(
    fn(rules).screen({ from: 1200, orientation: `'landscape'`, to: 600 }, rules)
      .rules
  ).toEqual({
    ...rules,
    [`@media screen and ${from} and ${orientation} and ${to}`]: rules,
  })
})
