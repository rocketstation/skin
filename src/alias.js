const cc = require('@rocketstation/change-case')

module.exports = {
  align: function(v) {
    switch (v) {
      case 'left':
        return {
          textAlign: 'left',
        }

      case 'right':
        return {
          textAlign: 'right',
        }

      case 'center':
        return {
          textAlign: 'center',
        }

      case 'stretch':
        return {
          textAlign: 'justify',
        }
    }
  },
  alignContent: function(v) {
    switch (v) {
      case 'start':
        return {
          alignItems: 'flex-start',
        }

      case 'end':
        return {
          alignItems: 'flex-end',
        }

      case 'center':
        return {
          alignItems: 'center',
        }

      case 'stretch':
        return {
          alignItems: 'stretch',
        }
    }
  },
  alignMajor: function(v) {
    switch (v) {
      case 'start':
        return {
          justifyItems: 'start',
        }

      case 'end':
        return {
          justifyItems: 'end',
        }

      case 'center':
        return {
          justifyItems: 'center',
        }

      case 'stretch':
        return {
          justifyItems: 'stretch',
        }
    }
  },
  alignMinor: function(v) {
    switch (v) {
      case 'start':
        return {
          alignItems: 'start',
        }

      case 'end':
        return {
          alignItems: 'end',
        }

      case 'center':
        return {
          alignItems: 'center',
        }

      case 'stretch':
        return {
          alignItems: 'stretch',
        }
    }
  },
  alignSelf: function(v) {
    switch (v) {
      case 'start':
        return {
          alignSelf: 'flex-start',
        }

      case 'end':
        return {
          alignSelf: 'flex-end',
        }

      case 'center':
        return {
          alignSelf: 'center',
        }

      case 'stretch':
        return {
          alignSelf: 'stretch',
        }
    }
  },
  alignSelfMajor: function(v) {
    switch (v) {
      case 'start':
        return {
          justifySelf: 'start',
        }

      case 'end':
        return {
          justifySelf: 'end',
        }

      case 'center':
        return {
          justifySelf: 'center',
        }

      case 'stretch':
        return {
          justifySelf: 'stretch',
        }
    }
  },
  alignSelfMinor: function(v) {
    switch (v) {
      case 'start':
        return {
          alignSelf: 'start',
        }

      case 'end':
        return {
          alignSelf: 'end',
        }

      case 'center':
        return {
          alignSelf: 'center',
        }

      case 'stretch':
        return {
          alignSelf: 'stretch',
        }
    }
  },
  animation: function(v) {
    return {
      animationName: v,
    }
  },
  animationCount: function(v) {
    return {
      animationIterationCount: []
        .concat(v)
        .map(function(v) {
          return v === true ? 'infinite' : v
        })
        .join(','),
    }
  },
  animationDelay: function(v) {
    return {
      animationDelay: []
        .concat(v)
        .map(function(v) {
          return typeof v === 'number' ? v + 'ms' : v
        })
        .join(','),
    }
  },
  animationDirection: function(v) {
    return {
      animationDirection: []
        .concat(v)
        .map(function(v) {
          switch (v) {
            case 1:
              return 'normal'

            case -1:
              return 'reverse'

            case 2:
              return 'alternate'

            case -2:
              return 'alternate-reverse'
          }
        })
        .join(','),
    }
  },
  animationDuration: function(v) {
    return {
      animationDuration: []
        .concat(v)
        .map(function(v) {
          return typeof v === 'number' ? v + 'ms' : v
        })
        .join(','),
    }
  },
  animationFn: function(v) {
    return {
      animationTimingFunction: [].concat(v).join(','),
    }
  },
  animationIsActive: function(v) {
    return {
      animationPlayState: []
        .concat(v)
        .map(function(v) {
          return v ? 'running' : 'paused'
        })
        .join(','),
    }
  },
  animationOrigin: function(v) {
    return {
      animationFillingMode: []
        .concat(v)
        .map(function(v) {
          switch (v) {
            case false:
              return 'none'

            case true:
              return 'both'

            case 1:
              return 'forwards'

            case -1:
              return 'backwards'
          }
        })
        .join(','),
    }
  },
  bg: function(v) {
    return {
      backgroundImage:
        v === false
          ? 'none'
          : []
              .concat(v)
              .map(function(v) {
                if (typeof v === 'object') {
                  var key
                  var val

                  for (var k in v) {
                    if (v.hasOwnProperty(k)) {
                      key = k
                      val = v[k]
                        .map(function(v) {
                          return typeof v === 'object'
                            ? v[0] + ' ' + v[1] + '%'
                            : v
                        })
                        .join(',')
                    }
                  }

                  return key === 'radial'
                    ? 'radial-gradient' + '(' + val + ')'
                    : 'linear-gradient' + '(' + key + 'deg' + ',' + val + ')'
                }

                return 'url' + '(' + v + ')'
              })
              .join(','),
    }
  },
  bgMove: function(v) {
    return {
      backgroundPosition: []
        .concat(v)
        .map(function(v) {
          if (typeof v === 'object') {
            var next = []

            for (var k in v) {
              if (v.hasOwnProperty(k)) {
                var val = k

                if (v[k] !== true) {
                  val +=
                    ' ' +
                    (typeof v[k] === 'number' && v[k] !== 0
                      ? v[k] + 'rem'
                      : v[k])
                }

                next.push(val)
              }
            }

            return next.join(' ')
          }

          return v
        })
        .join(','),
    }
  },
  bgOrigin: function(v) {
    return {
      backgroundOrigin: []
        .concat(v)
        .map(function(v) {
          switch (v) {
            case 'border':
              return 'border-box'

            case 'space':
              return 'padding-box'

            case 'content':
              return 'content-box'
          }
        })
        .join(','),
    }
  },
  bgOverflow: function(v) {
    return {
      backgroundClip: []
        .concat(v)
        .map(function(v) {
          switch (v) {
            case 'border':
              return 'border-box'

            case 'space':
              return 'padding-box'

            case 'content':
              return 'content-box'
          }
        })
        .join(','),
    }
  },
  bgPosition: function(v) {
    return {
      backgroundAttachment: []
        .concat(v)
        .map(function(v) {
          switch (v) {
            case 'local':
              return 'local'

            case 'global':
              return 'scroll'

            case false:
              return 'fixed'
          }
        })
        .join(','),
    }
  },
  bgRepeat: function(v) {
    return {
      backgroundRepeat: []
        .concat(v)
        .map(function(v) {
          switch (v) {
            case true:
              return 'repeat'

            case false:
              return 'no-repeat'

            case 'col':
              return 'repeat-y'

            case 'row':
              return 'repeat-x'
          }
        })
        .join(','),
    }
  },
  bgSize: function(v) {
    return {
      backgroundSize: []
        .concat(v)
        .map(function(v) {
          switch (v) {
            case 'fill':
              return 'cover'

            case 'fit':
              return 'contain'

            case 'auto':
              return 'auto'
          }

          if (typeof v === 'object') {
            var width = v.width || 'auto'
            var height = v.height || 'auto'
            if (typeof height === 'number' && height !== 0) height += 'rem'
            if (typeof width === 'number' && width !== 0) width += 'rem'
            return width + ' ' + height
          }
        })
        .join(','),
    }
  },
  borderColor: function(v) {
    if (typeof v === 'object') {
      var rules = {}

      for (var k in v) {
        if (v.hasOwnProperty(k)) {
          switch (k) {
            case 'left':
              rules.borderLeftColor = v[k]
              break

            case 'right':
              rules.borderRightColor = v[k]
              break

            case 'top':
              rules.borderTopColor = v[k]
              break

            case 'bottom':
              rules.borderBottomColor = v[k]
              break

            case 'row':
              rules.borderLeftColor = v[k]
              rules.borderRightColor = v[k]
              break

            case 'col':
              rules.borderTopColor = v[k]
              rules.borderBottomColor = v[k]
              break
          }
        }
      }

      return rules
    }

    return {
      borderBottomColor: v,
      borderLeftColor: v,
      borderRightColor: v,
      borderTopColor: v,
    }
  },
  borderKind: function(v) {
    var rules = {}

    if (typeof v === 'object') {
      for (var k in v) {
        if (v.hasOwnProperty(k)) {
          switch (k) {
            case 'left':
              rules.borderLeftStyle = v[k]
              break

            case 'right':
              rules.borderRightStyle = v[k]
              break

            case 'top':
              rules.borderTopStyle = v[k]
              break

            case 'bottom':
              rules.borderBottomStyle = v[k]
              break

            case 'row':
              rules.borderLeftStyle = v[k]
              rules.borderRightStyle = v[k]
              break

            case 'col':
              rules.borderTopStyle = v[k]
              rules.borderBottomStyle = v[k]
              break
          }
        }
      }
    } else {
      rules.borderBottomStyle = v
      rules.borderLeftStyle = v
      rules.borderRightStyle = v
      rules.borderTopStyle = v
    }

    for (var rule in rules) {
      if (rules.hasOwnProperty(rule)) {
        switch (rules[rule]) {
          case true:
            rules[rule] = 'solid'
            break

          case false:
            rules[rule] = 'none'
            break
        }
      }
    }

    return rules
  },
  borderSize: function(v) {
    if (typeof v === 'object') {
      var rules = {}

      for (var k in v) {
        if (v.hasOwnProperty(k)) {
          switch (k) {
            case 'left':
              rules.borderLeftWidth = v[k]
              break

            case 'right':
              rules.borderRightWidth = v[k]
              break

            case 'top':
              rules.borderTopWidth = v[k]
              break

            case 'bottom':
              rules.borderBottomWidth = v[k]
              break

            case 'row':
              rules.borderLeftWidth = v[k]
              rules.borderRightWidth = v[k]
              break

            case 'col':
              rules.borderTopWidth = v[k]
              rules.borderBottomWidth = v[k]
              break
          }
        }
      }

      return rules
    }

    return {
      borderBottomWidth: v,
      borderLeftWidth: v,
      borderRightWidth: v,
      borderTopWidth: v,
    }
  },
  case: function(v) {
    switch (v) {
      case 'lower':
        return {
          textTransform: 'lowercase',
        }

      case 'upper':
        return {
          textTransform: 'uppercase',
        }

      case false:
        return {
          textTransform: 'none',
        }
    }
  },
  colEnd: function(v) {
    var next = [].concat(v)
    if (next[1]) next[0] = 'span' + ' ' + next[0]
    return {
      gridColumnEnd: next[0],
    }
  },
  colorBox: function(v) {
    return {
      backgroundColor: v,
    }
  },
  colorText: function(v) {
    return {
      color: v,
    }
  },
  cols: function(v) {
    return {
      gridTemplateColumns:
        v === false
          ? 'none'
          : []
              .concat(v)
              .map(function(v) {
                var key
                var val

                if (Array.isArray(v)) {
                  key = key === 'fill' || key === 'fit' ? 'auto-' + v : v
                  val = v[1]
                } else val = v

                switch (true) {
                  case typeof val === 'object': {
                    var min = val.hasOwnProperty('min')
                      ? typeof val.min === 'number' && val.min !== 0
                        ? val.min + 'fr'
                        : val.min
                      : 'auto'
                    var max = val.hasOwnProperty('max')
                      ? typeof val.max === 'number' && val.max !== 0
                        ? val.max + 'fr'
                        : val.max
                      : 'auto'
                    val = 'minmax' + '(' + min + ',' + max + ')'
                    break
                  }

                  case typeof val === 'number' && val !== 0:
                    val += 'fr'
                    break
                }

                return key != null ? 'repeat' + '(' + key + '' + ')' : val
              })
              .join(' '),
    }
  },
  colsPseudo: function(v) {
    return {
      gridAutoColumns:
        v === false
          ? 'none'
          : []
              .concat(v)
              .map(function(v) {
                var key
                var val

                if (Array.isArray(v)) {
                  key = key === 'fill' || key === 'fit' ? 'auto-' + v : v
                  val = v[1]
                } else val = v

                switch (true) {
                  case typeof val === 'object': {
                    var min = val.hasOwnProperty('min')
                      ? typeof val.min === 'number' && val.min !== 0
                        ? val.min + 'fr'
                        : val.min
                      : 'auto'
                    var max = val.hasOwnProperty('max')
                      ? typeof val.max === 'number' && val.max !== 0
                        ? val.max + 'fr'
                        : val.max
                      : 'auto'
                    val = 'minmax' + '(' + min + ',' + max + ')'
                    break
                  }

                  case typeof val === 'number' && val !== 0:
                    val += 'fr'
                    break
                }

                return key != null ? 'repeat' + '(' + key + '' + ')' : val
              })
              .join(' '),
    }
  },
  colStart: function(v) {
    return {
      gridColumnStart: v,
    }
  },
  content: function(v) {
    return {
      content: v === true ? '""' : v,
    }
  },
  corner: function(v) {
    var rules = {}

    if (typeof v === 'object' && !Array.isArray(v)) {
      for (var k in v) {
        if (v.hasOwnProperty(k)) {
          switch (k) {
            case 'left':
              rules.borderTopLeftRadius = v[k]
              rules.borderBottomLeftRadius = v[k]
              break

            case 'right':
              rules.borderTopRightRadius = v[k]
              rules.borderBottomRightRadius = v[k]
              break

            case 'top':
              rules.borderTopLeftRadius = v[k]
              rules.borderTopRightRadius = v[k]
              break

            case 'bottom':
              rules.borderBottomLeftRadius = v[k]
              rules.borderBottomRightRadius = v[k]
              break

            case 'leftTop':
              rules.borderTopLeftRadius = v[k]
              break

            case 'rightTop':
              rules.borderTopRightRadius = v[k]
              break

            case 'leftBottom':
              rules.borderBottomLeftRadius = v[k]
              break

            case 'rightBottom':
              rules.borderBottomRightRadius = v[k]
              break
          }
        }
      }
    } else {
      rules.borderBottomLeftRadius = v
      rules.borderBottomRightRadius = v
      rules.borderTopLeftRadius = v
      rules.borderTopRightRadius = v
    }

    for (var rule in rules) {
      if (rules.hasOwnProperty(rule)) {
        var val = rules[rule]

        switch (true) {
          case typeof val === 'number' && val !== 0:
            rules[rule] += 'px'
            break

          case typeof val === 'object': {
            var row = val[0]
            var col = val[1]

            if (typeof row === 'number' && row !== 0) row += 'px'
            if (typeof col === 'number' && col !== 0) col += 'px'

            rules[rule] = row + '/' + col
            break
          }
        }
      }
    }

    return rules
  },
  custom: function(v) {
    return v
  },
  decoration: function(v) {
    switch (v) {
      case 'top':
        return {
          textDecoration: 'overline',
        }

      case 'center':
        return {
          textDecoration: 'line-through',
        }

      case 'bottom':
        return {
          textDecoration: 'underline',
        }

      case false:
        return {
          textDecoration: 'none',
        }
    }
  },
  direction: function(v) {
    var next = [].concat(v)
    if (next[0] === 'col') next[0] = 'column'
    if (next[1]) next[0] += '-reverse'
    return {
      flexDirection: next[0],
    }
  },
  fill: function(v) {
    return {
      fill: v,
    }
  },
  font: function(v) {
    return {
      fontFamily: [].concat(v).join(','),
    }
  },
  grow: function(v) {
    return {
      flexGrow: v,
    }
  },
  hasSuffix: function(v) {
    return {
      textOverflow: v ? 'ellipsis' : 'clip',
    }
  },
  height: function(v) {
    return {
      height: v,
    }
  },
  heightMax: function(v) {
    return {
      maxHeight: v === false ? 'none' : v,
    }
  },
  heightMin: function(v) {
    return {
      minHeight: v,
    }
  },
  isInteractive: function(v) {
    return {
      cursor: v ? 'pointer' : 'auto',
    }
  },
  isItalic: function(v) {
    return {
      fontStyle: v ? 'italic' : 'normal',
    }
  },
  kind: function(v) {
    switch (v) {
      case 1:
        return {
          display: 'flex',
        }

      case 2:
        return {
          display: 'grid',
        }

      case false:
        return {
          display: 'none',
        }

      case 'box':
        return {
          display: 'block',
        }

      case 'text':
        return {
          display: 'inline',
        }
    }
  },
  line: function(v) {
    return {
      lineHeight: v,
    }
  },
  modify: function(v) {
    if (v === false) {
      return { transform: 'none' }
    }

    if (typeof v === 'object') {
      var fns = []

      for (var k in v) {
        if (v.hasOwnProperty(k)) {
          fns.push(k + '(' + [].concat(v[k]).join(',') + ')')
        }
      }

      return {
        transform: fns.join(' '),
      }
    }

    return { transform: v }
  },
  move: function(v) {
    if (typeof v === 'object') {
      var rules = {}

      for (var k in v) {
        if (v.hasOwnProperty(k)) {
          switch (k) {
            case 'left':
              rules.left = v[k]
              break

            case 'right':
              rules.right = v[k]
              break

            case 'top':
              rules.top = v[k]
              break

            case 'bottom':
              rules.bottom = v[k]
              break

            case 'row':
              rules.left = v[k]
              rules.right = v[k]
              break

            case 'col':
              rules.top = v[k]
              rules.bottom = v[k]
              break
          }
        }
      }

      return rules
    }

    return {
      bottom: v,
      left: v,
      right: v,
      top: v,
    }
  },
  mustBreakWords: function(v) {
    return {
      overflowWrap: v ? 'break-word' : 'normal',
    }
  },
  mustHandleEvents: function(v) {
    return {
      pointerEvents: v ? 'auto' : 'none',
    }
  },
  opacity: function(v) {
    return {
      opacity: v / 100,
    }
  },
  orderMajor: function(v) {
    return {
      order: v,
    }
  },
  orderMinor: function(v) {
    return {
      zIndex: v,
    }
  },
  origin: function(v) {
    return {
      flexBasis: v,
    }
  },
  overflowCol: function(v) {
    switch (v) {
      case true:
        return {
          overflowY: 'visible',
        }

      case false:
        return {
          overflowY: 'hidden',
        }
    }

    var next = [].concat(v)
    if (next[0] === 'auto') {
      return {
        overflowY: next[1] ? 'scroll' : 'auto',
      }
    }
  },
  overflowDirection: function(v) {
    switch (v) {
      case false:
        return {
          flexWrap: 'nowrap',
        }

      case 1:
        return {
          flexWrap: 'wrap',
        }

      case -1:
        return {
          flexWrap: 'wrap-reverse',
        }
    }
  },
  overflowRow: function(v) {
    switch (v) {
      case true:
        return {
          overflowX: 'visible',
        }

      case false:
        return {
          overflowX: 'hidden',
        }
    }

    var next = [].concat(v)
    if (next[0] === 'auto') {
      return {
        overflowX: next[1] ? 'scroll' : 'auto',
      }
    }
  },
  placeContent: function(v) {
    switch (v) {
      case 'start':
        return {
          justifyContent: 'flex-start',
        }

      case 'end':
        return {
          justifyContent: 'flex-end',
        }

      case 'center':
        return {
          justifyContent: 'center',
        }

      case 'space-between':
        return {
          justifyContent: 'space-between',
        }
    }

    var next = [].concat(v)

    if (next[0] === 'space-around') {
      return {
        justifyContent: next[1] ? 'space-evenly' : 'space-around',
      }
    }
  },
  placeDirection: function(v) {
    switch (v) {
      case 'col':
        return {
          gridAutoFlow: 'column',
        }

      case 'row':
        return {
          gridAutoFlow: 'row',
        }
    }
  },
  placeMajor: function(v) {
    switch (v) {
      case 'start':
        return {
          justifyContent: 'start',
        }

      case 'end':
        return {
          justifyContent: 'end',
        }

      case 'center':
        return {
          justifyContent: 'center',
        }

      case 'space-between':
        return {
          justifyContent: 'space-between',
        }
    }

    var next = [].concat(v)

    if (next[0] === 'space-around') {
      return {
        justifyContent: next[1] ? 'space-evenly' : 'space-around',
      }
    }
  },
  placeMinor: function(v) {
    switch (v) {
      case 'start':
        return {
          alignContent: 'start',
        }

      case 'end':
        return {
          alignContent: 'end',
        }

      case 'center':
        return {
          alignContent: 'center',
        }

      case 'space-between':
        return {
          alignContent: 'space-between',
        }
    }

    var next = [].concat(v)

    if (next[0] === 'space-around') {
      return {
        alignContent: next[1] ? 'space-evenly' : 'space-around',
      }
    }
  },
  position: function(v) {
    switch (v) {
      case false:
        return {
          position: 'fixed',
        }

      case 'absolute':
        return {
          position: 'absolute',
        }

      case 'relative':
        return {
          position: 'relative',
        }

      case true:
        return {
          position: 'static',
        }
    }
  },
  rowEnd: function(v) {
    var next = [].concat(v)
    if (next[1]) next[0] = 'span' + ' ' + next[0]
    return {
      gridRowEnd: next[0],
    }
  },
  rows: function(v) {
    return {
      gridTemplateRows:
        v === false
          ? 'none'
          : []
              .concat(v)
              .map(function(v) {
                var key
                var val

                if (Array.isArray(v)) {
                  key = key === 'fill' || key === 'fit' ? 'auto-' + v : v
                  val = v[1]
                } else val = v

                switch (true) {
                  case typeof val === 'object': {
                    var min = val.hasOwnProperty('min')
                      ? typeof val.min === 'number' && val.min !== 0
                        ? val.min + 'fr'
                        : val.min
                      : 'auto'
                    var max = val.hasOwnProperty('max')
                      ? typeof val.max === 'number' && val.max !== 0
                        ? val.max + 'fr'
                        : val.max
                      : 'auto'
                    val = 'minmax' + '(' + min + ',' + max + ')'
                    break
                  }

                  case typeof val === 'number' && val !== 0:
                    val += 'fr'
                    break
                }

                return key != null ? 'repeat' + '(' + key + '' + ')' : val
              })
              .join(' '),
    }
  },
  rowsPseudo: function(v) {
    return {
      gridAutoRows: []
        .concat(v)
        .map(function(v) {
          var key
          var val

          if (Array.isArray(v)) {
            key = key === 'fill' || key === 'fit' ? 'auto-' + v : v
            val = v[1]
          } else val = v

          switch (true) {
            case typeof val === 'object': {
              var min = val.hasOwnProperty('min')
                ? typeof val.min === 'number' && val.min !== 0
                  ? val.min + 'fr'
                  : val.min
                : 'auto'
              var max = val.hasOwnProperty('max')
                ? typeof val.max === 'number' && val.max !== 0
                  ? val.max + 'fr'
                  : val.max
                : 'auto'
              val = 'minmax' + '(' + min + ',' + max + ')'
              break
            }

            case typeof val === 'number' && val !== 0:
              val += 'fr'
              break
          }

          return key != null ? 'repeat' + '(' + key + '' + ')' : val
        })
        .join(' '),
    }
  },
  rowStart: function(v) {
    return {
      gridRowStart: v,
    }
  },
  shadowBox: function(v) {
    return {
      boxShadow:
        v === false
          ? 'none'
          : []
              .concat(v)
              .map(function(v) {
                if (typeof v === 'object') {
                  var shadow = [
                    v.row
                      ? typeof v.row === 'number' && v.row !== 0
                        ? v.row + 'px'
                        : v.row
                      : 0,
                    v.col
                      ? typeof v.col === 'number' && v.col !== 0
                        ? v.col + 'px'
                        : v.col
                      : 0,
                    v.blur
                      ? typeof v.blur === 'number' && v.blur !== 0
                        ? v.blur + 'px'
                        : v.blur
                      : 0,
                    v.size
                      ? typeof v.size === 'number' && v.size !== 0
                        ? v.size + 'px'
                        : v.size
                      : 0,
                  ]
                  if (v.color) shadow.push(v.color)
                  if (v.isReversed) shadow.push('inset')
                  return shadow.join(' ')
                }

                return v
              })
              .join(','),
    }
  },
  shadowText: function(v) {
    return {
      textShadow:
        v === false
          ? 'none'
          : []
              .concat(v)
              .map(function(v) {
                if (typeof v === 'object') {
                  var shadow = [
                    v.row
                      ? typeof v.row === 'number' && v.row !== 0
                        ? v.row + 'px'
                        : v.row
                      : 0,
                    v.col
                      ? typeof v.col === 'number' && v.col !== 0
                        ? v.col + 'px'
                        : v.col
                      : 0,
                    v.blur
                      ? typeof v.blur === 'number' && v.blur !== 0
                        ? v.blur + 'px'
                        : v.blur
                      : 0,
                  ]
                  if (v.color) shadow.push(v.color)
                  return shadow.join(' ')
                }

                return v
              })
              .join(','),
    }
  },
  shrink: function(v) {
    return {
      flexShrink: v,
    }
  },
  size: function(v) {
    return {
      fontSize: v,
    }
  },
  spaceBreak: function(v) {
    switch (v) {
      case false:
        return {
          whiteSpace: 'nowrap',
        }

      case true:
        return {
          whiteSpace: 'normal',
        }
    }

    var next = [].concat(v)

    if (next[0] === 'raw') {
      switch (next[1]) {
        case true:
          return {
            whiteSpace: 'pre-wrap',
          }

        case false:
          return {
            whiteSpace: 'pre-line',
          }
      }

      return {
        whiteSpace: 'pre',
      }
    }
  },
  spaceChar: function(v) {
    return {
      letterSpacing: v,
    }
  },
  spaceCol: function(v) {
    return {
      gridColumnGap: v,
    }
  },
  spaceInner: function(v) {
    if (typeof v === 'object') {
      var rules = {}

      for (var k in v) {
        if (v.hasOwnProperty(k)) {
          switch (k) {
            case 'left':
              rules.paddingLeft = v[k]
              break

            case 'right':
              rules.paddingRight = v[k]
              break

            case 'top':
              rules.paddingTop = v[k]
              break

            case 'bottom':
              rules.paddingBottom = v[k]
              break

            case 'row':
              rules.paddingLeft = v[k]
              rules.paddingRight = v[k]
              break

            case 'col':
              rules.paddingTop = v[k]
              rules.paddingBottom = v[k]
              break
          }
        }
      }

      return rules
    }

    return {
      paddingBottom: v,
      paddingLeft: v,
      paddingRight: v,
      paddingTop: v,
    }
  },
  spaceOuter: function(v) {
    if (typeof v === 'object') {
      var rules = {}

      for (var k in v) {
        if (v.hasOwnProperty(k)) {
          switch (k) {
            case 'left':
              rules.marginLeft = v[k]
              break

            case 'right':
              rules.marginRight = v[k]
              break

            case 'top':
              rules.marginTop = v[k]
              break

            case 'bottom':
              rules.marginBottom = v[k]
              break

            case 'row':
              rules.marginLeft = v[k]
              rules.marginRight = v[k]
              break

            case 'col':
              rules.marginTop = v[k]
              rules.marginBottom = v[k]
              break
          }
        }
      }

      return rules
    }

    return {
      marginBottom: v,
      marginLeft: v,
      marginRight: v,
      marginTop: v,
    }
  },
  spaceRow: function(v) {
    return {
      gridRowGap: v,
    }
  },
  spaceWord: function(v) {
    return {
      wordSpacing: v,
    }
  },
  strokeColor: function(v) {
    return {
      stroke: v,
    }
  },
  strokeDashes: function(v) {
    return {
      strokeDasharray: [].concat(v).join(' '),
    }
  },
  strokeSize: function(v) {
    return {
      strokeWidth: v,
    }
  },
  strokeSpace: function(v) {
    return {
      strokeDashoffset: v,
    }
  },
  template: function(v) {
    return {
      gridTemplateAreas: v
        .map(function(v) {
          return (
            '"' +
            []
              .concat(v)
              .map(function(v) {
                return v || '.'
              })
              .join(' ') +
            '"'
          )
        })
        .join(''),
    }
  },
  transition: function(v) {
    var rules = {
      transitionDelay: [],
      transitionDuration: [],
      transitionProperty: [],
      transitionTimingFunction: [],
    }

    for (var key in v) {
      if (v.hasOwnProperty(key)) {
        var val = v[key]
        if (typeof val !== 'object') {
          val = {
            duration: val,
          }
        }

        switch (key) {
          case 'colorBox':
            rules.transitionProperty.push('background-color')
            break

          case 'colorText':
            rules.transitionProperty.push('color')
            break

          case 'modify':
            rules.transitionProperty.push('transform')
            break

          default:
            rules.transitionProperty.push(cc.k(key))
        }

        rules.transitionDelay.push(
          val.hasOwnProperty('delay')
            ? typeof val.delay === 'number'
              ? val.delay + 'ms'
              : val.delay
            : '0ms'
        )
        rules.transitionDuration.push(
          val.hasOwnProperty('duration')
            ? typeof val.duration === 'number'
              ? val.duration + 'ms'
              : val.duration
            : '0ms'
        )
        rules.transitionTimingFunction.push(
          val.hasOwnProperty('fn') ? val.fn : 'ease'
        )
      }
    }

    for (var rule in rules) {
      if (rules.hasOwnProperty(rule)) {
        rules[rule] = rules[rule].join(',')
      }
    }

    return rules
  },
  weight: function(v) {
    return {
      fontWeight: v,
    }
  },
  width: function(v) {
    return {
      width: v,
    }
  },
  widthMax: function(v) {
    return {
      maxWidth: v === false ? 'none' : v,
    }
  },
  widthMin: function(v) {
    return {
      minWidth: v,
    }
  },
}
