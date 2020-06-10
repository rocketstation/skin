# Skin

Skin provides alias & helpers for css-in-js

## Installation

```
npm i @rocketstation/skin
```

## Usage

```javascript
import * as skin from '@rocketstation/skin'
import * as alias from '@rocketstation/skin/alias'

import $ from '@rocketstation/black-box'

import { createRenderer } from 'fela'
import pluginCustomProperty from 'fela-plugin-custom-property'
import React from 'react'
import ReactDOM from 'react-dom'
import { RendererProvider as FelaProvider } from 'react-fela'

const MyComponent = ({ name, ...props }) =>
  $(
    'div',
    {
      onClick: () => {
        console.log('test')
      },
      skin: ({ theme }) => ({
        colorBox: theme.box.color.major,
        colorText: theme.text.color.major,
        [skin.onHover]: {
          colorBox: theme.text.color.major,
          colorText: theme.box.color.major,
        },
        [skin.screenFrom(960)]: { size: '125%' }
      }),
      ...props,
    },
    'Hello',
    $('span', name),
    '!'
  )

const renderer = createRenderer({
  plugins: [pluginCustomProperty(alias)],
})

ReactDOM.render(
  React.createElement(
    FelaProvider,
    { renderer },
    React.createElement(MyComponent, { name: 'John Doe' })
  ),
  document.getElementById('app')
)
```

## API

### Services

attr

```javascript
attr('key') // [key]
```

attr-contains

```javascript
attrContains('key', 'val') // [key~=val]
```

attr-contains-str

```javascript
attrContainsStr('key', 'val') // [key*="val"]
```

attr-ends-str

```javascript
attrEndsStr('key', 'val') // [key$="val"]
```

attr-equals

```javascript
attrEquals('key', 'val') // [key=val]
```

attr-starts

```javascript
attrStarts('key', 'val') // [key|=val]
```

attr-starts-str

```javascript
attrStartsStr('key', 'val') // [key^="val"]
```

img

```javascript
img('src') // url(src)
```

its

```javascript
its('div') // & div
```

its-after

```javascript
itsAfter // ::after
```

its-before


```javascript
itsBefore // ::before
```

its-children

```javascript
itsChildren // >*
```

its-first

```javascript
itsFirst() // :nth-child(0n+1)
itsFirst(1, 0) // :nth-child(1n+0)
```

its-highlight

```javascript
itsHighlight // ::selection
```

its-last

```javascript
itsLast() // :nth-last-child(0n+1)
itsLast(1, 0) // :nth-last-child(1n+0)
```

its-next-multiple

```javascript
itsNextMultiple // &~*
```

its-next-single

```javascript
itsNextSingle // &+*
```

its-placeholder

```javascript
itsPlaceholder // ::placeholder
```

limit

```javascript
limit() // minmax('auto','auto')
limit(1, 1) // minmax(1rem,1rem)
limit('1fr', '1fr') // minmax(1fr,1fr)
```

linear

```javascript
linear(360, 'white', 'black') // linear-gradient(360deg,white,black)
linear(360, ['white', 0], ['black', 100]) // linear-gradient(360deg,white 0%,black 100%)
```

matrix

```javascript
matrix(1, 1, 1, 1, 1, 1) // matrix(1,1,1,1,1,1)
```

matrix-3d

```javascript
matrix3d(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1) // matrix3d(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
```

on-active

```javascript
active // :active
```

on-focus

```javascript
focus // :focus
```

on-focus-inside

```javascript
focusInner // :focusWithin
```

on-hover

```javascript
onFocus // :hover
```

perspective

```javascript
perspective(1) // perspective(1rem)
perspective('1rem') // perspective(1rem)
```

radial

```javascript
radial('white', 'black') // radial-gradient(white,black)
radial(['white', 0], ['black', 100]) // radial-gradient(white 0%,black 100%)
```

repeat

```javascript
repeat('fill', '1rem')) // repeat(auto-fill,1rem)
repeat('fit', '1rem')) // repeat(auto-fit,1rem)
repeat(1)) // repeat(1,1fr)
repeat(1, 1)) // repeat(1,1fr)
repeat(1, 'auto')) // repeat(1,auto)
```

rotate

```javascript
rotate(1) // rotate(1deg)
```

rotate-3d

```javascript
rotate3d(1,1,1,1) // rotate(1,1,1,1deg)
```

rotate-x

```javascript
rotateX(1) // rotateX(1deg)
```

rotate-y

```javascript
rotateY(1) // rotateY(1deg)
```

rotate-z

```javascript
rotateZ(1) // rotateZ(1deg)
```

scale

```javascript
scale(1,1) // scale(1,1)
```

scale-3d

```javascript
scale3d(1,1,1) // scale(1,1,1)
```

scale-x

```javascript
scaleX(1) // scale(1)
```

scale-y

```javascript
scaleY(1) // scale(1)
```

scale-z

```javascript
scaleZ(1) // scale(1)
```

screen

```javascript
screen({ orientation: 'landscape' }) // @media screen and (orientation:'landscape')
```

screen-between

```javascript
screenBetween(600, 1200) // @media screen and (min-width:37.5em) and (max-width:74.9375em)
```

screen-from

```javascript
screenFrom(600) // @media screen and (min-width:37.5em)
```

screen-to

```javascript
screenTo(1200) // @media screen and (max-width:74.9375em)
```

skew

```javascript
skew(360, 360) // skew(360deg,360deg)
```

skew-x

```javascript
skewX(360) // skewX(360deg)
```

skew-y

```javascript
skewY(360) // skewY(360deg)
```

translate

```javascript
translate(1,1) // translate(1rem,1rem)
translate('100%', '100%') // translate(100%,100%)
```

