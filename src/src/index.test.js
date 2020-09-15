const v = require('./index.js')

test('src', () => {
  expect(v('./bg.svg')).toEqual('url(./bg.svg)')
})
