const cc = require('@rocketstation/change-case')

module.exports = {
  align: (v) => {
    const rules = {}

    switch (v) {
      case 'start':
        rules.textAlign = 'left'
        break

      case 'end':
        rules.textAlign = 'right'
        break

      case 'center':
        rules.textAlign = 'center'
        break

      case 'stretch':
        rules.textAlign = 'justify'
        break
    }

    return rules
  },
  alignMajor: (v) => {
    const rules = {}

    switch (v) {
      case 'start':
        rules.justifyItems = 'start'
        break

      case 'end':
        rules.justifyItems = 'end'
        break

      case 'center':
        rules.justifyItems = 'center'
        break

      case 'stretch':
        rules.justifyItems = 'stretch'
        break
    }

    return rules
  },
  alignMinor: (v) => {
    const rules = {}

    switch (v) {
      case 'start':
        rules.alignItems = ['flex-start', 'start']
        break

      case 'end':
        rules.alignItems = ['flex-end', 'end']
        break

      case 'center':
        rules.alignItems = 'center'
        break

      case 'stretch':
        rules.alignItems = 'stretch'
        break
    }

    return rules
  },
  alignSelfMajor: (v) => {
    const rules = {}

    switch (v) {
      case 'start':
        rules.justifySelf = 'start'
        break

      case 'end':
        rules.justifySelf = 'end'
        break

      case 'center':
        rules.justifySelf = 'center'
        break

      case 'stretch':
        rules.justifySelf = 'stretch'
        break
    }

    return rules
  },
  alignSelfMinor: (v) => {
    const rules = {}

    switch (v) {
      case 'start':
        rules.alignSelf = ['flex-start', 'start']
        break

      case 'end':
        rules.alignSelf = ['flex-end', 'end']
        break

      case 'center':
        rules.alignSelf = 'center'
        break

      case 'stretch':
        rules.alignSelf = 'stretch'
        break
    }

    return rules
  },
  animation: (v) => {
    const rules = {}
    rules.animationName = v
    return rules
  },
  animationCount: (v) => {
    const rules = {}
    rules.animationIterationCount = []
      .concat(v)
      .map((v) => (v === true ? 'infinite' : v))
      .join(',')
    return rules
  },
  animationDelay: (v) => {
    const rules = {}
    rules.animationDelay = []
      .concat(v)
      .map((v) => (typeof v === 'number' ? v + 'ms' : v))
      .join(',')
    return rules
  },
  animationDirection: (v) => {
    const rules = {}
    rules.animationDirection = []
      .concat(v)
      .map((v) => {
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
      .join(',')
    return rules
  },
  animationDuration: (v) => {
    const rules = {}
    rules.animationDuration = []
      .concat(v)
      .map((v) => (typeof v === 'number' ? v + 'ms' : v))
      .join(',')
    return rules
  },
  animationFn: (v) => {
    const rules = {}
    rules.animationTimingFunction = [].concat(v).join(',')
    return rules
  },
  animationIsActive: (v) => {
    const rules = {}
    rules.animationPlayState = []
      .concat(v)
      .map((v) => (v ? 'running' : 'paused'))
      .join(',')
    return rules
  },
  animationOrigin: (v) => {
    const rules = {}
    rules.animationFillingMode = []
      .concat(v)
      .map((v) => {
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
      .join(',')
    return rules
  },
  bg: (v) => {
    const rules = {}
    if (v === false) rules.backgroundImage = 'none'
    else
      rules.backgroundImage = []
        .concat(v)
        .map((v) => {
          if (typeof v === 'object') {
            const { direction = 0, bps = [] } = v
            return `${direction === true ? 'radial' : 'linear'}-gradient(${
              typeof direction === 'number' ? direction + 'deg' + ',' : ''
            }${bps
              .map((v) => (Array.isArray(v) ? `${v[0]} ${v[1]}%` : v))
              .join(',')})`
          } else return `url(${v})`
        })
        .join(',')
    return rules
  },
  bgMove: (v) => {
    const rules = {}
    rules.backgroundPosition = []
      .concat(v)
      .map((v) =>
        typeof v === 'object'
          ? Object.entries(v)
              .map(
                ([k, v]) => k + ' ' + (typeof v === 'number' ? v + 'rem' : v)
              )
              .join(' ')
          : v
      )
      .join(',')
    return rules
  },
  bgOrigin: (v) => {
    const rules = {}
    rules.backgroundOrigin = []
      .concat(v)
      .map((v) => {
        switch (v) {
          case 'border':
            return 'border-box'

          case 'space':
            return 'padding-box'

          case 'content':
            return 'content-box'
        }
      })
      .join(',')
    return rules
  },
  bgOverflow: (v) => {
    const rules = {}
    rules.backgroundClip = []
      .concat(v)
      .map((v) => {
        switch (v) {
          case 'border':
            return 'border-box'

          case 'space':
            return 'padding-box'

          case 'content':
            return 'content-box'
        }
      })
      .join(',')
    return rules
  },
  bgPosition: (v) => {
    const rules = {}
    rules.backgroundAttachment = []
      .concat(v)
      .map((v) => {
        switch (v) {
          case 'local':
            return 'local'

          case 'global':
            return 'scroll'

          case false:
            return 'fixed'
        }
      })
      .join(',')
    return rules
  },
  bgRepeat: (v) => {
    const rules = {}
    rules.backgroundRepeat = []
      .concat(v)
      .map((v) => {
        switch (v) {
          case true:
            return 'repeat'

          case false:
            return 'no-repeat'

          case 'row':
            return 'repeat-x'

          case 'col':
            return 'repeat-y'
        }
      })
      .join(',')
    return rules
  },
  bgSize: (v) => {
    const rules = {}
    rules.backgroundSize = []
      .concat(v)
      .map((v) => {
        switch (v) {
          case 'fill':
            return 'cover'

          case 'fit':
            return 'contain'

          case 'auto':
            return 'auto'
        }

        if (typeof v === 'object') {
          let { height = 'auto', width = 'auto' } = v
          if (typeof height === 'number') height += 'rem'
          if (typeof width === 'number') width += 'rem'
          return width + ' ' + height
        }
      })
      .join(',')
    return rules
  },
  borderColor: (v) => {
    const rules = {}

    if (typeof v === 'object') {
      const left = ['left', 'row'].find((k) => v.hasOwnProperty(k))
      const right = ['right', 'row'].find((k) => v.hasOwnProperty(k))
      const top = ['top', 'col'].find((k) => v.hasOwnProperty(k))
      const bottom = ['bottom', 'col'].find((k) => v.hasOwnProperty(k))
      if (left) rules.borderLeftColor = v[left]
      if (right) rules.borderRightColor = v[right]
      if (top) rules.borderTopColor = v[top]
      if (bottom) rules.borderBottomColor = v[bottom]
    } else {
      rules.borderLeftColor = v
      rules.borderRightColor = v
      rules.borderTopColor = v
      rules.borderBottomColor = v
    }

    return rules
  },
  borderKind: (v) => {
    const rules = {}

    if (typeof v === 'object') {
      const left = ['left', 'row'].find((k) => v.hasOwnProperty(k))
      const right = ['right', 'row'].find((k) => v.hasOwnProperty(k))
      const top = ['top', 'col'].find((k) => v.hasOwnProperty(k))
      const bottom = ['bottom', 'col'].find((k) => v.hasOwnProperty(k))

      if (left) {
        switch (v[left]) {
          case true:
            rules.borderLeftStyle = 'solid'
            break

          case false:
            rules.borderLeftStyle = 'none'
            break

          default:
            rules.borderLeftStyle = v[left]
        }
      }

      if (right) {
        switch (v[right]) {
          case true:
            rules.borderRightStyle = 'solid'
            break

          case false:
            rules.borderRightStyle = 'none'
            break

          default:
            rules.borderRightStyle = v[right]
        }
      }

      if (top) {
        switch (v[top]) {
          case true:
            rules.borderTopStyle = 'solid'
            break

          case false:
            rules.borderTopStyle = 'none'
            break

          default:
            rules.borderTopStyle = v[top]
        }
      }

      if (bottom) {
        switch (v[bottom]) {
          case true:
            rules.borderBottomStyle = 'solid'
            break

          case false:
            rules.borderBottomStyle = 'none'
            break

          default:
            rules.borderBottomStyle = v[bottom]
        }
      }
    } else {
      let kind

      switch (v) {
        case true:
          kind = 'solid'
          break

        case false:
          kind = 'none'
          break

        default:
          kind = v
      }

      rules.borderLeftStyle = kind
      rules.borderRightStyle = kind
      rules.borderTopStyle = kind
      rules.borderBottomStyle = kind
    }

    return rules
  },
  borderSize: (v) => {
    const rules = {}

    if (typeof v === 'object') {
      const left = ['left', 'row'].find((k) => v.hasOwnProperty(k))
      const right = ['right', 'row'].find((k) => v.hasOwnProperty(k))
      const top = ['top', 'col'].find((k) => v.hasOwnProperty(k))
      const bottom = ['bottom', 'col'].find((k) => v.hasOwnProperty(k))
      if (left) rules.borderLeftWidth = v[left]
      if (right) rules.borderRightWidth = v[right]
      if (top) rules.borderTopWidth = v[top]
      if (bottom) rules.borderBottomWidth = v[bottom]
    } else {
      rules.borderLeftWidth = v
      rules.borderRightWidth = v
      rules.borderTopWidth = v
      rules.borderBottomWidth = v
    }

    return rules
  },
  case: (v) => {
    const rules = {}

    switch (v) {
      case 'lower':
        rules.textTransform = 'lowercase'
        break

      case 'upper':
        rules.textTransform = 'uppercase'
        break

      case false:
        rules.textTransform = 'none'
        break
    }

    return rules
  },
  colEnd: (v) => {
    const rules = {}
    const [val, isRelative] = [].concat(v)
    rules.gridColumnEnd = isRelative ? `span ${val}` : val
    return rules
  },
  colorBox: (v) => {
    const rules = {}
    rules.backgroundColor = v
    return rules
  },
  colorText: (v) => {
    const rules = {}
    rules.color = v
    return rules
  },
  cols: (v) => {
    const rules = {}
    rules.gridTemplateColumns = []
      .concat(v)
      .map((v) => {
        if (v === false) return 'none'

        if (typeof v === 'object') {
          if (v.hasOwnProperty('repeat'))
            return `repeat(${[].concat(v.repeat).join(',')})`
          else {
            let { min = 'auto', max = 'auto' } = v
            min = typeof min === 'number' && min !== 0 ? min + 'fr' : min
            max = typeof max === 'number' && max !== 0 ? max + 'fr' : max
            return `minmax(${min},${max})`
          }
        }

        return typeof v === 'number' && v !== 0 ? v + 'fr' : v
      })
      .join(' ')
    return rules
  },
  colsPseudo: (v) => {
    const rules = {}

    switch (true) {
      case v === false:
        rules.gridAutoColumns = 'none'
        break

      case typeof v === 'object':
        if (v.hasOwnProperty('repeat'))
          rules.gridAutoColumns = `repeat(${[].concat(v.repeat).join(',')})`
        else {
          let { min = 'auto', max = 'auto' } = v
          min = typeof min === 'number' && min !== 0 ? min + 'fr' : min
          max = typeof max === 'number' && max !== 0 ? max + 'fr' : max
          rules.gridAutoColumns = `minmax(${min},${max})`
        }
        break

      default:
        rules.gridAutoColumns = typeof v === 'number' && v !== 0 ? v + 'fr' : v
    }

    return rules
  },
  colStart: (v) => {
    const rules = {}
    rules.gridColumnStart = v
    return rules
  },
  content: (v) => {
    const rules = {}
    if (v === true) rules.content = '""'
    else rules.content = v
    return rules
  },
  corner: (v) => {
    const rules = {}

    if (typeof v === 'object') {
      const leftTop = ['leftTop', 'left', 'top'].find((k) =>
        v.hasOwnProperty(k)
      )
      const leftBottom = ['leftBottom', 'left', 'bottom'].find((k) =>
        v.hasOwnProperty(k)
      )
      const rightTop = ['rightTop', 'right', 'top'].find((k) =>
        v.hasOwnProperty(k)
      )
      const rightBottom = ['rightBottom', 'right', 'bottom'].find((k) =>
        v.hasOwnProperty(k)
      )
      if (leftTop)
        rules.borderBottomLeftRadius = []
          .concat(v[leftTop])
          .map((v) => (typeof v === 'number' ? v + 'px' : v))
          .join('/')
      if (leftBottom)
        rules.borderBottomRightRadius = []
          .concat(v[leftBottom])
          .map((v) => (typeof v === 'number' ? v + 'px' : v))
          .join('/')
      if (rightTop)
        rules.borderTopLeftRadius = []
          .concat(v[rightTop])
          .map((v) => (typeof v === 'number' ? v + 'px' : v))
          .join('/')
      if (rightBottom)
        rules.borderTopRightRadius = []
          .concat(v[rightBottom])
          .map((v) => (typeof v === 'number' ? v + 'px' : v))
          .join('/')
    } else {
      rules.borderBottomLeftRadius = v
      rules.borderBottomRightRadius = v
      rules.borderTopLeftRadius = v
      rules.borderTopRightRadius = v
    }

    return rules
  },
  custom: (v) => v,
  decoration: (v) => {
    const rules = {}

    switch (v) {
      case 'top':
        rules.textDecoration = 'overline'
        break

      case 'center':
        rules.textDecoration = 'line-through'
        break

      case 'bottom':
        rules.textDecoration = 'underline'
        break

      case false:
        rules.textDecoration = 'none'
        break
    }

    return rules
  },
  direction: (v) => {
    const rules = {}
    const [direction, isReversed] = [].concat(v)

    switch (direction) {
      case 'row':
        rules.flexDirection = 'row'
        break

      case 'col':
        rules.flexDirection = 'column'
        break
    }

    if (isReversed) rules.flexDirection += '-reverse'
    return rules
  },
  fill: (v) => {
    const rules = {}
    rules.fill = v
    return rules
  },
  font: (v) => {
    const rules = {}
    rules.fontFamily = [].concat(v).join(',')
    return rules
  },
  grow: (v) => {
    const rules = {}
    rules.flexGrow = v
    return rules
  },
  hasSuffix: (v) => {
    const rules = {}
    rules.textOverflow = v ? 'ellipsis' : 'clip'
    return rules
  },
  height: (v) => {
    const rules = {}
    rules.height = v
    return rules
  },
  heightMax: (v) => {
    const rules = {}
    rules.maxHeight = v === false ? 'none' : v
    return rules
  },
  heightMin: (v) => {
    const rules = {}
    rules.minHeight = v
    return rules
  },
  isInteractive: (v) => {
    const rules = {}
    rules.cursor = v ? 'pointer' : 'auto'
    return rules
  },
  isItalic: (v) => {
    const rules = {}
    rules.fontStyle = v ? 'italic' : 'normal'
    return rules
  },
  kind: (v) => {
    const rules = {}

    switch (v) {
      case 'box':
        rules.display = 'block'
        break

      case 'text':
        rules.display = 'inline'
        break

      case 'd1':
        rules.display = 'flex'
        break

      case 'd2':
        rules.display = 'grid'
        break

      case false:
        rules.display = 'none'
        break
    }

    return rules
  },
  line: (v) => {
    const rules = {}
    rules.lineHeight = v
    return rules
  },
  move: (v) => {
    const rules = {}

    if (typeof v === 'object') {
      const left = ['left', 'row'].filter((k) => v.hasOwnProperty(k))
      const right = ['right', 'row'].filter((k) => v.hasOwnProperty(k))
      const top = ['top', 'col'].filter((k) => v.hasOwnProperty(k))
      const bottom = ['bottom', 'col'].filter((k) => v.hasOwnProperty(k))
      if (left) rules.left = v[left]
      if (right) rules.right = v[right]
      if (top) rules.top = v[top]
      if (bottom) rules.bottom = v[bottom]
    } else {
      rules.left = v
      rules.right = v
      rules.top = v
      rules.bottom = v
    }

    return rules
  },
  mustBreakWords: (v) => {
    const rules = {}
    rules.overflowWrap = v ? 'break-word' : 'normal'
    return rules
  },
  mustHandleEvents: (v) => {
    const rules = {}
    rules.pointerEvents = v ? 'auto' : 'none'
    return rules
  },
  opacity: (v) => {
    const rules = {}
    rules.opacity = v / 100
    return rules
  },
  orderMajor: (v) => {
    const rules = {}
    rules.order = v
    return rules
  },
  orderMinor: (v) => {
    const rules = {}
    rules.zIndex = v
    return rules
  },
  origin: (v) => {
    const rules = {}
    rules.flexBasis = v
    return rules
  },
  overflow: (v) => {
    const rules = {}

    if (Object.prototype.toString.call(v) === '[object Object]') {
      if (v.hasOwnProperty('col')) {
        switch (v.col) {
          case true:
            rules.overflowY = 'visible'
            break

          case false:
            rules.overflowY = 'hidden'
            break

          default: {
            const [kind, isActive] = [].concat(v.col)
            if (kind === 'auto') rules.overflowY = isActive ? 'scroll' : 'auto'
          }
        }
      }

      if (v.hasOwnProperty('row')) {
        switch (v.row) {
          case true:
            rules.overflowX = 'visible'
            break

          case false:
            rules.overflowX = 'hidden'
            break

          default: {
            const [kind, isActive] = [].concat(v.row)
            if (kind === 'auto') rules.overflowX = isActive ? 'scroll' : 'auto'
          }
        }
      }
    } else {
      let overflow

      switch (v) {
        case true:
          overflow = 'visible'
          break

        case false:
          overflow = 'hidden'
          break

        default: {
          const [kind, isActive] = [].concat(v)
          if (kind === 'auto') overflow = isActive ? 'scroll' : 'auto'
        }
      }

      rules.overflowX = overflow
      rules.overflowY = overflow
    }

    return rules
  },
  overflowDirection: (v) => {
    const rules = {}

    switch (v) {
      case 0:
        rules.flexWrap = 'nowrap'
        break

      case 1:
        rules.flexWrap = 'wrap'
        break

      case -1:
        rules.flexWrap = 'wrap-reverse'
        break
    }

    return rules
  },
  placeDirection: (v) => {
    const rules = {}

    switch (v) {
      case 'col':
        rules.gridAutoFlow = 'column'
        break

      case 'row':
        rules.gridAutoFlow = 'row'
        break
    }

    return rules
  },
  placeMajor: (v) => {
    const rules = {}

    switch (v) {
      case 'start':
        rules.justifyContent = ['flex-start', 'start']
        break

      case 'end':
        rules.justifyContent = ['flex-end', 'end']
        break

      case 'center':
        rules.justifyContent = 'center'
        break

      case 'space-between':
        rules.justifyContent = 'space-between'
        break

      default: {
        const [kind, isEqual] = [].concat(v)
        if (kind === 'space-around')
          rules.justifyContent = isEqual ? 'space-evenly' : 'space-around'
      }
    }

    return rules
  },
  placeMinor: (v) => {
    const rules = {}

    switch (v) {
      case 'start':
        rules.alignContent = ['flex-start', 'start']
        break

      case 'end':
        rules.alignContent = ['flex-end', 'end']
        break

      case 'center':
        rules.alignContent = 'center'
        break

      case 'space-between':
        rules.alignContent = 'space-between'
        break

      default: {
        const [kind, isEqual] = [].concat(v)
        if (kind === 'space-around')
          rules.alignContent = isEqual ? 'space-evenly' : 'space-around'
      }
    }

    return rules
  },
  position: (v) => {
    const rules = {}

    switch (v) {
      case false:
        rules.position = 'fixed'
        break

      case 'absolute':
        rules.position = 'absolute'
        break

      case 'relative':
        rules.position = 'relative'
        break

      case true:
        rules.position = 'static'
        break
    }

    return rules
  },
  rowEnd: (v) => {
    const rules = {}
    const [val, isRelative] = [].concat(v)
    rules.gridRowEnd = isRelative ? `span ${val}` : val
    return rules
  },
  rows: (v) => {
    const rules = {}
    rules.gridTemplateRows = []
      .concat(v)
      .map((v) => {
        if (v === false) return 'none'

        if (typeof v === 'object') {
          if (v.hasOwnProperty('repeat'))
            return `repeat(${[].concat(v.repeat).join(',')})`
          else {
            let { min = 'auto', max = 'auto' } = v
            min = typeof min === 'number' && min !== 0 ? min + 'fr' : min
            max = typeof max === 'number' && max !== 0 ? max + 'fr' : max
            return `minmax(${min},${max})`
          }
        }

        return typeof v === 'number' && v !== 0 ? v + 'fr' : v
      })
      .join(' ')
    return rules
  },
  rowsPseudo: (v) => {
    const rules = {}

    switch (true) {
      case v === false:
        rules.gridAutoRows = 'none'
        break

      case typeof v === 'object':
        if (v.hasOwnProperty('repeat'))
          rules.gridAutoRows = `repeat(${[].concat(v.repeat).join(',')})`
        else {
          let { min = 'auto', max = 'auto' } = v
          min = typeof min === 'number' && min !== 0 ? min + 'fr' : min
          max = typeof max === 'number' && max !== 0 ? max + 'fr' : max
          rules.gridAutoRows = `minmax(${min},${max})`
        }
        break

      default:
        rules.gridAutoRows = typeof v === 'number' && v !== 0 ? v + 'fr' : v
    }

    return rules
  },
  rowStart: (v) => {
    const rules = {}
    rules.gridRowStart = v
    return rules
  },
  shadowBox: (v) => {
    const rules = {}
    if (v === false) rules.boxShadow = 'none'
    else
      rules.boxShadow = []
        .concat(v)
        .map((v) => {
          if (typeof v === 'object') {
            const {
              row = 0,
              col = 0,
              blur = 0,
              size = 0,
              isReversed,
              color,
            } = v
            return `${
              typeof row === 'number' && row !== 0 ? row + 'px' : row
            } ${typeof col === 'number' && col !== 0 ? col + 'px' : col} ${
              typeof blur === 'number' && blur !== 0 ? blur + 'px' : blur
            } ${
              typeof size === 'number' && size !== 0 ? size + 'px' : size
            } ${color || ''} ${isReversed ? 'inset' : ''}`
          }

          return v
        })
        .join(',')
    return rules
  },
  shadowText: (v) => {
    const rules = {}
    if (v === false) rules.textShadow = 'none'
    else
      rules.textShadow = []
        .concat(v)
        .map((v) => {
          if (typeof v === 'object') {
            const { row = 0, col = 0, blur = 0, color } = v
            return `${
              typeof row === 'number' && row !== 0 ? row + 'px' : row
            } ${typeof col === 'number' && col !== 0 ? col + 'px' : col} ${
              typeof blur === 'number' && blur !== 0 ? blur + 'px' : blur
            } ${color || ''}`
          }

          return v
        })
        .join(',')
    return rules
  },
  shrink: (v) => {
    const rules = {}
    rules.flexShrink = v
    return rules
  },
  size: (v) => {
    const rules = {}
    rules.fontSize = v
    return rules
  },
  spaceBreak: (v) => {
    const rules = {}

    switch (v) {
      case false:
        rules.whiteSpace = 'nowrap'
        break

      case true:
        rules.whiteSpace = 'normal'
        break

      default: {
        const kind = [].concat(v)

        if (kind[0] === 'raw') {
          switch (kind[1]) {
            case true:
              rules.whiteSpace = 'pre-wrap'
              break

            case false:
              rules.whiteSpace = 'pre-line'
              break

            default:
              rules.whiteSpace = 'pre'
          }
        }
      }
    }

    return rules
  },
  spaceChar: (v) => {
    const rules = {}
    rules.letterSpacing = v
    return rules
  },
  spaceCol: (v) => {
    const rules = {}

    if (typeof v === 'object') {
      if (v.hasOwnProperty('repeat'))
        rules.gridColumnGap = `repeat(${[].concat(v.repeat).join(',')})`
      else {
        let { min = 'auto', max = 'auto' } = v
        min = typeof min === 'number' && min !== 0 ? min + 'fr' : min
        max = typeof max === 'number' && max !== 0 ? max + 'fr' : max
        rules.gridColumnGap = `minmax(${min},${max})`
      }
    } else rules.gridColumnGap = typeof v === 'number' && v !== 0 ? v + 'fr' : v

    return rules
  },
  spaceInner: (v) => {
    const rules = {}

    if (typeof v === 'object') {
      const left = ['left', 'row'].filter((k) => v.hasOwnProperty(k))
      const right = ['right', 'row'].filter((k) => v.hasOwnProperty(k))
      const top = ['top', 'col'].filter((k) => v.hasOwnProperty(k))
      const bottom = ['bottom', 'col'].filter((k) => v.hasOwnProperty(k))
      if (left) rules.paddingLeft = v[left]
      if (right) rules.paddingRight = v[right]
      if (top) rules.paddingTop = v[top]
      if (bottom) rules.paddingBottom = v[bottom]
    } else {
      rules.paddingLeft = v
      rules.paddingRight = v
      rules.paddingTop = v
      rules.paddingBottom = v
    }

    return rules
  },
  spaceOuter: (v) => {
    const rules = {}

    if (typeof v === 'object') {
      const left = ['left', 'row'].filter((k) => v.hasOwnProperty(k))
      const right = ['right', 'row'].filter((k) => v.hasOwnProperty(k))
      const top = ['top', 'col'].filter((k) => v.hasOwnProperty(k))
      const bottom = ['bottom', 'col'].filter((k) => v.hasOwnProperty(k))
      if (left) rules.marginLeft = v[left]
      if (right) rules.marginRight = v[right]
      if (top) rules.marginTop = v[top]
      if (bottom) rules.marginBottom = v[bottom]
    } else {
      rules.marginLeft = v
      rules.marginRight = v
      rules.marginTop = v
      rules.marginBottom = v
    }

    return rules
  },
  spaceRow: (v) => {
    const rules = {}

    if (typeof v === 'object') {
      if (v.hasOwnProperty('repeat'))
        rules.gridRowGap = `repeat(${[].concat(v.repeat).join(',')})`
      else {
        let { min = 'auto', max = 'auto' } = v
        min = typeof min === 'number' && min !== 0 ? min + 'fr' : min
        max = typeof max === 'number' && max !== 0 ? max + 'fr' : max
        rules.gridRowGap = `minmax(${min},${max})`
      }
    } else rules.gridRowGap = typeof v === 'number' && v !== 0 ? v + 'fr' : v

    return rules
  },
  spaceWord: (v) => {
    const rules = {}
    rules.wordSpacing = v
    return rules
  },
  strokeColor: (v) => {
    const rules = {}
    rules.stroke = v
    return rules
  },
  strokeDashes: (v) => {
    const rules = {}
    rules.strokeDasharray = [].concat(v).join(' ')
    return rules
  },
  strokeSize: (v) => {
    const rules = {}
    rules.strokeWidth = v
    return rules
  },
  strokeSpace: (v) => {
    const rules = {}
    rules.strokeDashoffset = v
    return rules
  },
  template: (v) => {
    const rules = {}
    rules.gridTemplateAreas = v
      .map((v) => `"${v.map((v) => (v === null ? '.' : v)).join(' ')}"`)
      .join('')
    return rules
  },
  transform: (v) => {
    const rules = {}
    if (v === false) rules.transform = 'none'
    else
      rules.transform =
        typeof v === 'object'
          ? Object.entries(v)
              .map(([k, v]) => `${k}(${[].concat(v).join(',')})`)
              .join(' ')
          : v
    return rules
  },
  transition: (v) => {
    const rules = {}
    const transition = Object.entries(v).reduce(
      (r, [k, v]) => {
        r.name.push(cc.k(k))

        if (typeof v === 'object') {
          r.delay.push(
            v.hasOwnProperty('delay')
              ? typeof v.delay === 'number'
                ? v.delay + 'ms'
                : v.delay
              : '0ms'
          )
          r.duration.push(
            v.hasOwnProperty('duration')
              ? typeof v.duration === 'number'
                ? v.duration + 'ms'
                : v.duration
              : '0ms'
          )
          r.fn.push(v.hasOwnProperty('fn') ? v.fn : 'ease')
        } else {
          r.delay.push('0ms')
          r.duration.push(typeof v === 'number' ? v + 'ms' : v)
          r.fn.push('ease')
        }

        return r
      },
      {
        name: [],
        duration: [],
        delay: [],
        fn: [],
      }
    )
    rules.transitionProperty = transition.name.join(',')
    rules.transitionDelay = transition.delay.join(',')
    rules.transitionDuration = transition.duration.join(',')
    rules.transitionTimingFunction = transition.fn.join(',')
    return rules
  },
  weight: (v) => {
    const rules = {}
    rules.fontWeight = v
    return rules
  },
  width: (v) => {
    const rules = {}
    rules.width = v
    return rules
  },
  widthMax: (v) => {
    const rules = {}
    rules.maxWidth = v === false ? 'none' : v
    return rules
  },
  widthMin: (v) => {
    const rules = {}
    rules.minWidth = v
    return rules
  },
}