translate-3d

```javascript
translate3d(1,1,1) // translate3d(1rem,1rem,1rem)
translate3d('100%', '100%', '100%') // translate3d(100%,100%,100%)
```

translate-x

```javascript
translateX(1) // translateX(1rem)
translateX('100%') // translateX(100%)
```

translate-y

```javascript
translateY(1) // translateY(1rem)
translateY('100%') // translateY(100%)
```

translate-z

```javascript
translateZ(1) // translateZ(1rem)
translateZ('100%') // translateZ(100%)
```

### Alias

custom

```javascript
// in

{
  custom: { key: 'val' },
}

// out

{
  key: 'val',
}
```

animation

```javascript
// in

{
  animation: 'foobar',
  animation: ['foo', 'bar'],
}

// out

{
  animationName: 'foobar',
  animationName: 'foo,bar',
}
```

animation-count

```javascript
// in

{
  animationCount: true,
  animationCount: 1,
  animationCount: [1, 1],
}

// out

{
  animationIterationCount: 'infinite',
  animationIterationCount: '1',
  animationIterationCount: '1,1',
}
```

animation-delay

```javascript
// in

{
  animationDelay: 100,
  animationDelay: '100ms',
  animationDelay: [100, '100ms'],
}

// out

{
  animationDelay: '100ms',
  animationDelay: '100ms',
  animationDelay: '100ms,100ms',
}
```

animation-direction

```javascript
// in

{
  animationDirection: 'backwards-forwards',
  animationDirection: 'backwards',
  animationDirection: 'forwards',
  animationDirection: 'forwards-backwards',
}

// out

{
  animationDirection: 'alternate-reverse',
  animationDirection: 'reverse',
  animationDirection: 'normal',
  animationDirection: 'alternate',
}
```

animation-duration

```javascript
// in

{
  animationDuration: 100,
  animationDuration: '100ms',
  animationDuration: [100, '100ms'],
}

// out

{
  animationDuration: '100ms',
  animationDuration: '100ms',
  animationDuration: '100ms,100ms',
}
```

animation-fn

```javascript
// in

{
  animationFn: 'ease',
  animationFn: ['ease', 'ease'],
}

// out

{
  animationTimingFunction: 'ease',
  animationTimingFunction: 'ease,ease',
}
```

animation-is-active

```javascript
// in

{
  animationIsActive: true,
  animationIsActive: false,
  animationIsActive: [true, false],
}

// out

{
  animationPlayState: 'running',
  animationPlayState: 'paused',
  animationPlayState: 'running,paused',
}
```

animation-origin

```javascript
// in

{
  animationOrigin: true,
  animationOrigin: false,
  animationOrigin: 'forwards',
  animationOrigin: 'backwards',
}

// out

{
  animationFillMode: 'both',
  animationFillMode: 'none',
  animationFillMode: 'forwards',
  animationFillMode: 'backwards',
}
```

box-bg

```javascript
// in

{
  boxBg: false,
  boxBg: 'url(bg.png)',
  boxBg: ['url(bg.svg)', 'url(bg.png)', 'url(bg.jpg)'],
}

// out

{
  backgroundImage: 'none',
  backgroundImage: 'url(bg.png)',
  backgroundImage: 'url(bg.svg),url(bg.png),url(bg.jpg)',
}
```

box-bg-move

```javascript
// in

{
  boxBgMove: ['center', 'center center', { left: 1, top: 1 }, { bottom: '100%', right: '100%' }],
  boxBgMove: 'center',
  boxBgMove: 'center center',
  boxBgMove: { left: 1, top: 1 },
  boxBgMove: { bottom: '100%', right: '100%' },
}

// out

{
  backgroundPosition: 'center,center center,left 1rem top 1rem ,bottom 100% right 100%',
  backgroundPosition: 'center',
  backgroundPosition: 'center center',
  backgroundPosition: 'left 1rem top 1rem',
  backgroundPosition: 'bottom 100% right 100%',
}
```

box-bg-origin

```javascript
// in

{
  boxBgOrigin: ['border', 'space', 'content'],
  boxBgOrigin: 'border',
  boxBgOrigin: 'space',
  boxBgOrigin: 'content',
}

// out

{
  backgroundOrigin: 'border-box,padding-box,content-box',
  backgroundOrigin: 'border-box',
  backgroundOrigin: 'space-box',
  backgroundOrigin: 'content-box',
}
```

box-bg-overflow

```javascript
// in

{
  boxBgOverflow: ['border', 'space', 'content'],
  boxBgOverflow: 'border',
  boxBgOverflow: 'space',
  boxBgOverflow: 'content',
}

// out

{
  backgroundClip: 'border-box,padding-box,content-box',
  backgroundClip: 'border-box',
  backgroundClip: 'space-box',
  backgroundClip: 'content-box',
}
```

box-bg-position

```javascript
// in

{
  boxBgPosition: ['local', 'global', false],
  boxBgPosition: 'local',
  boxBgPosition: 'global',
  boxBgPosition: false,
}

// out

{
 backgroundAttachment: 'local',
 backgroundAttachment: 'scroll',
 backgroundAttachment: 'fixed',
}
```

box-bg-repeat

```javascript
// in

{
  boxBgRepeat: [false, true, 'y', 'x'],
  boxBgRepeat: false,
  boxBgRepeat: true,
  boxBgRepeat: 'y',
  boxBgRepeat: 'x',
}

// out

{
  backgroundRepeat: 'no-repeat,repeat,repeat-y,repeat-x',
  backgroundRepeat: 'no-repeat',
  backgroundRepeat: 'repeat',
  backgroundRepeat: 'repeat-y',
  backgroundRepeat: 'repeat-x',
}
```

