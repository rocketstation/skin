const v = require('./index.js')

test('bgPosition', () => {
  expect(v(['local', 'global', false, 'invalid'])).toEqual({
    backgroundAttachment: 'local,scroll,fixed',
  })
  expect(v('local')).toEqual({ backgroundAttachment: 'local' })
  expect(v('global')).toEqual({ backgroundAttachment: 'scroll' })
  expect(v(false)).toEqual({ backgroundAttachment: 'fixed' })
  expect(v('invalid')).toEqual({})
})
