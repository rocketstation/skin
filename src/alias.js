const cc = require('@rocketstation/change-case')

module.exports = {
  align: function(v) {
    var rules = {}
    rules.textAlign = v === 'stretch' ? 'justify' : v
    return rules
  },
  alignContent: function(v) {
    return {
      alignItems: v === 'start' || v === 'end' ? 'flex-' + v : v,
    }
  },
  alignMajor: function(v) {
    return {
      justifyItems: v,
    }
  },
  alignMinor: function(v) {
    return {
      alignItems: v,
    }
  },
  alignSelf: function(v) {
    return {
      alignSelf: v === 'start' || v === 'end' ? 'flex-' + v : v,
    }
  },
  alignSelfMajor: function(v) {
    return {
      justifySelf: v,
    }
  },
  alignSelfMinor: function(v) {
    return {
      alignSelf: v,
    }
  },
  animation: function(v) {
    return {
      animationName: v,
    }
  },
  animationCount: function(v) {
    if (v == null) return {}
    return {
      animationIterationCount:
        v.constructor === Array
          ? v.reduce(function(r, v) {
              return r + (r.length ? ',' : '') + (v === true ? 'infinite' : v)
            }, '')
          : v === true
          ? 'infinite'
          : v,
    }
  },
  animationDelay: function(v) {
    if (v == null) return {}
    return {
      animationDelay:
        v.constructor === Array
          ? v.reduce(function(r, v) {
              return (
                r +
                (r.length ? ',' : '') +
                (typeof v === 'number' ? v + 'ms' : v)
              )
            }, '')
          : typeof v === 'number'
          ? v + 'ms'
          : v,
    }
  },
  animationDirection: function(v) {
    if (v == null) return {}

    if (v.constructor === Array) {
      return {
        animationDirection: v.reduce(function(r, v) {
          switch (v) {
            case -1:
              return r + (r.length ? ',' : '') + 'reverse'

            case -2:
              return r + (r.length ? ',' : '') + 'alternate-reverse'

            case 2:
              return r + (r.length ? ',' : '') + 'alternate'

            case 1:
              return r + (r.length ? ',' : '') + 'normal'

            default:
              return r
          }
        }, ''),
      }
    }

    switch (v) {
      case 1:
        return {
          animationDirection: 'normal',
        }

      case -1:
        return {
          animationDirection: 'reverse',
        }

      case 2:
        return {
          animationDirection: 'alternate',
        }

      case -2:
        return {
          animationDirection: 'alternate-reverse',
        }

      default:
        return {}
    }
  },
  animationDuration: function(v) {
    if (v == null) return {}
    return {
      animationDuration:
        v.constructor === Array
          ? v.reduce(function(r, v) {
              return (
                r +
                (r.length ? ',' : '') +
                (typeof v === 'number' ? v + 'ms' : v)
              )
            }, '')
          : typeof v === 'number'
          ? v + 'ms'
          : v,
    }
  },
  animationFn: function(v) {
    if (v == null) return {}
    return {
      animationTimingFunction: v.constructor === Array ? v.join(',') : v,
    }
  },
  animationIsActive: function(v) {
    if (v == null) return {}
    return {
      animationPlayState:
        v.constructor === Array
          ? v.reduce(function(r, v) {
              return r + (r.length ? ',' : '') + (v ? 'running' : 'paused')
            }, '')
          : v
          ? 'running'
          : 'paused',
    }
  },
  animationOrigin: function(v) {
    if (v == null) return {}

    if (v.constructor === Array) {
      return {
        animationFillingMode: v.reduce(function(r, v) {
          switch (v) {
            case false:
              return r + (r.length ? ',' : '') + 'none'

            case true:
              return r + (r.length ? ',' : '') + 'both'

            case 1:
              return r + (r.length ? ',' : '') + 'forwards'

            case -1:
              return r + (r.length ? ',' : '') + 'backwards'

            default:
              return r
          }
        }, ''),
      }
    }

    switch (v) {
      case false:
        return {
          animationFillingMode: 'none',
        }

      case true:
        return {
          animationFillingMode: 'both',
        }

      case 1:
        return {
          animationFillingMode: 'forwards',
        }

      case -1:
        return {
          animationFillingMode: 'backwards',
        }

      default:
        return {}
    }
  },
  bg: function(v) {
    if (v == null) return {}

    if (v === false) {
      return {
        backgroundImage: 'none',
      }
    }

    if (v.constructor === Array) {
      return {
        backgroundImage: v.reduce(function(r, v) {
          return r + (r.length ? ',' : '') + v
        }, ''),
      }
    }

    return {
      backgroundImage: v,
    }
  },
  bgMoveCol: function(v) {
    if (v == null) return {}
    return {
      backgroundPositionY:
        v.constructor === Array
          ? v.reduce(function(r, v) {
              return (
                r +
                (r.length ? ',' : '') +
                (typeof v === 'number' && v !== 0 ? v + 'rem' : v)
              )
            }, '')
          : v,
    }
  },
  bgMoveRow: function(v) {
    if (v == null) return {}
    return {
      backgroundPositionX:
        v.constructor === Array
          ? v.reduce(function(r, v) {
              return (
                r +
                (r.length ? ',' : '') +
                (typeof v === 'number' && v !== 0 ? v + 'rem' : v)
              )
            }, '')
          : v,
    }
  },
  bgOrigin: function(v) {
    if (v == null) return {}

    if (v.constructor === Array) {
      return {
        backgroundOrigin: v.reduce(function(r, v) {
          switch (v) {
            case 'border':
              return r + (r.length ? ',' : '') + 'border-box'

            case 'space':
              return r + (r.length ? ',' : '') + 'padding-box'

            case 'content':
              return r + (r.length ? ',' : '') + 'content-box'

            default:
              return r
          }
        }, ''),
      }
    }

    switch (v) {
      case 'border':
        return {
          backgroundOrigin: 'border-box',
        }

      case 'space':
        return {
          backgroundOrigin: 'padding-box',
        }

      case 'content':
        return {
          backgroundOrigin: 'content-box',
        }

      default:
        return {}
    }
  },
  bgOverflow: function(v) {
    if (v == null) return {}

    if (v.constructor === Array) {
      return {
        backgroundClip: v.reduce(function(r, v) {
          switch (v) {
            case 'border':
              return r + (r.length ? ',' : '') + 'border-box'

            case 'space':
              return r + (r.length ? ',' : '') + 'padding-box'

            case 'content':
              return r + (r.length ? ',' : '') + 'content-box'

            default:
              return r
          }
        }, ''),
      }
    }

    switch (v) {
      case 'border':
        return {
          backgroundClip: 'border-box',
        }

      case 'space':
        return {
          backgroundClip: 'padding-box',
        }

      case 'content':
        return {
          backgroundClip: 'content-box',
        }

      default:
        return {}
    }
  },
  bgPosition: function(v) {
    if (v == null) return {}

    if (v.constructor === Array) {
      return {
        backgroundAttachment: v.reduce(function(r, v) {
          switch (v) {
            case 'local':
              return r + (r.length ? ',' : '') + 'local'

            case 'global':
              return r + (r.length ? ',' : '') + 'scroll'

            case false:
              return r + (r.length ? ',' : '') + 'fixed'

            default:
              return r
          }
        }, ''),
      }
    }

    switch (v) {
      case 'local':
        return {
          backgroundAttachment: 'local',
        }

      case 'global':
        return {
          backgroundAttachment: 'scroll',
        }

      case false:
        return {
          backgroundAttachment: 'fixed',
        }

      default:
        return {}
    }
  },
  bgRepeat: function(v) {
    if (v == null) return {}

    if (v.constructor === Array) {
      return {
        backgroundRepeat: v.reduce(function(r, v) {
          switch (v) {
            case true:
              return r + (r.length ? ',' : '') + 'repeat'

            case false:
              return r + (r.length ? ',' : '') + 'no-repeat'

            case 'col':
              return r + (r.length ? ',' : '') + 'repeat-y'

            case 'row':
              return r + (r.length ? ',' : '') + 'repeat-x'

            default:
              return r
          }
        }, ''),
      }
    }

    switch (v) {
      case true:
        return {
          backgroundRepeat: 'repeat',
        }

      case false:
        return {
          backgroundRepeat: 'no-repeat',
        }

      case 'col':
        return {
          backgroundRepeat: 'repeat-y',
        }

      case 'row':
        return {
          backgroundRepeat: 'repeat-x',
        }

      default:
        return {}
    }
  },
  bgSize: function(v) {
    if (v == null) return {}

    if (v.constructor === Array) {
      return {
        backgroundSize: v.reduce(function(r, v) {
          switch (v) {
            case 'fill':
              return r + (r.length ? ',' : '') + 'cover'

            case 'fit':
              return r + (r.length ? ',' : '') + 'contain'

            case 'auto':
              return r + (r.length ? ',' : '') + 'auto'
          }

          if (typeof v === 'object') {
            var width = v.width || 'auto'
            var height = v.height || 'auto'
            if (typeof height === 'number' && height !== 0) height += 'rem'
            if (typeof width === 'number' && width !== 0) width += 'rem'
            return r + (r.length ? ',' : '') + width + ' ' + height
          }

          return r
        }, ''),
      }
    }

    switch (v) {
      case 'fill':
        return {
          backgroundSize: 'cover',
        }

      case 'fit':
        return {
          backgroundSize: 'contain',
        }

      case 'auto':
        return {
          backgroundSize: 'auto',
        }
    }

    if (typeof v === 'object') {
      var width = v.width || 'auto'
      var height = v.height || 'auto'
      if (typeof height === 'number' && height !== 0) height += 'rem'
      if (typeof width === 'number' && width !== 0) width += 'rem'
      return {
        backgroundSize: width + ' ' + height,
      }
    }

    return {}
  },
  borderColor: function(v) {
    var next

    if (typeof v === 'object') {
      var rules = {}

      for (var k in v) {
        if (Object.prototype.hasOwnProperty.call(v, k)) {
          next = v[k] === false ? 'transparent' : v[k]

          switch (k) {
            case 'left':
              rules.borderLeftColor = next
              break

            case 'right':
              rules.borderRightColor = next
              break

            case 'top':
              rules.borderTopColor = next
              break

            case 'bottom':
              rules.borderBottomColor = next
              break

            case 'row':
              rules.borderLeftColor = next
              rules.borderRightColor = next
              break

            case 'col':
              rules.borderTopColor = next
              rules.borderBottomColor = next
              break
          }
        }
      }

      return rules
    }

    next = v === false ? 'transparent' : v
    return {
      borderBottomColor: next,
      borderLeftColor: next,
      borderRightColor: next,
      borderTopColor: next,
    }
  },
  borderKind: function(v) {
    var next

    if (typeof v === 'object') {
      var rules = {}

      for (var k in v) {
        if (Object.prototype.hasOwnProperty.call(v, k)) {
          next = v[k]

          switch (next) {
            case true:
              next = 'solid'
              break

            case false:
              next = 'none'
              break
          }

          switch (k) {
            case 'left':
              rules.borderLeftStyle = next
              break

            case 'right':
              rules.borderRightStyle = next
              break

            case 'top':
              rules.borderTopStyle = next
              break

            case 'bottom':
              rules.borderBottomStyle = next
              break

            case 'row':
              rules.borderLeftStyle = next
              rules.borderRightStyle = next
              break

            case 'col':
              rules.borderTopStyle = next
              rules.borderBottomStyle = next
              break
          }
        }
      }

      return rules
    }

    next = v

    switch (next) {
      case true:
        next = 'solid'
        break

      case false:
        next = 'none'
        break
    }

    return {
      borderBottomStyle: next,
      borderLeftStyle: next,
      borderRightStyle: next,
      borderTopStyle: next,
    }
  },
  borderSize: function(v) {
    if (typeof v === 'object') {
      var rules = {}

      for (var k in v) {
        if (Object.prototype.hasOwnProperty.call(v, k)) {
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

      default:
        return {}
    }
  },
  colEnd: function(v) {
    if (v == null) return {}

    if (v.constructor === Array) {
      return {
        gridColumnEnd: v[1] === true ? 'span' + ' ' + v[0] : v[0],
      }
    }

    return {
      gridColumnEnd: v,
    }
  },
  colorBox: function(v) {
    if (v === false) {
      return {
        backgroundColor: 'transparent',
      }
    }

    return {
      backgroundColor: v,
    }
  },
  colorText: function(v) {
    if (v === false) {
      return {
        color: 'transparent',
      }
    }

    return {
      color: v,
    }
  },
  cols: function(v) {
    if (v == null) return {}

    if (v === false) {
      return {
        gridTemplateColumns: 'none',
      }
    }

    return {
      gridTemplateColumns:
        v.constructor === Array
          ? v.reduce(function(r, v) {
              return (
                r +
                (r.length ? ' ' : '') +
                (typeof v === 'number' && v !== 0 ? v + 'fr' : v)
              )
            }, '')
          : typeof v === 'number' && v !== 0
          ? v + 'fr'
          : v,
    }
  },
  colsPseudo: function(v) {
    if (v == null) return {}

    if (v === 'auto') {
      return {
        gridAutoColumns: 'auto',
      }
    }

    return {
      gridAutoColumns:
        v.constructor === Array
          ? v.reduce(function(r, v) {
              return (
                r +
                (r.length ? ' ' : '') +
                (typeof v === 'number' && v !== 0 ? v + 'fr' : v)
              )
            }, '')
          : typeof v === 'number' && v !== 0
          ? v + 'fr'
          : v,
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
    if (v == null) return {}
    var rules = {}

    if (typeof v === 'object' && v.constructor !== Array) {
      for (var k in v) {
        if (Object.prototype.hasOwnProperty.call(v, k)) {
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
      if (Object.prototype.hasOwnProperty.call(rules, rule)) {
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

      default:
        return {}
    }
  },
  direction: function(v) {
    if (v == null) return {}

    if (v.constructor === Array) {
      return {
        flexDirection:
          (v[0] === 'col' ? 'column' : v[0]) +
          (v[1] === true ? '-reverse' : ''),
      }
    }

    return {
      flexDirection: v === 'col' ? 'column' : v,
    }
  },
  fill: function(v) {
    if (v === false) {
      return {
        fill: 'transparent',
      }
    }

    return {
      fill: v,
    }
  },
  font: function(v) {
    if (v == null) return {}
    return {
      fontFamily: v.constructor === Array ? v.join(',') : v,
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
    switch (v) {
      case true:
        return {
          cursor: 'pointer',
        }

      case false:
        return {
          cursor: 'auto',
        }

      default:
        return {}
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

      default:
        return {}
    }
  },
  line: function(v) {
    return {
      lineHeight: v,
    }
  },
  modify: function(v) {
    if (v == null) return {}

    if (v === false) {
      return {
        transform: 'none',
      }
    }

    return {
      transform: v.constructor === Array ? v.join(' ') : v,
    }
  },
  modifyOrigin: function(v) {
    if (v == null) return {}

    if (v.constructor === Array) {
      return {
        transformOrigin: v.reduce(function(r, v, i, a) {
          return (
            r +
            (r.length ? ' ' : '') +
            (typeof v === 'number' && v !== 0 ? v + 'rem' : v)
          )
        }, ''),
      }
    }

    return {
      transformOrigin: typeof v === 'number' && v !== 0 ? v + 'rem' : v,
    }
  },
  move: function(v) {
    if (typeof v === 'object') {
      var rules = {}

      for (var k in v) {
        if (Object.prototype.hasOwnProperty.call(v, k)) {
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
  outlineColor: function(v) {
    if (v === false) {
      return {
        outlineColor: 'transparent',
      }
    }

    return {
      outlineColor: v,
    }
  },
  outlineKind: function(v) {
    if (v === true) {
      return {
        outlineStyle: 'solid',
      }
    }

    if (v === false) {
      return {
        outlineStyle: 'none',
      }
    }

    return {
      outlineStyle: v,
    }
  },
  outlineSize: function(v) {
    return {
      outlineWidth: v,
    }
  },
  outlineSpace: function(v) {
    return {
      outlineOffset: v,
    }
  },
  overflowCol: function(v) {
    if (v == null) return {}

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

    if (v.constructor === Array && v[0] === 'auto' && v[1] === true) {
      return {
        overflowY: 'scroll',
      }
    }

    return {
      overflowY: 'auto',
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

      default:
        return {}
    }
  },
  overflowRow: function(v) {
    if (v == null) return {}

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

    if (v.constructor === Array && v[0] === 'auto' && v[1] === true) {
      return {
        overflowX: 'scroll',
      }
    }

    return {
      overflowX: 'auto',
    }
  },
  placeContent: function(v) {
    if (v == null) return {}

    if (v.constructor === Array && v[0] === 'space-around' && v[1] === true) {
      return {
        justifyContent: 'space-evenly',
      }
    }

    return {
      justifyContent: v === 'start' || v === 'end' ? 'flex-' + v : v,
    }
  },
  placeDirection: function(v) {
    if (v == null) return {}

    if (v.constructor === Array && v[1] === true) {
      return {
        gridAutoFlow: (v[0] === 'col' ? 'column' : v[0]) + ' ' + 'dense',
      }
    }

    return {
      gridAutoFlow: v === 'col' ? 'column' : v,
    }
  },
  placeMajor: function(v) {
    if (v == null) return {}

    if (v.constructor === Array && v[0] === 'space-around' && v[1] === true) {
      return {
        justifyContent: 'space-evenly',
      }
    }

    return {
      justifyContent: v,
    }
  },
  placeMinor: function(v) {
    if (v == null) return {}

    if (v.constructor === Array && v[0] === 'space-around' && v[1] === true) {
      return {
        alignContent: 'space-evenly',
      }
    }

    return {
      alignContent: v,
    }
  },
  position: function(v) {
    if (v === false) {
      return {
        position: 'fixed',
      }
    }

    if (v === true) {
      return {
        position: 'static',
      }
    }

    return {
      position: v,
    }
  },
  rowEnd: function(v) {
    if (v == null) return {}

    if (v.constructor === Array) {
      return {
        gridRowEnd: v[1] === true ? 'span' + ' ' + v[0] : v[0],
      }
    }

    return {
      gridRowEnd: v,
    }
  },
  rows: function(v) {
    if (v == null) return {}

    if (v === false) {
      return {
        gridTemplateRows: 'none',
      }
    }

    return {
      gridTemplateRows:
        v.constructor === Array
          ? v.reduce(function(r, v) {
              return (
                r +
                (r.length ? ' ' : '') +
                (typeof v === 'number' && v !== 0 ? v + 'fr' : v)
              )
            }, '')
          : typeof v === 'number' && v !== 0
          ? v + 'fr'
          : v,
    }
  },
  rowsPseudo: function(v) {
    if (v == null) return {}

    if (v === 'auto') {
      return {
        gridAutoRows: 'auto',
      }
    }

    return {
      gridAutoRows:
        v.constructor === Array
          ? v.reduce(function(r, v) {
              return (
                r +
                (r.length ? ' ' : '') +
                (typeof v === 'number' && v !== 0 ? v + 'fr' : v)
              )
            }, '')
          : typeof v === 'number' && v !== 0
          ? v + 'fr'
          : v,
    }
  },
  rowStart: function(v) {
    return {
      gridRowStart: v,
    }
  },
  shadowBox: function(v) {
    if (v == null) return {}

    if (v === false) {
      return {
        boxShadow: 'none',
      }
    }

    if (v.constructor === Array) {
      return {
        boxShadow: v.reduce(function(r, v) {
          if (typeof v === 'object') {
            return (
              r +
              (r.length ? ',' : '') +
              (v.row
                ? typeof v.row === 'number' && v.row !== 0
                  ? v.row + 'px'
                  : v.row
                : 0) +
              ' ' +
              (v.col
                ? typeof v.col === 'number' && v.col !== 0
                  ? v.col + 'px'
                  : v.col
                : 0) +
              ' ' +
              (v.blur
                ? typeof v.blur === 'number' && v.blur !== 0
                  ? v.blur + 'px'
                  : v.blur
                : 0) +
              ' ' +
              (v.size
                ? typeof v.size === 'number' && v.size !== 0
                  ? v.size + 'px'
                  : v.size
                : 0) +
              (v.color ? ' ' + v.color : '') +
              (v.isReversed ? ' ' + 'inset' : '')
            )
          }

          return r + (r.length ? ',' : '') + v
        }, ''),
      }
    }

    if (typeof v === 'object') {
      return {
        boxShadow:
          (v.row
            ? typeof v.row === 'number' && v.row !== 0
              ? v.row + 'px'
              : v.row
            : 0) +
          ' ' +
          (v.col
            ? typeof v.col === 'number' && v.col !== 0
              ? v.col + 'px'
              : v.col
            : 0) +
          ' ' +
          (v.blur
            ? typeof v.blur === 'number' && v.blur !== 0
              ? v.blur + 'px'
              : v.blur
            : 0) +
          ' ' +
          (v.size
            ? typeof v.size === 'number' && v.size !== 0
              ? v.size + 'px'
              : v.size
            : 0) +
          (v.color ? ' ' + v.color : '') +
          (v.isReversed ? ' ' + 'inset' : ''),
      }
    }

    return {
      boxShadow: v,
    }
  },
  shadowText: function(v) {
    if (v == null) return {}

    if (v === false) {
      return {
        textShadow: 'none',
      }
    }

    if (v.constructor === Array) {
      return {
        textShadow: v.reduce(function(r, v) {
          if (typeof v === 'object') {
            return (
              r +
              (r.length ? ',' : '') +
              (v.row
                ? typeof v.row === 'number' && v.row !== 0
                  ? v.row + 'px'
                  : v.row
                : 0) +
              ' ' +
              (v.col
                ? typeof v.col === 'number' && v.col !== 0
                  ? v.col + 'px'
                  : v.col
                : 0) +
              ' ' +
              (v.blur
                ? typeof v.blur === 'number' && v.blur !== 0
                  ? v.blur + 'px'
                  : v.blur
                : 0) +
              (v.color ? ' ' + v.color : '')
            )
          }

          return r + (r.length ? ',' : '') + v
        }, ''),
      }
    }

    if (typeof v === 'object') {
      return {
        textShadow:
          (v.row
            ? typeof v.row === 'number' && v.row !== 0
              ? v.row + 'px'
              : v.row
            : 0) +
          ' ' +
          (v.col
            ? typeof v.col === 'number' && v.col !== 0
              ? v.col + 'px'
              : v.col
            : 0) +
          ' ' +
          (v.blur
            ? typeof v.blur === 'number' && v.blur !== 0
              ? v.blur + 'px'
              : v.blur
            : 0) +
          (v.color ? ' ' + v.color : ''),
      }
    }

    return {
      textShadow: v,
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
    if (v == null) return {}

    switch (v) {
      case false:
        return {
          whiteSpace: 'nowrap',
        }

      case true:
        return {
          whiteSpace: 'normal',
        }

      case 'raw':
        return {
          whiteSpace: 'pre',
        }
    }

    if (v.constructor === Array && v[0] === 'raw') {
      switch (v[1]) {
        case true:
          return {
            whiteSpace: 'pre-wrap',
          }

        case false:
          return {
            whiteSpace: 'pre-line',
          }
      }
    }

    return {}
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
        if (Object.prototype.hasOwnProperty.call(v, k)) {
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
        if (Object.prototype.hasOwnProperty.call(v, k)) {
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
    if (v == null) return {}
    return {
      strokeDasharray: v.constructor === Array ? v.join(' ') : v,
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
    if (v == null) return {}

    if (v.constructor === Array) {
      return {
        gridTemplateAreas: v.reduce(function(r, v) {
          return (
            r +
            '"' +
            (v.constructor === Array
              ? v.reduce(function(r, v) {
                  r += (r.length ? ' ' : '') + v
                  return r
                }, '')
              : v) +
            '"'
          )
        }, ''),
      }
    }

    return {
      gridTemplateAreas: v,
    }
  },
  textColsAmount: function(v) {
    return {
      columnCount: v,
    }
  },
  textColsBorderColor: function(v) {
    if (v === false) {
      return {
        columnRuleColor: 'transparent',
      }
    }

    return {
      columnRuleColor: v,
    }
  },
  textColsBorderKind: function(v) {
    if (v === true) {
      return {
        columnRuleStyle: 'solid',
      }
    }

    if (v === false) {
      return {
        columnRuleStyle: 'none',
      }
    }

    return {
      columnRuleStyle: v,
    }
  },
  textColsBorderSize: function(v) {
    return {
      columnRuleWidth: v,
    }
  },
  textColsSpace: function(v) {
    return {
      columnGap: v,
    }
  },
  textColsWidth: function(v) {
    return {
      columnWidth: v,
    }
  },
  transition: function(v) {
    if (v == null) return {}

    if (v === false) {
      return {
        transitionProperty: 'none',
      }
    }

    if (v.constructor === Array) {
      return {
        transitionProperty: v.reduce(function(r, v) {
          switch (v) {
            case 'colorBox':
              return r + (r.length ? ',' : '') + 'background-color'

            case 'colorText':
              return r + (r.length ? ',' : '') + 'color'

            case 'modify':
              return r + (r.length ? ',' : '') + 'transform'

            default:
              return r + (r.length ? ',' : '') + cc.k(v)
          }
        }, ''),
      }
    }

    switch (v) {
      case 'colorBox':
        return {
          transitionProperty: 'background-color',
        }

      case 'colorText':
        return {
          transitionProperty: 'color',
        }

      case 'modify':
        return {
          transitionProperty: 'transform',
        }

      default:
        return {
          transitionProperty: cc.k(v),
        }
    }
  },
  transitionDelay: function(v) {
    if (v == null) return {}
    return {
      transitionDelay:
        v.constructor === Array
          ? v.reduce(function(r, v) {
              return (
                r +
                (r.length ? ',' : '') +
                (typeof v === 'number' ? v + 'ms' : v)
              )
            }, '')
          : typeof v === 'number'
          ? v + 'ms'
          : v,
    }
  },
  transitionDuration: function(v) {
    if (v == null) return {}
    return {
      transitionDuration:
        v.constructor === Array
          ? v.reduce(function(r, v) {
              return (
                r +
                (r.length ? ',' : '') +
                (typeof v === 'number' ? v + 'ms' : v)
              )
            }, '')
          : typeof v === 'number'
          ? v + 'ms'
          : v,
    }
  },
  transitionFn: function(v) {
    if (v == null) return {}
    return {
      transitionTimingFunction: v.constructor === Array ? v.join(',') : v,
    }
  },
  weight: function(v) {
    return {
      fontWeight: v,
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