box-bg-size

```javascript
// in

{
  boxBgSize: ['fill', 'fit', 'auto', { height: 1, width: '100%' }],
  boxBgSize: 'fill',
  boxBgSize: 'fit',
  boxBgSize: 'auto',
  boxBgSize: { height: 1, width: '100%' },
}

// out

{
  backgroundSize: 'cover,contain,auto,100% 1rem',
  backgroundSize: 'cover',
  backgroundSize: 'contain',
  backgroundSize: 'auto',
  backgroundSize: '100% 1rem',
}
```

box-border

```javascript
// in

{
  boxBorder: false,
  boxBorder: 'hsl(0,0%,0%)',
}

// out

{
  borderBottomColor: 'transparent',
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderTopColor: 'transparent',
  borderBottomColor: 'hsl(0,0%,0%)',
  borderLeftColor: 'hsl(0,0%,0%)',
  borderRightColor: 'hsl(0,0%,0%)',
  borderTopColor: 'hsl(0,0%,0%)',
}
```

box-border-x

```javascript
// in

{
  boxBorderX: false,
  boxBorderX: 'hsl(0,0%,0%)',
}

// out

{
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderLeftColor: 'hsl(0,0%,0%)',
  borderRightColor: 'hsl(0,0%,0%)',
}
```

box-border-y

```javascript
// in

{
  boxBorderY: false,
  boxBorderY: 'hsl(0,0%,0%)',
}

// out

{
  borderBottomColor: 'transparent',
  borderTopColor: 'transparent',
  borderBottomColor: 'hsl(0,0%,0%)',
  borderTopColor: 'hsl(0,0%,0%)',
}
```

box-border-bottom

```javascript
// in

{
  boxBorderBottom: false,
  boxBorderBottom: 'hsl(0,0%,0%)',
}

// out

{
  borderBottomColor: 'transparent',
  borderBottomColor: 'hsl(0,0%,0%)',
}
```

box-border-left

```javascript
// in

{
  boxBorderLeft: false,
  boxBorderLeft: 'hsl(0,0%,0%)',
}

// out

{
  borderLeftColor: 'transparent',
  borderLeftColor: 'hsl(0,0%,0%)',
}
```

box-border-right

```javascript
// in

{
  boxBorderRight: false,
  boxBorderRight: 'hsl(0,0%,0%)',
}

// out

{
  borderRightColor: 'transparent',
  borderRightColor: 'hsl(0,0%,0%)',
}
```

box-border-top

```javascript
// in

{
  boxBorderTop: false,
  boxBorderTop: 'hsl(0,0%,0%)',
}

// out

{
  borderTopColor: 'transparent',
  borderTopColor: 'hsl(0,0%,0%)',
}
```

box-border-kind

```javascript
// in

{
  boxBorderKind: true,
  boxBorderKind: false,
  boxBorderKind: 'dashed',
}

// out

{
  borderBottomStyle: 'solid',
  borderLeftStyle: 'solid',
  borderRightStyle: 'solid',
  borderTopStyle: 'solid',
  borderBottomStyle: 'none',
  borderLeftStyle: 'none',
  borderRightStyle: 'none',
  borderTopStyle: 'none',
  borderBottomStyle: 'dashed',
  borderLeftStyle: 'dashed',
  borderRightStyle: 'dashed',
  borderTopStyle: 'dashed',
}
```

box-border-kind-x

```javascript
// in

{
  boxBorderKind: true,
  boxBorderKind: false,
  boxBorderKind: 'dashed',
}

// out

{
  borderLeftStyle: 'solid',
  borderRightStyle: 'solid',
  borderLeftStyle: 'none',
  borderRightStyle: 'none',
  borderLeftStyle: 'dashed',
  borderRightStyle: 'dashed',
}
```

box-border-kind-y

```javascript
// in

{
  boxBorderKind: true,
  boxBorderKind: false,
  boxBorderKind: 'dashed',
}

// out

{
  borderBottomStyle: 'solid',
  borderTopStyle: 'solid',
  borderBottomStyle: 'none',
  borderTopStyle: 'none',
  borderBottomStyle: 'dashed',
  borderTopStyle: 'dashed',
}
```

box-border-kind-bottom

```javascript
// in

{
  boxBorderKind: true,
  boxBorderKind: false,
  boxBorderKind: 'dashed',
}

// out

{
  borderBottomStyle: 'solid',
  borderBottomStyle: 'none',
  borderBottomStyle: 'dashed',
}
```

box-border-kind-left

```javascript
// in

{
  boxBorderKind: true,
  boxBorderKind: false,
  boxBorderKind: 'dashed',
}

// out

{
  borderLeftStyle: 'solid',
  borderLeftStyle: 'none',
  borderLeftStyle: 'dashed',
}
```

box-border-kind-right

```javascript
// in

{
  boxBorderKind: true,
  boxBorderKind: false,
  boxBorderKind: 'dashed',
}

// out

{
  borderRightStyle: 'solid',
  borderRightStyle: 'none',
  borderRightStyle: 'dashed',
}
```

box-border-kind-top

```javascript
// in

{
  boxBorderKind: true,
  boxBorderKind: false,
  boxBorderKind: 'dashed',
}

// out

{
  borderTopStyle: 'solid',
  borderTopStyle: 'none',
  borderTopStyle: 'dashed',
}
```

box-border-size

```javascript
// in

{
  boxBorderSize: 0,
}

// out

{
  borderBottomWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderTopWidth: 0,
}
```

box-border-size-x

```javascript
// in

{
  boxBorderSize: 0,
}

// out

{
  borderLeftWidth: 0,
  borderRightWidth: 0,
}
```

box-border-size-y

