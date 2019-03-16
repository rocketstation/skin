const fn = require('./if')

const fixtures = {
  attr: [
    {
      in: {
        attr: 'tst',
      },
      out: '[tst]',
    },
    {
      in: {
        attr: {
          isNot: true,
          key: 'tst',
        },
      },
      out: ':not([tst])',
    },
    {
      in: {
        attr: {
          key: 'foo',
          modifier: 'equals',
          val: 'bar',
        },
      },
      out: '[foo=bar]',
    },
    {
      in: {
        attr: {
          key: 'foo',
          modifier: 'contains',
          val: 'bar',
        },
      },
      out: '[foo~=bar]',
    },
    {
      in: {
        attr: {
          key: 'foo',
          modifier: 'starts',
          val: 'bar',
        },
      },
      out: '[foo|=bar]',
    },
    {
      in: {
        attr: {
          key: 'foo',
          modifier: 'startsWithStr',
          val: 'bar',
        },
      },
      out: '[foo^="bar"]',
    },
    {
      in: {
        attr: {
          key: 'foo',
          modifier: 'containsStr',
          val: 'bar',
        },
      },
      out: '[foo*="bar"]',
    },
    {
      in: {
        attr: {
          key: 'foo',
          modifier: 'endsWithStr',
          val: 'bar',
        },
      },
      out: '[foo$="bar"]',
    },
  ],
  class: {
    in: {
      class: ['foo', 'bar'],
    },
    out: '.foo.bar',
  },
  first: ':nth-last-child(1)',
  id: {
    in: {
      id: 'tst',
    },
    out: '#tst',
  },
  isActive: ':checked',
  isActiveObj: [
    {
      in: {
        isActive: true,
      },
      out: ':checked',
    },
    {
      in: {
        isActive: false,
      },
      out: ':not(:checked)',
    },
  ],
  isCurr: ':target',
  isCurrObj: [
    {
      in: {
        isCurr: true,
      },
      out: ':target',
    },
    {
      in: {
        isCurr: false,
      },
      out: ':not(:target)',
    },
  ],
  isDisabled: ':disabled',
  isDisabledObj: [
    {
      in: {
        isDisabled: true,
      },
      out: ':disabled',
    },
    {
      in: {
        isDisabled: false,
      },
      out: ':enabled',
    },
  ],
  isEmpty: ':empty',
  isEmptyObj: [
    {
      in: {
        isEmpty: true,
      },
      out: ':empty',
    },
    {
      in: {
        isEmpty: false,
      },
      out: ':not(:empty)',
    },
  ],
  active: ':active',
  hover: ':hover',
  focus: ':focus',
  isNew: ':not(:visited)',
  isNotNew: ':visited',
  isNotActive: ':not(:checked)',
  isNotCurr: ':not(:target)',
  isNotDisabled: ':enabled',
  isNotEmpty: ':not(:empty)',
  isNotOnly: ':not(:only-child)',
  isNotReadOnly: ':not(:read-only)',
  isOnly: ':only-child',
  isOnlyObj: [
    {
      in: {
        isOnly: true,
      },
      out: ':only-child',
    },
    {
      in: {
        isOnly: false,
      },
      out: ':not(:only-child)',
    },
    {
      in: {
        isOnly: {
          isStrict: true,
        },
      },
      out: ':only-of-type',
    },
    {
      in: {
        isOnly: {
          isNot: true,
          isStrict: true,
        },
      },
      out: ':not(:only-of-type)',
    },
  ],
  isReadOnly: ':read-only',
  isReadOnlyObj: [
    {
      in: {
        isReadOnly: true,
      },
      out: ':read-only',
    },
    {
      in: {
        isReadOnly: false,
      },
      out: ':not(:read-only)',
    },
  ],
  kind: {
    in: {
      kind: 'div',
    },
    out: 'div',
  },
  last: ':nth-child(1)',
  nth: [
    {
      in: {
        nth: 'first',
      },
      out: ':nth-child(1)',
    },
    {
      in: {
        nth: 'last',
      },
      out: ':nth-last-child(1)',
    },
    {
      in: {
        nth: {
          each: 1,
          from: 1,
          isNot: true,
          isReversed: true,
          isStrict: true,
        },
      },
      out: ':not(:nth-last-of-type(1n+1))',
    },
  ],
}

Object.entries(fixtures).forEach(([k, v]) => {
  test(k, () => {
    ;[].concat(v).forEach((v) => {
      if (typeof v === 'object') {
        expect(fn(v.in || k)).toEqual(
          typeof v.out === 'object' ? v.out : { [v.out]: {} }
        )
      } else {
        expect(fn(k)).toEqual({ [v]: {} })
      }
    })
  })
})
