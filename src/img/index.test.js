const v = require('./index.js')

test('img', () => {
  expect(v('./bg.svg')).toEqual('url(./bg.svg)')
})