```javascript
// in

{
  boxBorderSize: 0,
}

// out

{
  borderBottomWidth: 0,
  borderTopWidth: 0,
}
```

box-border-size-bottom

```javascript
// in

{
  boxBorderSize: 0,
}

// out

{
  borderBottomWidth: 0,
}
```

box-border-size-left

```javascript
// in

{
  boxBorderSize: 0,
}

// out

{
  borderLeftWidth: 0,
}
```

box-border-size-right

```javascript
// in

{
  boxBorderSize: 0,
}

// out

{
  borderRightWidth: 0,
}
```

box-order-size-top

```javascript
// in

{
  boxBorderSize: 0,
}

// out

{
  borderTopWidth: 0,
}
```

box

```javascript
// in

{
  box: false,
  box: 'hsl(0,0%,0%)',
}

// out

{
  backgroundColor: 'transparent',
  backgroundColor: 'hsl(0,0%,0%)',
}
```

box-content

```javascript
// in

{
  boxContent: true,
  boxContent: '"foobar"',
}

// out

{
  content: '""',
  content: '"foobar"',
}
```

box-corner

```javascript
// in

{
  boxCorner: 1,
  boxCorner: [1, 1],
  boxCorner: '100%',
}

// out

{
  borderBottomLeftRadius: '1px',
  borderBottomRightRadius: '1px',
  borderTopLeftRadius: '1px',
  borderTopRightRadius: '1px',
  borderBottomLeftRadius: '1px/1px',
  borderBottomRightRadius: '1px/1px',
  borderTopLeftRadius: '1px/1px',
  borderTopRightRadius: '1px/1px',
  borderBottomLeftRadius: '100%',
  borderBottomRightRadius: '100%',
  borderTopLeftRadius: '100%',
  borderTopRightRadius: '100%',
}
```

box-corner-bottom

```javascript
// in

{
  boxCornerBottom: 1,
  boxCornerBottom: [1, 1],
  boxCornerBottom: '100%',
}

// out

{
  borderBottomLeftRadius: '1px',
  borderBottomRightRadius: '1px',
  borderBottomLeftRadius: '1px/1px',
  borderBottomRightRadius: '1px/1px',
  borderBottomLeftRadius: '100%',
  borderBottomRightRadius: '100%',
}
```

box-corner-left

```javascript
// in

{
  boxCornerLeft: 1,
  boxCornerLeft: [1, 1],
  boxCornerLeft: '100%',
}

// out

{
  borderBottomLeftRadius: '1px',
  borderTopLeftRadius: '1px',
  borderBottomLeftRadius: '1px/1px',
  borderTopLeftRadius: '1px/1px',
  borderBottomLeftRadius: '100%',
  borderTopLeftRadius: '100%',
}
```

box-corner-left-bottom

```javascript
// in

{
  boxCornerLeftBottom: 1,
  boxCornerLeftBottom: [1, 1],
  boxCornerLeftBottom: '100%',
}

// out

{
  borderBottomLeftRadius: '1px',
  borderBottomLeftRadius: '1px/1px',
  borderBottomLeftRadius: '100%',
}
```

box-corner-left-top

```javascript
// in

{
  boxCornerLeftTop: 1,
  boxCornerLeftTop: [1, 1],
  boxCornerLeftTop: '100%',
}

// out

{
  borderTopLeftRadius: '1px',
  borderTopLeftRadius: '1px/1px',
  borderTopLeftRadius: '100%',
}
```

box-corner-right

```javascript
// in

{
  boxCornerRight: 1,
  boxCornerRight: [1, 1],
  boxCornerRight: '100%',
}

// out

{
  borderBottomRightRadius: '1px',
  borderTopRightRadius: '1px',
  borderBottomRightRadius: '1px/1px',
  borderTopRightRadius: '1px/1px',
  borderBottomRightRadius: '100%',
  borderTopRightRadius: '100%',
}
```

box-corner-right-bottom

```javascript
// in

{
  boxCornerRightBottom: 1,
  boxCornerRightBottom: [1, 1],
  boxCornerRightBottom: '100%',
}

// out

{
  borderBottomRightRadius: '1px',
  borderBottomRightRadius: '1px/1px',
  borderBottomRightRadius: '100%',
}
```

box-corner-right-top

```javascript
// in

{
  boxCornerRightTop: 1,
  boxCornerRightTop: [1, 1],
  boxCornerRightTop: '100%',
}

// out

{
  borderTopRightRadius: '1px',
  borderTopRightRadius: '1px/1px',
  borderTopRightRadius: '100%',
}
```

box-corner-top

```javascript
// in

{
  boxCornerTop: 1,
  boxCornerTop: [1, 1],
  boxCornerTop: '100%',
}

// out

{
  borderTopLeftRadius: '1px',
  borderTopRightRadius: '1px',
  borderTopLeftRadius: '1px/1px',
  borderTopRightRadius: '1px/1px',
  borderTopLeftRadius: '100%',
  borderTopRightRadius: '100%',
}
```

box-cursor

```javascript
// in

{
  boxCursor: true,
  boxCursor: false,
  boxCursor: 'auto',
}

// out

{
  cursor: 'pointer',
  cursor: 'not-allowed',
  cursor: 'auto',
}
```

box-height

```javascript
// in

{
  boxHeight: 0,
  boxHeight: '100%',
}

// out

{
  height: 0,
  height: '100%',
}
```

box-height-max

```javascript
// in

{
  boxHeightMax: false,
  boxHeightMax: 0,
  boxHeightMax: '100%',
}

// out

{
  maxHeight: 'none',
  maxHeight: 0,
  maxHeight: '100%',
}
```

box-height-min

