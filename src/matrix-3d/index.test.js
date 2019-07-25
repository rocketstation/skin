const v = require('./index.js')

test('matrix3d', () => {
  expect(v(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)).toEqual(
    'matrix3d(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)'
  )
})
