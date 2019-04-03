var parser = require('./parser')

var checkIfObj = function(v) {
  return Object.prototype.toString.call(v) === '[object Object]'
}

var combine = function() {
  var skin = {}

  for (var i = 0; i < arguments.length; i++) {
    var argument = arguments[i]

    if (checkIfObj(argument)) {
      var next = parser(argument)

      for (var k in next) {
        if (next.hasOwnProperty(k)) {
          var v = next[k]

          if (checkIfObj(v) && checkIfObj(skin[k])) Object.assign(skin[k], v)
          else skin[k] = v
        }
      }
    }
  }

  return skin
}

var parseAttr = function(v) {
  if (typeof v === 'object') {
    var next = v.key

    var val = v.val
    var modifier = v.modifier || 'equals'
    var isNot = v.isNot

    if (val) {
      switch (modifier) {
        case 'equals':
          next += '=' + val
          break

        case 'contains':
          next += '~=' + val
          break

        case 'starts':
          next += '|=' + val
          break

        case 'containsStr':
          next += '*=' + '"' + val + '"'
          break

        case 'startsWithStr':
          next += '^=' + '"' + val + '"'
          break

        case 'endsWithStr':
          next += '$=' + '"' + val + '"'
          break
      }
    }

    next = '[' + next + ']'

    return isNot ? ':not' + '(' + next + ')' : next
  }

  return '[' + v + ']'
}

var parseNth = function(v) {
  var next = (v.each || 0) + 'n' + '+' + (v.from || 0)

  next =
    ':' +
    (v.isReversed ? 'nth-last' : 'nth') +
    '-' +
    (v.isStrict ? 'of-type' : 'child') +
    '(' +
    next +
    ')'

  return v.isNot ? ':not' + '(' + next + ')' : next
}

var parseScreen = function(screen) {
  var queries = ['@media screen']

  for (var query in screen) {
    if (screen.hasOwnProperty(query)) {
      var val = screen[query]

      switch (query) {
        case 'from':
          queries.push('(min-width:' + val / 16 + 'em' + ')')
          break
        case 'to':
          queries.push('(max-width:' + (val - 1) / 16 + 'em' + ')')
          break
        default:
          queries.push('(' + query + ':' + val + ')')
      }
    }
  }

  return queries.join(' and ')
}

module.exports = function() {
  return {
    active: function(v) {
      var modifier = ':active'
      this.skin[modifier] = combine.apply(
        void 0,
        [this.skin[modifier]].concat(v)
      )
      return this
    },
    after: function(v) {
      var modifier = '::after'
      this.skin[modifier] = combine.apply(
        void 0,
        [this.skin[modifier]].concat(v)
      )
      return this
    },
    attr: function(k, v) {
      var modifier = parseAttr(k)
      this.skin[modifier] = combine.apply(
        void 0,
        [this.skin[modifier]].concat(v)
      )
      return this
    },
    before: function(v) {
      var modifier = '::before'
      this.skin[modifier] = combine.apply(
        void 0,
        [this.skin[modifier]].concat(v)
      )
      return this
    },
    children: function(v) {
      var modifier = '>*'
      this.skin[modifier] = combine.apply(
        void 0,
        [this.skin[modifier]].concat(v)
      )
      return this
    },
    class: function(k, v) {
      var modifier = '& .' + k
      this.skin[modifier] = combine.apply(
        void 0,
        [this.skin[modifier]].concat(v)
      )
      return this
    },
    first: function(v) {
      var modifier = ':first-child'
      this.skin[modifier] = combine.apply(
        void 0,
        [this.skin[modifier]].concat(v)
      )
      return this
    },
    focus: function(v) {
      var modifier = ':focus'
      this.skin[modifier] = combine.apply(
        void 0,
        [this.skin[modifier]].concat(v)
      )
      return this
    },
    highlight: function(v) {
      var modifier = '::selection'
      this.skin[modifier] = combine.apply(
        void 0,
        [this.skin[modifier]].concat(v)
      )
      return this
    },
    hover: function(v) {
      var modifier = ':hover'
      this.skin[modifier] = combine.apply(
        void 0,
        [this.skin[modifier]].concat(v)
      )
      return this
    },
    id: function(k, v) {
      var modifier = '& #' + k
      this.skin[modifier] = combine.apply(
        void 0,
        [this.skin[modifier]].concat(v)
      )
      return this
    },
    if: function(k, v) {
      var modifier = k
      this.skin[modifier] = combine.apply(
        void 0,
        [this.skin[modifier]].concat(v)
      )
      return this
    },
    last: function(v) {
      var modifier = ':last-child'
      this.skin[modifier] = combine.apply(
        void 0,
        [this.skin[modifier]].concat(v)
      )
      return this
    },
    nextMultiple: function(v) {
      var modifier = '&~*'
      this.skin[modifier] = combine.apply(
        void 0,
        [this.skin[modifier]].concat(v)
      )
      return this
    },
    nextSingle: function(v) {
      var modifier = '&+*'
      this.skin[modifier] = combine.apply(
        void 0,
        [this.skin[modifier]].concat(v)
      )
      return this
    },
    nth: function(k, v) {
      var modifier = parseNth(k)
      this.skin[modifier] = combine.apply(
        void 0,
        [this.skin[modifier]].concat(v)
      )
      return this
    },
    placeholder: function(v) {
      var modifier = '::placeholder'
      this.skin[modifier] = combine.apply(
        void 0,
        [this.skin[modifier]].concat(v)
      )
      return this
    },
    screen: function(k, v) {
      if (checkIfObj(k)) {
        var modifier = parseScreen(k)

        this.skin[modifier] = combine.apply(
          void 0,
          [this.skin[modifier]].concat(v)
        )
      } else {
        var to = parseScreen({ to: k })

        this.skin[to] = combine.apply(
          void 0,
          [this.skin[to]].concat(arguments[1])
        )

        var from = parseScreen({ from: k })

        this.skin[from] = combine.apply(
          void 0,
          [this.skin[from]].concat(arguments[2])
        )
      }

      return this
    },
    skin: combine.apply(void 0, arguments),
  }
}