```javascript
// in

{
  boxHeightMin: 0,
  boxHeightMin: '100%',
}

// out

{
  minHeight: 0,
  minHeight: '100%',
}
```

box-move

```javascript
// in

{
  boxMove: 0,
}

// out

{
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
}
```

box-move-bottom

```javascript
// in

{
  boxMoveBottom: 0,
}

// out

{
  bottom: 0,
}
```

box-move-left

```javascript
// in

{
  boxMoveLeft: 0,
}

// out

{
  left: 0,
}
```

box-move-right

```javascript
// in

{
  boxMoveRight: 0,
}

// out

{
  right: 0,
}
```

box-move-top

```javascript
// in

{
  boxMoveTop: 0,
}

// out

{
  top: 0,
}
```

box-move-x

```javascript
// in

{
  boxMoveX: 0,
}

// out

{
  left: 0,
  right: 0,
}
```

box-move-y

```javascript
// in

{
  boxMoveY: 0,
}

// out

{
  bottom: 0,
  top: 0,
}
```

box-must-break-words

```javascript
// in

{
  boxMustBreakWords: true,
  boxMustBreakWords: false,
}

// out

{
  overflowWrap: 'break-word',
  overflowWrap: 'normal',
}
```

box-must-handle-events

```javascript
// in

{
  boxMustHandleEvents: true,
  boxMustHandleEvents: false,
}

// out

{
  pointerEvents: 'auto',
  pointerEvents: 'none',
}
```

box-opacity

```javascript
// in

{
  boxOpacity: 100,
  boxOpacity: 0,
}

// out

{
  opacity: 1,
  opacity: 0,
}
```

box-order

```javascript
// in

{
  boxOrder: 1,
}

// out

{
  zIndex: 1,
}
```

box-outline

```javascript
// in

{
  boxOutline: false,
  boxOutline: 'hsl(0,0%,0%)',
}

// out

{
  outlineColor: 'transparent',
  outlineColor: 'hsl(0,0%,0%)',
}
```

box-outline-kind

```javascript
// in

{
  boxOutlineKind: true,
  boxOutlineKind: false,
  boxOutlineKind: 'dashed',
}

// out

{
  outlineStyle: 'solid',
  outlineStyle: 'none',
  outlineStyle: 'dashed',
}
```

box-outline-size

```javascript
// in

{
  boxOutlineWidth: 1,
}

// out

{
  outlineWidth: 1,
}
```

box-outline-space

```javascript
// in

{
  boxOutlineSpace: 1,
}

// out

{
  outlineOffset: 1,
}
```

box-overflow-x

```javascript
// in

{
  boxOverflowX: true,
  boxOverflowX: false,
  boxOverflowX: 'scroll',
  boxOverflowX: 'auto',
}

// out

{
  overflowX: 'visible',
  overflowX: 'hidden',
  overflowX: 'scroll',
  overflowX: 'auto',
}
```

box-overflow-y

```javascript
// in

{
  boxOverflowY: true,
  boxOverflowY: false,
  boxOverflowY: 'scroll',
  boxOverflowY: 'auto',
}

// out

{
  overflowY: 'visible',
  overflowY: 'hidden',
  overflowY: 'scroll',
  overflowY: 'auto',
}
```

box-position

```javascript
// in

{
  boxPosition: true,
  boxPosition: 'relative',
  boxPosition: 'absolute',
  boxPosition: false,
}

// out

{
  boxPosition: 'static',
  boxPosition: 'relative',
  boxPosition: 'absolute',
  boxPosition: 'fixed',
}
```

box-shadow

```javascript
// in

{
  boxShadow: false,
  boxShadow: '1px 1px 1px 1px hsla(0,0%,0%,1) inset',
  boxShadow: { blur: 1, color: 'hsla(0,0%,0%,1)', isReversed: true, size: 1, x: 1, y: 1 },
  boxShadow: ['1px 1px 1px 1px hsla(0,0%,0%,1) inset', { blur: 1, color: 'hsla(0,0%,0%,1)', isReversed: true, size: 1, x: 1, y: 1 }],
}

// out

{
  boxShadow: 'none',
  boxShadow: '1px 1px 1px 1px hsla(0,0%,0%,1) inset',
  boxShadow: '1px 1px 1px 1px hsla(0,0%,0%,1) inset',
  boxShadow: ['1px 1px 1px 1px hsla(0,0%,0%,1) inset', '1px 1px 1px 1px hsla(0,0%,0%,1) inset'],
}
```

box-space-inner

```javascript
// in

{
  boxSpaceInner: 0,
}

// out

{
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
}
```

box-space-inner-bottom

```javascript
// in

{
  boxSpaceInnerBottom: 0,
}

// out

{
  paddingBottom: 0,
}
```

box-space-inner-left

```javascript
// in

{
  boxSpaceInnerLeft: 0,
}

// out

{
  paddingLeft: 0,
}
```

box-space-inner-right

```javascript
// in

{
  boxSpaceInnerRight: 0,
}

// out

{
  paddingRight: 0,
}
```

box-space-inner-top

```javascript
// in

{
  boxSpaceInnerTop: 0,
}

// out

{
  paddingTop: 0,
}
```

box-space-inner-x

```javascript
// in

{
  boxSpaceInnerX: 0,
}

// out

{
  paddingLeft: 0,
  paddingRight: 0,
}
```

box-space-inner-y

```javascript
// in

{
  boxSpaceInnerY: 0,
}

// out

{
  paddingBottom: 0,
  paddingTop: 0,
}
```

box-space-outer

```javascript
// in

{
  boxSpaceOuter: 0,
}

// out

{
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
}
```

box-space-outer-bottom

```javascript
// in

{
  boxSpaceOuterBottom: 0,
}

// out

{
  marginBottom: 0,
}
```

