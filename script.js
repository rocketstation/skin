const fs = require('fs')

const cc = require('@rocketstation/change-case')

fs.readdirSync('src/alias').forEach((v) => {
  console.log(`${cc.c(v)}: require('./${v}'),`)
})
