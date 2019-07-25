const v = require('./index.js')

test('its', () => {
  expect(v('.tst')).toEqual('& .tst')
})