box-space-outer-left

```javascript
// in

{
  boxSpaceOuterLeft: 0,
}

// out

{
  marginLeft: 0,
}
```

box-space-outer-right

```javascript
// in

{
  boxSpaceOuterRight: 0,
}

// out

{
  marginRight: 0,
}
```

box-space-outer-top

```javascript
// in

{
  boxSpaceOuterTop: 0,
}

// out

{
  marginTop: 0,
}
```

box-space-outer-x

```javascript
// in

{
  boxSpaceOuterX: 0,
}

// out

{
  marginLeft: 0,
  marginRight: 0,
}
```

box-space-outer-y

```javascript
// in

{
  boxSpaceOuterY: 0,
}

// out

{
  marginBottom: 0,
  marginTop: 0,
}
```

box-width

```javascript
// in

{
  boxWidth: 0,
  boxWidth: '100%',
}

// out

{
  width: 0,
  width: '100%',
}
```

box-width-max

```javascript
// in

{
  boxWidthMax: false,
  boxWidthMax: 0,
  boxWidthMax: '100%',
}

// out

{
  maxWidth: 'none',
  maxWidth: 0,
  maxWidth: '100%',
}
```

box-width-min

```javascript
// in

{
  boxWidthMin: 0,
  boxWidthMin: '100%',
}

// out

{
  minWidth: 0,
  minWidth: '100%',
}
```

grid-area

```javascript
// in

{
  gridArea: 'name',
}

// out

{
  gridArea: 'name',
}
```

grid-align-major

```javascript
// in

{
  gridAlignMajor: 'center',
  gridAlignMajor: 'end',
  gridAlignMajor: 'start',
  gridAlignMajor: 'stretch',
}

// out

{
  justifyItems: 'center',
  justifyItems: 'end',
  justifyItems: 'start',
  justifyItems: 'stretch',
}
```

grid-align-minor

```javascript
// in

{
  gridAlignMinor: 'center',
  gridAlignMinor: 'end',
  gridAlignMinor: 'start',
  gridAlignMinor: 'stretch',
}

// out

{
  alignItems: 'center',
  alignItems: 'end',
  alignItems: 'start',
  alignItems: 'stretch',
}
```

grid-align-self-major

```javascript
// in

{
  gridAlignSelfMajor: 'center',
  gridAlignSelfMajor: 'end',
  gridAlignSelfMajor: 'start',
  gridAlignSelfMajor: 'stretch',
}

// out

{
  justifySelf: 'center',
  justifySelf: 'end',
  justifySelf: 'start',
  justifySelf: 'stretch',
}
```

grid-align-self-minor

```javascript
// in

{
  gridAlignSelfMinor: 'center',
  gridAlignSelfMinor: 'end',
  gridAlignSelfMinor: 'start',
  gridAlignSelfMinor: 'stretch',
}

// out

{
  alignSelf: 'center',
  alignSelf: 'end',
  alignSelf: 'start',
  alignSelf: 'stretch',
}
```

grid-col-end

```javascript
// in

{
  gridColEnd: 1,
  gridColEnd: [1, true],
}

// out

{
  gridColumnEnd: 1,
  gridColumnEnd: 'span 1',
}
```

grid-col-start

```javascript
// in

{
  gridColStart: 1,
}

// out

{
  gridColumnStart: 1,
}
```

grid-cols

```javascript
// in

{
  gridCols: 1,
  gridCols: '100%',
  gridCols: false,
  gridCols: [1, 1],
}

// out

{
  gridTemplateColumns: '1fr',
  gridTemplateColumns: '100%',
  gridTemplateColumns: 'none',
  gridTemplateColumns: ['1fr','1fr'],
}
```

grid-cols-pseudo

```javascript
// in

{
  gridColsPseudo: 'auto',
  gridColsPseudo: 1,
  gridColsPseudo: [1, 1],
}

// out

{
  gridAutoColumns: 'auto',
  gridAutoColumns: '1fr',
  gridAutoColumns: ['1fr', '1fr'],
}
```

grid-direction

```javascript
// in

{
  gridDirection: 'x',
  gridDirection: 'y',
  gridDirection: 'x-auto',
  gridDirection: 'y-auto',
}

// out

{
  gridAutoFlow: 'row',
  gridAutoFlow: 'column',
  gridAutoFlow: 'row dense',
  gridAutoFlow: 'column dense',
}
```

grid-place-major

```javascript
// in

{
  gridPlaceMajor: 'start',
  gridPlaceMajor: 'end',
  gridPlaceMajor: 'center',
  gridPlaceMajor: 'space',
  gridPlaceMajor: 'space-inner',
  gridPlaceMajor: 'space-outer',
}

// out

{
  justifyContent: 'start',
  justifyContent: 'end',
  justifyContent: 'center',
  justifyContent: 'space-evenly',
  justifyContent: 'space-between',
  justifyContent: 'space-around',
}
```

grid-place-minor

```javascript
// in

{
  gridPlaceMinor: 'start',
  gridPlaceMinor: 'end',
  gridPlaceMinor: 'center',
  gridPlaceMinor: 'space',
  gridPlaceMinor: 'space-inner',
  gridPlaceMinor: 'space-outer',
}

// out

{
  alignContent: 'start',
  alignContent: 'end',
  alignContent: 'center',
  alignContent: 'space-evenly',
  alignContent: 'space-between',
  alignContent: 'space-around',
}
```

grid-row-end

```javascript
// in

{
  gridRowEnd: 1,
  gridRowEnd: [1, true],
}

// out

{
  gridRowEnd: 1,
  gridRowEnd: 'span 1',
}
```

grid-row-start

