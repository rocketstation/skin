const v = require('./index.js')

test('bgMoveY', () => {
  expect(v(['center', 1])).toEqual({ backgroundPositionY: 'center,1rem' })
  expect(v('center')).toEqual({ backgroundPositionY: 'center' })
})
