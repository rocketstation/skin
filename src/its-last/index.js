module.exports = function(every = 0, from = 1) {
  return `:nth-last-child(${every}n+${from})`
}