```javascript
// in

{
  gridRowStart: 1,
}

// out

{
  gridRowStart: 1,
}
```

grid-rows

```javascript
// in

{
  gridRows: 1,
  gridRows: '100%',
  gridRows: false,
  gridRows: [1, 1],
}

// out

{
  gridTemplateRows: '1fr',
  gridTemplateRows: '100%',
  gridTemplateRows: 'none',
  gridTemplateRows: ['1fr','1fr'],
}
```

grid-rows-pseudo

```javascript
// in

{
  gridRowsPseudo: 'auto',
  gridRowsPseudo: 1,
  gridRowsPseudo: [1, 1],
}

// out

{
  gridAutoRows: 'auto',
  gridAutoRows: '1fr',
  gridAutoRows: ['1fr', '1fr'],
}
```


grid-space-x

```javascript
// in

{
  gridSpaceX: 0,
}

// out

{
  gridRowGap: 0,
}
```

grid-space-y

```javascript
// in

{
  gridSpaceY: 0,
}

// out

{
  gridColumnGap: 0,
}
```

grid-template

```javascript
// in

{
  gridTemplate: '"header header header" "body body body" "footer footer footer"',
  gridTemplate: ["header header header", "body body body", "footer footer footer"],
  gridTemplate: [['header', 'header', 'header'], ['body', 'body', 'body'], ['footer', 'footer', 'footer']],
}

// out

{
  gridTemplateAreas: '"header header header" "body body body" "footer footer footer"',
  gridTemplateAreas: '"header header header" "body body body" "footer footer footer"',
  gridTemplateAreas: '"header header header" "body body body" "footer footer footer"',
}
```

kind

```javascript
// in

{
  kind: 'box',
  kind: 'text',
  kind: 'track',
  kind: 'grid',
  kind: false,
}

// out

{
  display: 'block',
  display: 'inline',
  display: 'flex',
  display: 'grid',
  display: 'none',
}
```

modify

```javascript
// in

{
  modify: false,
  modify: 'translate(0,0)',
  modify: ['translateX(0)', 'translateY(0)'],
}

// out

{
  transform: 'none',
  transform: 'translate(0,0)',
  transform: 'translateX(0) translateY(0)',
}
```

modify-origin

```javascript
// in

{
  modifyOrigin: 'center',
  modifyOrigin: ['50%', '50%'],
}

// out

{
  transformOrigin: 'center',
  transformOrigin: '50% 50%',
}
```

shape

```javascript
// in

{
  shape: false,
  shape: 'hsl(0,0%,0%)',
}

// out

{
  fill: 'transparent',
  fill: 'hsl(0,0%,0%)',
}
```

shape-border

```javascript
// in

{
  shapeBorder: false,
  shapeBorder: 'hsl(0,0%,0%)',
}

// out

{
  stroke: 'transparent',
  stroke: 'hsl(0,0%,0%)',
}
```

shape-border-dashes

```javascript
// in

{
  shapeBorderKind: 1,
  shapeBorderKind: [1, 1],
}

// out

{
  strokeDasharray: 1,
  strokeDasharray: '1 1',
}
```

shape-border-size

```javascript
// in

{
  shapeBorderSize: 1,
}

// out

{
  strokeWidth: 1,
}
```

shape-border-space

```javascript
// in

{
  shapeBorderSpace: 1,
}

// out

{
  strokeDashoffset: 1,
}
```

text-align

```javascript
// in

{
  textAlign: 'center',
  textAlign: 'end',
  textAlign: 'start',
  textAlign: 'stretch',
}

// out

{
  textAlign: 'center',
  textAlign: 'end',
  textAlign: 'start',
  textAlign: 'justify',
}
```

text-case

```javascript
// in

{
  textCase: 'upper',
  textCase: 'lower',
  textCase: false,
}

// out

{
  textTransform: 'uppercase',
  textTransform: 'lowercase',
  textTransform: 'none',
}
```

text

```javascript
// in

{
  text: false,
  text: 'hsl(0,0%,0%)',
}

// out

{
  color: 'transparent',
  color: 'hsl(0,0%,0%)',
}
```

text-cols-amount

```javascript
// in

{
  textColsAmount: 1,
}

// out

{
  columnCount: 1,
}
```

text-cols-border

```javascript
// in

{
  textColsBorder: false,
  textColsBorder: 'hsl(0,0%,0%)',
}

// out

{
  columnRuleColor: 'transparent',
  columnRuleColor: 'hsl(0,0%,0%)',
}
```

text-cols-border-kind

```javascript
// in

{
  textColsBorderKind: true,
  textColsBorderKind: false,
  textColsBorderKind: 'dashed',
}

// out

{
  columnRuleStyle: 'solid',
  columnRuleStyle: 'none',
  columnRuleStyle: 'dashed',
}
```

text-cols-border-size

```javascript
// in

{
  textColsBorderSize: 1,
}

// out

{
  columnRuleWidth: 1,
}
```

text-cols-size

```javascript
// in

{
  textColsSize: 1,
}

// out

{
  columnWidth: 1,
}
```

text-cols-space

```javascript
// in

{
  textColsSpace: 1,
}

// out

{
  columnGap: 1,
}
```

text-decoration

```javascript
// in

{
  textDecoration: 'top',
  textDecoration: 'bottom',
  textDecoration: 'center',
  textDecoration: false,
}

// out

{
  textDecoration: 'overline',
  textDecoration: 'line-through',
  textDecoration: 'underline',
  textDecoration: 'none',
}
```

text-font

```javascript
// in

{
  textFont: 'serif',
  textFont: ['sans-serif', 'serif'],
}

// out

{
  fontFamily: 'serif',
  fontFamily: 'sans-serif, serif',
}
```

