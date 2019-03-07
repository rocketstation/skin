module.exports = (queries, ...rules) => ({
  [[]
    .concat(queries)
    .map((query) => {
      switch (query) {
        case 'activated':
          return ':active'
        case 'focused':
          return ':focus'
        case 'hovered':
          return ':hover'
        case 'visited':
          return ':visited'
      }
    })
    .join(',')]: Object.assign({}, ...rules),
})
