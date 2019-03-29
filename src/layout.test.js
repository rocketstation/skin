const fn = require('./layout')

const fixtures = {
  align: [
    {
      in: 'start',
      out: {
        textAlign: 'left',
      },
    },
    {
      in: 'end',
      out: {
        textAlign: 'right',
      },
    },
    {
      in: 'center',
      out: {
        textAlign: 'center',
      },
    },
    {
      in: 'stretch',
      out: {
        textAlign: 'justify',
      },
    },
  ],
  alignContent: [
    {
      in: 'start',
      out: {
        alignItems: 'flex-start',
      },
    },
    {
      in: 'end',
      out: {
        alignItems: 'flex-end',
      },
    },
    {
      in: 'center',
      out: {
        alignItems: 'center',
      },
    },
    {
      in: 'stretch',
      out: {
        alignItems: 'stretch',
      },
    },
  ],
  alignMajor: [
    {
      in: 'start',
      out: {
        justifyItems: 'start',
      },
    },
    {
      in: 'end',
      out: {
        justifyItems: 'end',
      },
    },
    {
      in: 'center',
      out: {
        justifyItems: 'center',
      },
    },
    {
      in: 'stretch',
      out: {
        justifyItems: 'stretch',
      },
    },
  ],
  alignMinor: [
    {
      in: 'start',
      out: {
        alignItems: 'start',
      },
    },
    {
      in: 'end',
      out: {
        alignItems: 'end',
      },
    },
    {
      in: 'center',
      out: {
        alignItems: 'center',
      },
    },
    {
      in: 'stretch',
      out: {
        alignItems: 'stretch',
      },
    },
  ],
  alignSelf: [
    {
      in: 'start',
      out: {
        alignSelf: 'flex-start',
      },
    },
    {
      in: 'end',
      out: {
        alignSelf: 'flex-end',
      },
    },
    {
      in: 'center',
      out: {
        alignSelf: 'center',
      },
    },
    {
      in: 'stretch',
      out: {
        alignSelf: 'stretch',
      },
    },
  ],
  alignSelfMajor: [
    {
      in: 'start',
      out: {
        justifySelf: 'start',
      },
    },
    {
      in: 'end',
      out: {
        justifySelf: 'end',
      },
    },
    {
      in: 'center',
      out: {
        justifySelf: 'center',
      },
    },
    {
      in: 'stretch',
      out: {
        justifySelf: 'stretch',
      },
    },
  ],
  alignSelfMinor: [
    {
      in: 'start',
      out: {
        alignSelf: 'start',
      },
    },
    {
      in: 'end',
      out: {
        alignSelf: 'end',
      },
    },
    {
      in: 'center',
      out: {
        alignSelf: 'center',
      },
    },
    {
      in: 'stretch',
      out: {
        alignSelf: 'stretch',
      },
    },
  ],
  animation: [
    {
      in: {},
      out: {
        animationName: {},
      },
    },
    {
      in: 'tst',
      out: {
        animationName: 'tst',
      },
    },
  ],
  animationCount: [
    {
      in: true,
      out: {
        animationIterationCount: 'infinite',
      },
    },
    {
      in: 1,
      out: {
        animationIterationCount: '1',
      },
    },
  ],
  animationDelay: [
    {
      in: 0,
      out: {
        animationDelay: '0ms',
      },
    },
  ],
  animationDirection: [
    {
      in: 1,
      out: {
        animationDirection: 'normal',
      },
    },
    {
      in: -1,
      out: {
        animationDirection: 'reverse',
      },
    },
    {
      in: 2,
      out: {
        animationDirection: 'alternate',
      },
    },
    {
      in: -2,
      out: {
        animationDirection: 'alternate-reverse',
      },
    },
  ],
  animationDuration: [
    {
      in: 250,
      out: {
        animationDuration: '250ms',
      },
    },
    {
      in: '750ms',
      out: {
        animationDuration: '750ms',
      },
    },
  ],
  animationFn: [
    {
      in: 'ease',
      out: {
        animationTimingFunction: 'ease',
      },
    },
  ],
  animationIsActive: [
    {
      in: true,
      out: {
        animationPlayState: 'running',
      },
    },
    {
      in: false,
      out: {
        animationPlayState: 'paused',
      },
    },
  ],
  animationOrigin: [
    {
      in: true,
      out: {
        animationFillingMode: 'both',
      },
    },
    {
      in: false,
      out: {
        animationFillingMode: 'none',
      },
    },
    {
      in: -1,
      out: {
        animationFillingMode: 'backwards',
      },
    },
    {
      in: 1,
      out: {
        animationFillingMode: 'forwards',
      },
    },
  ],
  bg: [
    {
      in: {
        bps: [['white', 0], ['black', 100]],
        direction: true,
      },
      out: {
        backgroundImage: 'radial-gradient(white 0%,black 100%)',
      },
    },
    {
      in: [
        {
          bps: ['white', 'black'],
          direction: 360,
        },
      ],
      out: {
        backgroundImage: 'linear-gradient(360deg,white,black)',
      },
    },
    {
      in: 'bg.png',
      out: {
        backgroundImage: 'url(bg.png)',
      },
    },
  ],
  bgMove: [
    {
      in: 'center',
      out: {
        backgroundPosition: 'center',
      },
    },
    {
      in: {
        bottom: '100%',
        left: 1,
      },
      out: {
        backgroundPosition: 'bottom 100% left 1rem',
      },
    },
  ],
  bgOrigin: [
    {
      in: 'border',
      out: {
        backgroundOrigin: 'border-box',
      },
    },
    {
      in: 'space',
      out: {
        backgroundOrigin: 'padding-box',
      },
    },
    {
      in: 'content',
      out: {
        backgroundOrigin: 'content-box',
      },
    },
  ],
  bgOverflow: [
    {
      in: 'border',
      out: {
        backgroundClip: 'border-box',
      },
    },
    {
      in: 'space',
      out: {
        backgroundClip: 'padding-box',
      },
    },
    {
      in: 'content',
      out: {
        backgroundClip: 'content-box',
      },
    },
  ],
  bgPosition: [
    {
      in: 'local',
      out: {
        backgroundAttachment: 'local',
      },
    },
    {
      in: 'global',
      out: {
        backgroundAttachment: 'scroll',
      },
    },
    {
      in: false,
      out: {
        backgroundAttachment: 'fixed',
      },
    },
  ],
  bgRepeat: [
    {
      in: false,
      out: {
        backgroundRepeat: 'no-repeat',
      },
    },
    {
      in: true,
      out: {
        backgroundRepeat: 'repeat',
      },
    },
    {
      in: 'col',
      out: {
        backgroundRepeat: 'repeat-y',
      },
    },
    {
      in: 'row',
      out: {
        backgroundRepeat: 'repeat-x',
      },
    },
  ],
  bgSize: [
    {
      in: 'fill',
      out: {
        backgroundSize: 'cover',
      },
    },
    {
      in: 'fit',
      out: {
        backgroundSize: 'contain',
      },
    },
    {
      in: 'auto',
      out: {
        backgroundSize: 'auto',
      },
    },
    {
      in: {
        height: 1,
        width: '100%',
      },
      out: {
        backgroundSize: '100% 1rem',
      },
    },
  ],
  borderColor: [
    {
      in: 'hsla(0,0%,0%,1)',
      out: {
        borderBottomColor: 'hsla(0,0%,0%,1)',
        borderLeftColor: 'hsla(0,0%,0%,1)',
        borderRightColor: 'hsla(0,0%,0%,1)',
        borderTopColor: 'hsla(0,0%,0%,1)',
      },
    },
    {
      in: {
        bottom: 'hsla(0,0%,0%,1)',
        left: 'hsla(0,0%,0%,1)',
        right: 'hsla(0,0%,0%,1)',
        top: 'hsla(0,0%,0%,1)',
      },
      out: {
        borderBottomColor: 'hsla(0,0%,0%,1)',
        borderLeftColor: 'hsla(0,0%,0%,1)',
        borderRightColor: 'hsla(0,0%,0%,1)',
        borderTopColor: 'hsla(0,0%,0%,1)',
      },
    },
    {
      in: {
        col: 'hsla(0,0%,0%,1)',
        row: 'hsla(0,0%,0%,1)',
      },
      out: {
        borderBottomColor: 'hsla(0,0%,0%,1)',
        borderLeftColor: 'hsla(0,0%,0%,1)',
        borderRightColor: 'hsla(0,0%,0%,1)',
        borderTopColor: 'hsla(0,0%,0%,1)',
      },
    },
  ],
  borderKind: [
    {
      in: 'dashed',
      out: {
        borderBottomStyle: 'dashed',
        borderLeftStyle: 'dashed',
        borderRightStyle: 'dashed',
        borderTopStyle: 'dashed',
      },
    },
    {
      in: true,
      out: {
        borderBottomStyle: 'solid',
        borderLeftStyle: 'solid',
        borderRightStyle: 'solid',
        borderTopStyle: 'solid',
      },
    },
    {
      in: false,
      out: {
        borderBottomStyle: 'none',
        borderLeftStyle: 'none',
        borderRightStyle: 'none',
        borderTopStyle: 'none',
      },
    },
    {
      in: {
        bottom: false,
        left: false,
        right: false,
        top: false,
      },
      out: {
        borderBottomStyle: 'none',
        borderLeftStyle: 'none',
        borderRightStyle: 'none',
        borderTopStyle: 'none',
      },
    },
    {
      in: {
        bottom: true,
        left: true,
        right: true,
        top: true,
      },
      out: {
        borderBottomStyle: 'solid',
        borderLeftStyle: 'solid',
        borderRightStyle: 'solid',
        borderTopStyle: 'solid',
      },
    },
    {
      in: {
        bottom: 'dashed',
        left: 'dashed',
        right: 'dashed',
        top: 'dashed',
      },
      out: {
        borderBottomStyle: 'dashed',
        borderLeftStyle: 'dashed',
        borderRightStyle: 'dashed',
        borderTopStyle: 'dashed',
      },
    },
    {
      in: {
        col: 'doted',
        row: 'doted',
      },
      out: {
        borderBottomStyle: 'doted',
        borderLeftStyle: 'doted',
        borderRightStyle: 'doted',
        borderTopStyle: 'doted',
      },
    },
  ],
  borderSize: [
    {
      in: 0,
      out: {
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
      },
    },
    {
      in: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      },
      out: {
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
      },
    },
    {
      in: {
        col: 0,
        row: 0,
      },
      out: {
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
      },
    },
  ],
  case: [
    {
      in: 'lower',
      out: {
        textTransform: 'lowercase',
      },
    },
    {
      in: 'upper',
      out: {
        textTransform: 'uppercase',
      },
    },
    {
      in: false,
      out: {
        textTransform: 'none',
      },
    },
  ],
  colEnd: [
    {
      in: 1,
      out: {
        gridColumnEnd: 1,
      },
    },
    {
      in: [1, true],
      out: {
        gridColumnEnd: 'span 1',
      },
    },
  ],
  colorBox: {
    in: 'hsla(0,0%,0%,1)',
    out: {
      backgroundColor: 'hsla(0,0%,0%,1)',
    },
  },
  colorText: {
    in: 'hsla(0,0%,0%,1)',
    out: {
      color: 'hsla(0,0%,0%,1)',
    },
  },
  cols: {
    in: [
      1,
      false,
      'auto',
      '100%',
      {
        repeat: [3, 'auto'],
      },
      {
        max: 1,
        min: 1,
      },
    ],
    out: {
      gridTemplateColumns: '1fr none auto 100% repeat(3,auto) minmax(1fr,1fr)',
    },
  },
  colsPseudo: [
    {
      in: false,
      out: {
        gridAutoColumns: 'none',
      },
    },
    {
      in: 0,
      out: {
        gridAutoColumns: 0,
      },
    },
    {
      in: {
        repeat: [3, 'auto'],
      },
      out: {
        gridAutoColumns: 'repeat(3,auto)',
      },
    },
    {
      in: {
        max: 1,
        min: 1,
      },
      out: {
        gridAutoColumns: 'minmax(1fr,1fr)',
      },
    },
  ],
  colStart: {
    in: 1,
    out: {
      gridColumnStart: 1,
    },
  },
  content: [
    {
      in: true,
      out: {
        content: '""',
      },
    },
    {
      in: '"tst"',
      out: {
        content: '"tst"',
      },
    },
  ],
  corner: [
    {
      in: 1,
      out: {
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
      },
    },
    {
      in: {
        left: 1,
        right: 1,
      },
      out: {
        borderBottomLeftRadius: '1px',
        borderBottomRightRadius: '1px',
        borderTopLeftRadius: '1px',
        borderTopRightRadius: '1px',
      },
    },
    {
      in: {
        bottom: 1,
        top: 1,
      },
      out: {
        borderBottomLeftRadius: '1px',
        borderBottomRightRadius: '1px',
        borderTopLeftRadius: '1px',
        borderTopRightRadius: '1px',
      },
    },
    {
      in: {
        leftBottom: 1,
        leftTop: 1,
        rightBottom: 1,
        rightTop: 1,
      },
      out: {
        borderBottomLeftRadius: '1px',
        borderBottomRightRadius: '1px',
        borderTopLeftRadius: '1px',
        borderTopRightRadius: '1px',
      },
    },
  ],
  custom: {
    in: {
      foo: 'bar',
    },
    out: {
      foo: 'bar',
    },
  },
  decoration: [
    {
      in: 'top',
      out: {
        textDecoration: 'overline',
      },
    },
    {
      in: 'center',
      out: {
        textDecoration: 'line-through',
      },
    },
    {
      in: 'bottom',
      out: {
        textDecoration: 'underline',
      },
    },
    {
      in: false,
      out: {
        textDecoration: 'none',
      },
    },
  ],
  direction: [
    {
      in: 'row',
      out: {
        flexDirection: 'row',
      },
    },
    {
      in: ['row', true],
      out: {
        flexDirection: 'row-reverse',
      },
    },
    {
      in: 'col',
      out: {
        flexDirection: 'column',
      },
    },
    {
      in: ['col', true],
      out: {
        flexDirection: 'column-reverse',
      },
    },
  ],
  fill: {
    in: 'black',
    out: {
      fill: 'black',
    },
  },
  font: {
    in: ['serif', 'sans-serif'],
    out: {
      fontFamily: 'serif,sans-serif',
    },
  },
  grow: {
    in: 0,
    out: {
      flexGrow: 0,
    },
  },
  hasSuffix: [
    {
      in: true,
      out: {
        textOverflow: 'ellipsis',
      },
    },
    {
      in: false,
      out: {
        textOverflow: 'clip',
      },
    },
  ],
  height: {
    in: 0,
    out: {
      height: 0,
    },
  },
  heightMax: [
    {
      in: false,
      out: {
        maxHeight: 'none',
      },
    },
    {
      in: 0,
      out: {
        maxHeight: 0,
      },
    },
  ],
  heightMin: {
    in: 0,
    out: {
      minHeight: 0,
    },
  },
  isInteractive: [
    {
      in: true,
      out: {
        cursor: 'pointer',
      },
    },
    {
      in: false,
      out: {
        cursor: 'auto',
      },
    },
  ],
  isItalic: [
    {
      in: true,
      out: {
        fontStyle: 'italic',
      },
    },
    {
      in: false,
      out: {
        fontStyle: 'normal',
      },
    },
  ],
  kind: [
    {
      in: 'box',
      out: {
        display: 'block',
      },
    },
    {
      in: 'text',
      out: {
        display: 'inline',
      },
    },
    {
      in: 'd1',
      out: {
        display: 'flex',
      },
    },
    {
      in: 'd2',
      out: {
        display: 'grid',
      },
    },
    {
      in: false,
      out: {
        display: 'none',
      },
    },
  ],
  line: {
    in: 1,
    out: {
      lineHeight: 1,
    },
  },
  move: [
    {
      in: 0,
      out: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      },
    },
    {
      in: {
        col: 0,
        row: 0,
      },
      out: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      },
    },
    {
      in: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      },
      out: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      },
    },
  ],
  mustBreakWords: [
    {
      in: true,
      out: {
        overflowWrap: 'break-word',
      },
    },
    {
      in: false,
      out: {
        overflowWrap: 'normal',
      },
    },
  ],
  mustHandleEvents: [
    {
      in: true,
      out: {
        pointerEvents: 'auto',
      },
    },
    {
      in: false,
      out: {
        pointerEvents: 'none',
      },
    },
  ],
  opacity: {
    in: 100,
    out: {
      opacity: 1,
    },
  },
  orderMajor: {
    in: 1,
    out: {
      order: 1,
    },
  },
  orderMinor: {
    in: 1,
    out: {
      zIndex: 1,
    },
  },
  origin: {
    in: 0,
    out: {
      flexBasis: 0,
    },
  },
  overflow: [
    {
      in: {
        col: false,
        row: true,
      },
      out: {
        overflowX: 'visible',
        overflowY: 'hidden',
      },
    },
    {
      in: {
        col: true,
        row: false,
      },
      out: {
        overflowX: 'hidden',
        overflowY: 'visible',
      },
    },
    {
      in: {
        col: ['auto', true],
        row: ['auto', true],
      },
      out: {
        overflowX: 'scroll',
        overflowY: 'scroll',
      },
    },
    {
      in: {
        col: 'auto',
        row: 'auto',
      },
      out: {
        overflowX: 'auto',
        overflowY: 'auto',
      },
    },
    {
      in: true,
      out: {
        overflowX: 'visible',
        overflowY: 'visible',
      },
    },
    {
      in: false,
      out: {
        overflowX: 'hidden',
        overflowY: 'hidden',
      },
    },
    {
      in: ['auto', true],
      out: {
        overflowX: 'scroll',
        overflowY: 'scroll',
      },
    },
    {
      in: 'auto',
      out: {
        overflowX: 'auto',
        overflowY: 'auto',
      },
    },
  ],
  overflowDirection: [
    {
      in: -1,
      out: {
        flexWrap: 'wrap-reverse',
      },
    },
    {
      in: 0,
      out: {
        flexWrap: 'nowrap',
      },
    },
    {
      in: 1,
      out: {
        flexWrap: 'wrap',
      },
    },
  ],
  placeContentMajor: [
    {
      in: 'start',
      out: {
        justifyContent: 'flex-start',
      },
    },
    {
      in: 'end',
      out: {
        justifyContent: 'flex-end',
      },
    },
    {
      in: 'center',
      out: {
        justifyContent: 'center',
      },
    },
    {
      in: 'space-between',
      out: {
        justifyContent: 'space-between',
      },
    },
    {
      in: 'space-around',
      out: {
        justifyContent: 'space-around',
      },
    },
    {
      in: ['space-around', true],
      out: {
        justifyContent: 'space-evenly',
      },
    },
  ],
  placeContentMinor: [
    {
      in: 'start',
      out: {
        alignContent: 'flex-start',
      },
    },
    {
      in: 'end',
      out: {
        alignContent: 'flex-end',
      },
    },
    {
      in: 'center',
      out: {
        alignContent: 'center',
      },
    },
    {
      in: 'space-between',
      out: {
        alignContent: 'space-between',
      },
    },
    {
      in: 'space-around',
      out: {
        alignContent: 'space-around',
      },
    },
    {
      in: ['space-around', true],
      out: {
        alignContent: 'space-evenly',
      },
    },
  ],
  placeDirection: [
    {
      in: 'col',
      out: {
        gridAutoFlow: 'column',
      },
    },
    {
      in: 'row',
      out: {
        gridAutoFlow: 'row',
      },
    },
  ],
  placeMajor: [
    {
      in: 'start',
      out: {
        justifyContent: ['flex-start', 'start'],
      },
    },
    {
      in: 'end',
      out: {
        justifyContent: ['flex-end', 'end'],
      },
    },
    {
      in: 'center',
      out: {
        justifyContent: 'center',
      },
    },
    {
      in: 'space-between',
      out: {
        justifyContent: 'space-between',
      },
    },
    {
      in: 'space-around',
      out: {
        justifyContent: 'space-around',
      },
    },
    {
      in: ['space-around', true],
      out: {
        justifyContent: 'space-evenly',
      },
    },
  ],
  placeMinor: [
    {
      in: 'start',
      out: {
        alignContent: ['flex-start', 'start'],
      },
    },
    {
      in: 'end',
      out: {
        alignContent: ['flex-end', 'end'],
      },
    },
    {
      in: 'center',
      out: {
        alignContent: 'center',
      },
    },
    {
      in: 'space-between',
      out: {
        alignContent: 'space-between',
      },
    },
    {
      in: 'space-around',
      out: {
        alignContent: 'space-around',
      },
    },
    {
      in: ['space-around', true],
      out: {
        alignContent: 'space-evenly',
      },
    },
  ],
  position: [
    {
      in: true,
      out: {
        position: 'static',
      },
    },
    {
      in: 'relative',
      out: {
        position: 'relative',
      },
    },
    {
      in: 'absolute',
      out: {
        position: 'absolute',
      },
    },
    {
      in: false,
      out: {
        position: 'fixed',
      },
    },
  ],
  rowEnd: [
    {
      in: 1,
      out: {
        gridRowEnd: 1,
      },
    },
    {
      in: [1, true],
      out: {
        gridRowEnd: 'span 1',
      },
    },
  ],
  rows: {
    in: [
      1,
      false,
      'auto',
      '100%',
      {
        repeat: [3, 'auto'],
      },
      {
        max: 1,
        min: 1,
      },
    ],
    out: {
      gridTemplateRows: '1fr none auto 100% repeat(3,auto) minmax(1fr,1fr)',
    },
  },
  rowsPseudo: [
    {
      in: false,
      out: {
        gridAutoRows: 'none',
      },
    },
    {
      in: 0,
      out: {
        gridAutoRows: 0,
      },
    },
    {
      in: {
        repeat: [3, 'auto'],
      },
      out: {
        gridAutoRows: 'repeat(3,auto)',
      },
    },
    {
      in: {
        max: 1,
        min: 1,
      },
      out: {
        gridAutoRows: 'minmax(1fr,1fr)',
      },
    },
  ],
  rowStart: {
    in: 1,
    out: {
      gridRowStart: 1,
    },
  },
  shadowBox: [
    {
      in: false,
      out: {
        boxShadow: 'none',
      },
    },
    {
      in: '1px 1px 1px 1px hsla(0,0%,0%,1) inset',
      out: {
        boxShadow: '1px 1px 1px 1px hsla(0,0%,0%,1) inset',
      },
    },
    {
      in: [
        {
          blur: 1,
          col: 1,
          color: 'hsla(0,0%,0%,1)',
          isReversed: true,
          row: 1,
          size: 1,
        },
      ],
      out: {
        boxShadow: '1px 1px 1px 1px hsla(0,0%,0%,1) inset',
      },
    },
  ],
  shadowText: [
    {
      in: false,
      out: {
        textShadow: 'none',
      },
    },
    {
      in: '1px 1px 1px hsla(0,0%,0%,1)',
      out: {
        textShadow: '1px 1px 1px hsla(0,0%,0%,1)',
      },
    },
    {
      in: {
        blur: 1,
        col: 1,
        color: 'hsla(0,0%,0%,1)',
        row: 1,
      },
      out: {
        textShadow: '1px 1px 1px hsla(0,0%,0%,1)',
      },
    },
  ],
  shrink: {
    in: 0,
    out: {
      flexShrink: 0,
    },
  },
  size: {
    in: 1,
    out: {
      fontSize: 1,
    },
  },
  spaceBreak: [
    {
      in: true,
      out: {
        whiteSpace: 'normal',
      },
    },
    {
      in: false,
      out: {
        whiteSpace: 'nowrap',
      },
    },
    {
      in: 'raw',
      out: {
        whiteSpace: 'pre',
      },
    },
    {
      in: ['raw', true],
      out: {
        whiteSpace: 'pre-wrap',
      },
    },
    {
      in: ['raw', false],
      out: {
        whiteSpace: 'pre-line',
      },
    },
  ],
  spaceChar: {
    in: 0,
    out: {
      letterSpacing: 0,
    },
  },
  spaceCol: [
    {
      in: {
        repeat: [3, 'auto'],
      },
      out: {
        gridColumnGap: 'repeat(3,auto)',
      },
    },
    {
      in: {
        max: 1,
        min: 1,
      },
      out: {
        gridColumnGap: 'minmax(1rem,1rem)',
      },
    },
    {
      in: 0,
      out: {
        gridColumnGap: 0,
      },
    },
  ],
  spaceInner: [
    {
      in: 0,
      out: {
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
      },
    },
    {
      in: {
        col: 0,
        row: 0,
      },
      out: {
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
      },
    },
    {
      in: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      },
      out: {
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
      },
    },
  ],
  spaceOuter: [
    {
      in: 0,
      out: {
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
      },
    },
    {
      in: {
        col: 0,
        row: 0,
      },
      out: {
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
      },
    },
    {
      in: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      },
      out: {
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
      },
    },
  ],
  spaceRow: [
    {
      in: {
        repeat: [3, 'auto'],
      },
      out: {
        gridRowGap: 'repeat(3,auto)',
      },
    },
    {
      in: {
        max: 1,
        min: 1,
      },
      out: {
        gridRowGap: 'minmax(1rem,1rem)',
      },
    },
    {
      in: 0,
      out: {
        gridRowGap: 0,
      },
    },
  ],
  spaceWord: {
    in: 0,
    out: {
      wordSpacing: 0,
    },
  },
  strokeColor: {
    in: 'black',
    out: {
      stroke: 'black',
    },
  },
  strokeDashes: {
    in: [1, 1],
    out: {
      strokeDasharray: '1 1',
    },
  },
  strokeSize: {
    in: 1,
    out: {
      strokeWidth: 1,
    },
  },
  strokeSpace: {
    in: 1,
    out: {
      strokeDashoffset: 1,
    },
  },
  template: {
    in: [
      ['header', 'header', 'header'],
      ['minor', 'majorHeader', null],
      ['minor', 'majorFooter', null],
      ['footer', 'footer', 'footer'],
    ],
    out: {
      gridTemplateAreas:
        '"header header header""minor majorHeader .""minor majorFooter .""footer footer footer"',
    },
  },
  modify: [
    {
      in: false,
      out: {
        transform: 'none',
      },
    },
    {
      in: {
        translateX: 0,
        translateY: 0,
      },
      out: {
        transform: 'translateX(0) translateY(0)',
      },
    },
  ],
  transition: [
    {
      in: {
        color: 500,
      },
      out: {
        transitionDelay: '0ms',
        transitionDuration: '500ms',
        transitionProperty: 'color',
        transitionTimingFunction: 'ease',
      },
    },
    {
      in: {
        color: {
          delay: 500,
          duration: 500,
          fn: 'linear',
        },
      },
      out: {
        transitionDelay: '500ms',
        transitionDuration: '500ms',
        transitionProperty: 'color',
        transitionTimingFunction: 'linear',
      },
    },
    {
      in: {
        color: {},
      },
      out: {
        transitionDelay: '0ms',
        transitionDuration: '0ms',
        transitionProperty: 'color',
        transitionTimingFunction: 'ease',
      },
    },
  ],
  weight: {
    in: 400,
    out: {
      fontWeight: 400,
    },
  },
  width: {
    in: 0,
    out: {
      width: 0,
    },
  },
  widthMax: [
    {
      in: false,
      out: {
        maxWidth: 'none',
      },
    },
    {
      in: 0,
      out: {
        maxWidth: 0,
      },
    },
  ],
  widthMin: {
    in: 0,
    out: {
      minWidth: 0,
    },
  },
}

Object.entries(fixtures).forEach(([k, v]) => {
  test(k, () => {
    ;[].concat(v).forEach((v) => {
      expect(fn[k](v.in)).toEqual(v.out)
    })
  })
})
