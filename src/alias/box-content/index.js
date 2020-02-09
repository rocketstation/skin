module.exports = function(v) {
  return {
    content: v === true ? '""' : v,
  }
}