text-is-italic

```javascript
// in

{
  textIsItalic: true,
  textIsItalic: false,
}

// out

{
  textStyle: 'italic',
  textStyle: 'normal',
}
```

text-line

```javascript
// in

{
  textLine: 1,
}

// out

{
  lineHeight: 1,
}
```

text-overflow

```javascript
// in

{
  textOverflow: true,
  textOverflow: false,
  textOverflow: 'raw',
  textOverflow: 'raw-fit',
  textOverflow: 'raw-fit-strict',
}

// out

{
  whiteSpace: 'normal',
  whiteSpace: 'nowrap',
  whiteSpace: 'pre',
  whiteSpace: 'pre-wrap',
  whiteSpace: 'pre-line',
}
```

text-overflow-handler

```javascript
// in

{
  textOverflowHandler: true,
  textOverflowHandler: false,
}

// out

{
  textOverflow: 'ellipsis',
  textOverflow: 'clip',
}
```

text-shadow

```javascript
// in

{
  textShadow: false,
  textShadow: '1px 1px 1px hsla(0,0%,0%,1)',
  textShadow: { blur: 1, color: 'hsla(0,0%,0%,1)', x: 1, y: 1 },
  textShadow: ['1px 1px 1px hsla(0,0%,0%,1)', { blur: 1, color: 'hsla(0,0%,0%,1)', x: 1, y: 1 }],
}

// out

{
  textShadow: 'none',
  textShadow: '1px 1px 1px hsla(0,0%,0%,1)',
  textShadow: '1px 1px 1px hsla(0,0%,0%,1)',
  textShadow: ['1px 1px 1px hsla(0,0%,0%,1)', '1px 1px 1px hsla(0,0%,0%,1)'],
}
```

text-size

```javascript
// in

{
  textSize: 16,
}

// out

{
  fontSize: 16,
}
```

text-space-char

```javascript
// in

{
  textSpaceChar: 1,
}

// out

{
  letterSpacing: 1,
}
```

text-space-word

```javascript
// in

{
  textSpaceWord: 1,
}

// out

{
  wordSpacing: 1,
}
```

text-weight

```javascript
// in

{
  textWeight: 400,
}

// out

{
  fontWeight: 400,
}
```

track-align

```javascript
// in

{
  trackAlign: 'center',
  trackAlign: 'end',
  trackAlign: 'start',
  trackAlign: 'stretch',
}

// out

{
  alignItems: 'center',
  alignItems: 'flex-end',
  alignItems: 'flex-start',
  alignItems: 'stretch',
}
```

track-align-self

```javascript
// in

{
  trackAlignSelf: 'center',
  trackAlignSelf: 'end',
  trackAlignSelf: 'start',
  trackAlignSelf: 'stretch',
}

// out

{
  alignSelf: 'center',
  alignSelf: 'flex-end',
  alignSelf: 'flex-start',
  alignSelf: 'stretch',
}
```

track-direction

```javascript
// in

{
  trackDirection: 'x',
  trackDirection: 'y',
  trackDirection: ['x', true],
  trackDirection: ['y', true],
}

// out

{
  direction: 'row',
  direction: 'column',
  direction: 'row-reverse',
  direction: 'col-reverse',
}
```

track-grow

```javascript
// in

{
  trackGrow: 1,
}

// out

{
  flexGrow: 1,
}
```

track-order

```javascript
// in

{
  trackOrder: 1,
}

// out

{
  order: 1,
}
```

track-origin

```javascript
// in

{
  trackOrigin: '100%',
}

// out

{
  flexBasis: '100%',
}
```

track-overflow

```javascript
// in

{
  trackOverflow: -1,
  trackOverflow: false,
  trackOverflow: 1,
}

// out

{
  flexWrap: 'wrap-reverse',
  flexWrap: 'nowrap',
  flexWrap: 'wrap',
}
```

track-place

```javascript
// in

{
  trackPlace: 'start',
  trackPlace: 'end',
  trackPlace: 'center',
  trackPlace: 'space',
  trackPlace: 'space-inner',
  trackPlace: 'space-outer',
}

// out

{
  justifyContent: 'flex-start',
  justifyContent: 'flex-end',
  justifyContent: 'center',
  justifyContent: 'space-evenly',
  justifyContent: 'space-between',
  justifyContent: 'space-around',
}
```

track-shrink

```javascript
// in

{
  trackShrink: 0,
}

// out

{
  flexShrink: 0,
}
```

transition

```javascript
// in

{
  transition: 'color',
  transition: ['background-color', 'border-color', 'color', 'fill', 'stroke', 'transform'],
}

// out

{
  transitionProperty: 'color',
  transitionProperty: 'background-color, border-color, color, fill, stroke, transform',
}
```

transition-delay

```javascript
// in

{
  transitionDelay: 100,
  transitionDelay: '100ms',
  transitionDelay: [100, '100ms'],
}

// out

{
  transitionDelay: '100ms',
  transitionDelay: '100ms',
  transitionDelay: '100ms,100ms',
}
```

transition-duration

```javascript
// in

{
  transitionDuration: 100,
  transitionDuration: '100ms',
  transitionDuration: [100, '100ms'],
}

// out

{
  transitionDuration: '100ms',
  transitionDuration: '100ms',
  transitionDuration: '100ms,100ms',
}
```

transition-fn

```javascript
// in

{
  transitionFn: 'ease',
  transitionFn: ['ease', 'ease'],
}

// out

{
  transitionTimingFunction: 'ease',
  transitionTimingFunction: 'ease, ease',
}
```

## License

Skin is licensed under the [MIT License](http://opensource.org/licenses/MIT)

Created by [RocketStation](http://rstation.io)
