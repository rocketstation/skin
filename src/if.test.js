const fn = require('./if')

test('custom', () => {
  expect(
    fn({
      class: ['foo', 'bar'],
      event: 'hover',
      id: 'tst',
      kind: 'div',
      nth: {
        each: 1,
        from: 1,
        isNot: true,
        isReversed: true,
        isStrict: true,
      },
    })
  ).toEqual({ '&div.foo.bar#tst:not(:nth-last-of-type(1n+1)):hover': {} })
})

test('attr', () => {
  ;[
    ['tst', '&[tst]'],
    [
      {
        isNot: true,
        key: 'tst',
      },
      '&:not([tst])',
    ],
    [
      {
        key: 'foo',
        modifier: 'equals',
        val: 'bar',
      },
      '&[foo=bar]',
    ],
    [
      {
        key: 'foo',
        modifier: 'contains',
        val: 'bar',
      },
      '&[foo~=bar]',
    ],
    [
      {
        key: 'foo',
        modifier: 'starts',
        val: 'bar',
      },
      '&[foo|=bar]',
    ],
    [
      {
        key: 'foo',
        modifier: 'startsWithStr',
        val: 'bar',
      },
      '&[foo^="bar"]',
    ],
    [
      {
        key: 'foo',
        modifier: 'containsStr',
        val: 'bar',
      },
      '&[foo*="bar"]',
    ],
    [
      {
        key: 'foo',
        modifier: 'endsWithStr',
        val: 'bar',
      },
      '&[foo$="bar"]',
    ],
  ].forEach((v) => {
    expect(
      fn({
        attr: v[0],
      })
    ).toEqual({ [v[1]]: {} })
  })
})

test('first', () => {
  expect(fn('first')).toEqual({ ':nth-child(1)': {} })
})

test('last', () => {
  expect(fn('last')).toEqual({ ':nth-last-child(1)': {} })
})

test('event', () => {
  expect(fn('active')).toEqual({ ':active': {} })
})
