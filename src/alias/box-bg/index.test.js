const v = require('./index.js')

test('boxBg', () => {
  expect(v(['url(bg.svg)', 'url(bg.png)', 'url(bg.jpg)'])).toEqual({
    backgroundImage: 'url(bg.svg),url(bg.png),url(bg.jpg)',
  })
  expect(v('url(bg.png)')).toEqual({ backgroundImage: 'url(bg.png)' })
  expect(v(false)).toEqual({ backgroundImage: 'none' })
})
