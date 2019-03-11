const fn = require('./its')

const fixtures = {
  after: '::after',
  around: '::before,::after',
  before: '::before',
  children: '>*',
  childrenObj: {
    in: {
      class: ['foo', 'bar'],
      id: 'tst',
      kind: 'div',
      modifier: 'children',
    },
    out: '>div.foo.bar#tst',
  },
  highlight: '::selection',
  next: '&+*',
  nextMultiple: {
    in: {
      class: ['foo', 'bar'],
      id: 'tst',
      isStrict: false,
      kind: 'div',
      modifier: 'next',
    },
    out: '&~div.foo.bar#tst',
  },
  nextSingle: {
    in: {
      class: ['foo', 'bar'],
      id: 'tst',
      kind: 'div',
      modifier: 'next',
    },
    out: '&+div.foo.bar#tst',
  },
  obj: {
    in: {
      class: ['foo', 'bar'],
      id: 'tst',
      kind: 'div',
    },
    out: ' div.foo.bar#tst',
  },
  placeholder: '::placeholder',
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
