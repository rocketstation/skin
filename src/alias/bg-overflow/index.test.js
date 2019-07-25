const v = require('./index.js')

test('bgOverflow', () => {
  expect(v(['border', 'space', 'content', 'invalid'])).toEqual({
    backgroundClip: 'border-box,padding-box,content-box',
  })
  expect(v('border')).toEqual({ backgroundClip: 'border-box' })
  expect(v('space')).toEqual({ backgroundClip: 'padding-box' })
  expect(v('content')).toEqual({ backgroundClip: 'content-box' })
  expect(v('invalid')).toEqual({})
})
