const v = require('./index.js')

test('bgMoveX', () => {
  expect(v(['center', 1])).toEqual({ backgroundPositionX: 'center,1rem' })
  expect(v('center')).toEqual({ backgroundPositionX: 'center' })
})
