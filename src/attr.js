module.exports = function(key) {
  return {
    contains: function(val) {
      return '[' + key + '~=' + val + ']'
    },
    containsStr: function(val) {
      return '[' + key + '*=' + '"' + val + '"' + ']'
    },
    endsWithStr: function(val) {
      return '[' + key + '$=' + '"' + val + '"' + ']'
    },
    equals: function(val) {
      return '[' + key + '=' + val + ']'
    },
    is: '[' + key + ']',
    starts: function(val) {
      return '[' + key + '|=' + val + ']'
    },
    startsWithStr: function(val) {
      return '[' + key + '^=' + '"' + val + '"' + ']'
    },
  }
}
