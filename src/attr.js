var parseAttr = function(kind) {
  var modifier
  var isStr

  switch (kind) {
    case 'equals':
      modifier = '='
      break

    case 'contains':
      modifier = '~='
      break

    case 'starts':
      modifier = '|='
      break

    case 'containsStr':
      modifier = '*='
      isStr = true
      break

    case 'startsWithStr':
      modifier = '^='
      isStr = true
      break

    case 'endsWithStr':
      modifier = '$='
      isStr = true
      break
  }

  return function(key, val) {
    return '[' + key + modifier + (isStr ? '"' + val + '"' : val) + ']'
  }
}

module.exports = function(key) {
  return {
    contains: function(val) {
      return parseAttr('contains')(key, val)
    },
    containsStr: function(val) {
      return parseAttr('containsStr')(key, val)
    },
    endsWithStr: function(val) {
      return parseAttr('endsWithStr')(key, val)
    },
    equals: function(val) {
      return parseAttr('equals')(key, val)
    },
    is: '[' + key + ']',
    starts: function(val) {
      return parseAttr('starts')(key, val)
    },
    startsWithStr: function(val) {
      return parseAttr('startsWithStr')(key, val)
    },
  }
}
