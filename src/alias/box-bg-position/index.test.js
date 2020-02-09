const v = require('./index.js')

test('boxBgPosition', () => {
  expect(v(['local', 'global', false])).toEqual({
    backgroundAttachment: 'local,scroll,fixed',
  })
  expect(v('local')).toEqual({ backgroundAttachment: 'local' })
  expect(v('global')).toEqual({ backgroundAttachment: 'scroll' })
  expect(v(false)).toEqual({ backgroundAttachment: 'fixed' })
  expect(v(null)).toEqual({ backgroundAttachment: null })
})
