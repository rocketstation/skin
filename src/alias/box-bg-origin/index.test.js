const v = require('./index.js')

test('boxBgOrigin', () => {
  expect(v(['border', 'space', 'content'])).toEqual({
    backgroundOrigin: 'border-box,padding-box,content-box',
  })
  expect(v('border')).toEqual({ backgroundOrigin: 'border-box' })
  expect(v('space')).toEqual({ backgroundOrigin: 'padding-box' })
  expect(v('content')).toEqual({ backgroundOrigin: 'content-box' })
  expect(v(null)).toEqual({ backgroundOrigin: null })
})
