const handler = {
  attr: (v) => {
    if (typeof v === 'object') {
      const { key, val, modifier = 'equals', isNot } = v
      let next = key

      if (val) {
        switch (modifier) {
          case 'equals':
            next += `=${val}`
            break

          case 'contains':
            next += `~=${val}`
            break

          case 'starts':
            next += `|=${val}`
            break

          case 'containsStr':
            next += `*="${val}"`
            break

          case 'startsWithStr':
            next += `^="${val}"`
            break

          case 'endsWithStr':
            next += `$="${val}"`
        }
      }

      next = `[${next}]`
      if (isNot) next = `:not(${next})`
      return next
    }

    return `[${v}]`
  },
  class: (v) =>
    []
      .concat(v)
      .map((v) => `.${v}`)
      .join(''),
  id: (v) =>
    []
      .concat(v)
      .map((v) => `#${v}`)
      .join(''),
  isActive: (v) => (v ? ':checked' : ':not(:checked)'),
  isCurr: (v) => (v ? ':target' : ':not(:target)'),
  isDisabled: (v) => (v ? ':disabled' : ':enabled'),
  isEmpty: (v) => (v ? ':empty' : ':not(:empty)'),
  isOnly: (v) => {
    if (typeof v === 'object') {
      const { isNot, isStrict } = v
      let next = `:only-${isStrict ? 'of-type' : 'child'}`
      if (isNot) next = `:not(${next})`
      return next
    }

    return v ? ':only-child' : ':not(:only-child)'
  },
  isReadOnly: (v) => (v ? ':read-only' : ':not(:read-only)'),
  kind: (v) => v,
  nth: (v) => {
    let next
    let isNot
    let isReversed
    let isStrict

    switch (v) {
      case 'first':
        next = '1'
        break

      case 'last':
        next = '1'
        isReversed = true
        break

      default: {
        const { each = 0, from = 0 } = v
        next = `${each}n+${from}`
        isNot = v.isNot
        isReversed = v.isReversed
        isStrict = v.isStrict
      }
    }

    next = `:nth${isReversed ? '-last' : ''}-${
      isStrict ? 'of-type' : 'child'
    }(${next})`
    if (isNot) next = `:not(${next})`
    return next
  },
}

module.exports = (queries, ...rules) => ({
  [[]
    .concat(queries)
    .map((query) => {
      if (typeof query === 'object') {
        return Object.entries(query)
          .reduce((r, [k, v]) => {
            r.push(handler[k](v))

            return r
          }, [])
          .join('')
      }

      switch (query) {
        case 'last':
          return handler['nth']('first')
        case 'first':
          return handler['nth']('last')
        case 'isActive':
          return handler['isActive'](true)
        case 'isNotActive':
          return handler['isActive'](false)
        case 'isCurr':
          return handler['isCurr'](true)
        case 'isNotCurr':
          return handler['isCurr'](false)
        case 'isEmpty':
          return handler['isEmpty'](true)
        case 'isNotEmpty':
          return handler['isEmpty'](false)
        case 'isOnly':
          return handler['isOnly'](true)
        case 'isNotOnly':
          return handler['isOnly'](false)
        case 'isDisabled':
          return handler['isDisabled'](true)
        case 'isNotDisabled':
          return handler['isDisabled'](false)
        case 'isReadOnly':
          return handler['isReadOnly'](true)
        case 'isNotReadOnly':
          return handler['isReadOnly'](false)
      }
    })
    .join(',')]: Object.assign({}, ...rules),
})

// ADD class id kind
