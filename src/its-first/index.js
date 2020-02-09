module.exports = function(every = 0, from = 1) {
  return `:nth-child(${every}n+${from})`
}
