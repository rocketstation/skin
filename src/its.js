module.exports = (queries, ...rules) => ({
  [[]
    .concat(queries)
    .map((query) => {
      if (typeof query === 'object') {
        let modifier = ' '

        if (query.modifier === 'children') modifier = '>'
        if (query.modifier === 'next')
          modifier = query.isStrict === false ? '&~' : '&+'

        if (query.kind) modifier += query.kind
        if (query.class)
          modifier += []
            .concat(query.class)
            .map((v) => `.${v}`)
            .join('')
        if (query.id)
          modifier += []
            .concat(query.id)
            .map((v) => `#${v}`)
            .join('')

        return modifier
      }

      switch (query) {
        case 'children':
          return '>*'
        case 'before':
          return '::before'
        case 'after':
          return '::after'
        case 'around':
          return '::before,::after'
        case 'placeholder':
          return '::placeholder'
        case 'next':
          return '&+*'
        case 'highlight':
          return '::selection'
      }
    })
    .join(',')]: Object.assign({}, ...rules),
})
