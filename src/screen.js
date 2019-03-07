module.exports = (query, ...rules) => ({
  [typeof query === 'object'
    ? Object.entries(query)
        .reduce(
          (r, [k, v]) => {
            switch (k) {
              case 'from':
                r.push(`(min-width: ${v / 16}em)`)
                break
              case 'to':
                r.push(`(max-width: ${(v - 1) / 16}em)`)
                break
              default:
                r.push(`(${k}: ${v})`)
            }

            return r
          },
          ['@media screen']
        )
        .join(' and ')
    : `@media screen and (min-width: ${query / 16}em)`]: Object.assign(
    {},
    ...rules
  ),
})
