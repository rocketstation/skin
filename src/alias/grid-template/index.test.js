const v = require('./index.js')

test('gridTemplate', () => {
  expect(
    v([
      ['header', 'header', 'header'],
      ['minor', 'majorHeader', '.'],
      ['minor', 'majorFooter', '.'],
      ['footer', 'footer', 'footer'],
    ])
  ).toEqual({
    gridTemplateAreas:
      '"header header header""minor majorHeader .""minor majorFooter .""footer footer footer"',
  })
  expect(
    v([
      ['header header header'],
      ['minor majorHeader .'],
      ['minor majorFooter .'],
      ['footer footer footer'],
    ])
  ).toEqual({
    gridTemplateAreas:
      '"header header header""minor majorHeader .""minor majorFooter .""footer footer footer"',
  })
  expect(
    v(
      '"header header header""minor majorHeader .""minor majorFooter .""footer footer footer"'
    )
  ).toEqual({
    gridTemplateAreas:
      '"header header header""minor majorHeader .""minor majorFooter .""footer footer footer"',
  })
})
