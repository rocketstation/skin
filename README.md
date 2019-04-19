# Skin

Skin provides alias & helpers for css-in-js

## Installation

```
npm i @rocketstation/skin
```

## Usage

```javascript
import * as skin from '@rocketstation/skin'
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
        [skin.on.hover]: {
          colorBox: theme.text.color.major,
          colorText: theme.box.color.major,
        },
        [skin.screen.from(960)]: { size: '125%' }
      }),
      ...props,
    },
    'Hello',
    $('span', name),
    '!'
  )

const renderer = createRenderer({
  plugins: [pluginCustomProperty(skin.alias)],
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

### Skin

it contains style functions

- parses `img()` as `url()`
- parses `radial()` as `radial-gradient()`
- parses `linear()` as `linear-gradient()`
- parses `matrix()` as `matrix()`
- parses `matrix3d()` as `matrix3d()`
- parses `translate()` as `translate()`
- parses `translate3d()` as `translate3d()`
- parses `translateX()` as `translateX()`
- parses `translateY()` as `translateY()`
- parses `translateZ()` as `translateZ()`
- parses `scale()` as `scale()`
- parses `scale3d()` as `scale3d()`
- parses `scaleX()` as `scaleX()`
- parses `scaleY()` as `scaleY()`
- parses `scaleZ()` as `scaleZ()`
- parses `rotate()` as `rotate()`
- parses `rotate3d()` as `rotate3d()`
- parses `rotateX()` as `rotateX()`
- parses `rotateY()` as `rotateY()`
- parses `rotateZ()` as `rotateZ()`
- parses `skew()` as `skew()`
- parses `skewX()` as `skewX()`
- parses `skewY()` as `skewY()`
- parses `perspective()` as `perspective()`

### Attr

- parses `attr(key).contains(val)` as `[{key}~={val}]`
- parses `attr(key).containsStr(val)` as `[{key}*="{val}"]`
- parses `attr(key).endsWithStr(val)` as `[{key}$="{val}"]`
- parses `attr(key).equals(val)` as `[{key}={val}]`
- parses `attr(key).is` as `[{key}]`
- parses `attr(key).starts(val)` as `[{key}|={val}]`
- parses `attr(key).startsWithStr(val)` as `[{key}^="{val}"]`

### Its

- parses `its(val)` as `& {val}`
- parses `its.after` as `::after`
- parses `its.before` as `::before`
- parses `its.children` as `>*`
- parses `its.first()` as `:nth-child(0n+1)`
- parses `its.first(every,from)` as `:nth-child({every}n+{from})`
- parses `its.last()` as `:nth-last-child(0n+1)`
- parses `its.last(every,from)` as `:nth-last-child({every}n+{from})`
- parses `its.highlight` as `::selection`
- parses `its.nextMultiple` as `&~*`
- parses `its.nextSingle` as `&+*`
- parses `its.placeholder` as `::placeholder`

### On

- parses `on.hover` as `:hover`
- parses `on.focus` as `:focus`
- parses `on.active` as `:active`

### Screen

- parses `screen({ key: val })` as `@media screen and ({key}: {val})`
- parses `screen.from(px)` as `@media screen and (min-width:{px / 16}em)`
- parses `screen.to(px)` as `@media screen and (max-width:{(px - 1) / 16}em)`
- parses `screen.between(pxFrom, pxTo)` as `@media screen (min-width:{pxFrom / 16}em) and (max-width:{(pxTo - 1) / 16}em)`

### alias

it contains props for Fela Plugin Custom Property

#### `align` -> `textAlign`

- parses `'left'` as `'left'`
- parses `'right'` as `'right'`
- parses `'center'` as `'center'`
- parses `'stretch'` as `'justify'`

#### `alignMajor` -> `justifyItems`

- parses `'start'` as `'start'`
- parses `'end'` as `'end'`
- parses `'center'` as `'center'`
- parses `'stretch'` as `'stretch'`

#### `alignMinor` -> `alignItems`

- parses `'start'` as `'start'`
- parses `'end'` as `'end'`
- parses `'center'` as `'center'`
- parses `'stretch'` as `'stretch'`

#### `alignContent` -> `alignItems`

- parses `'start'` as `'flex-start'`
- parses `'end'` as `'flex-end'`
- parses `'center'` as `'center'`
- parses `'stretch'` as `'stretch'`

#### `alignSelfMajor` -> `justifySelf`

- parses `'start'` as `'start'`
- parses `'end'` as `'end'`
- parses `'center'` as `'center'`
- parses `'stretch'` as `'stretch'`

#### `alignSelfMinor` -> `alignSelf`

- parses `'start'` as `'start'`
- parses `'end'` as `'end'`
- parses `'center'` as `'center'`
- parses `'stretch'` as `'stretch'`

#### `alignSelf` -> `alignSelf`

- parses `'start'` as `'flex-start'`
- parses `'end'` as `'flex-end'`
- parses `'center'` as `'center'`
- parses `'stretch'` as `'stretch'`

#### `animation` -> `animationName`

- parses one or more values
- parses any valid value

#### `animationCount` -> `animationIterationCount`

- parses one or more values
- parses `true` as `'infinite'`
- parses any valid value

#### `animationDelay` -> `animationDelay`

- parses one or more values
- parses number as ms
- parses any valid value

#### `animationDirection` -> `animationDirection`

- parses one or more values
- parses `-1` as `'normal'`
- parses `1` as `'reverse'`
- parses `2` as `'alternate'`
- parses `-2` as `'alternate-reverse'`

#### `animationDuration` -> `animationDuration`

- parses one or more values
- parses number as `'{number}ms'`
- parses any valid value

#### `animationFn` -> `animationTimingFunction`

- parses one or more values
- parses any valid value

#### `animationIsActive` -> `animationPlayState`

- parses one or more values
- parses `true` as `'running'`
- parses `false` as `'paused'`

#### `animationOrigin` -> `animationFillingMode`

- parses one or more values
- parses `true` as `'both`
- parses `false` as `'none'`
- parses `1` as `'forwards'`
- parses `-1` as `'backwards'`

#### `bg` -> `backgroundImage`

- parses one or more values
- parses `false` as `'none'`

#### `bgMoveCol` -> `backgroundPositionY`

- parses one or more values
- parses `{ [sideRow]: val }` as `'{sideRow} {val}'`
- parses `{ [sideRow]: 0 }` as `'{sideRow} 0'`
- parses `{ [sideRow]: number }` as `'{sideRow} {number}rem'`
- parses any valid value

#### `bgMoveRow` -> `backgroundPositionX`

- parses one or more values
- parses `{ [sideCol]: val }` as `'{sideCol} {val}'`
- parses `{ [sideCol]: 0 }` as `'{sideCol} 0'`
- parses `{ [sideCol]: number }` as `'{sideCol} {number}rem'`
- parses any valid value

#### `bgOrigin` -> `backgroundOrigin`

- parses one or more values
- parses `'border'` as `'border-box'`
- parses `'space'` as `'padding-box'`
- parses `'content'` as `'content-box'`

#### `bgOverflow` -> `backgroundClip`

- parses one or more values
- parses `'border'` as `'border-box'`
- parses `'space'` as `'padding-box'`
- parses `'content'` as `'content-box'`

#### `bgPosition` -> `backgroundAttachment`

- parses one or more values
- parses `'global'` as `scroll`
- parses `'local'` as `local`
- parses `false` as `'fixed'`

#### `bgRepeat` -> `backgroundRepeat`

- parses one or more values
- parses `false` as `'no-repeat'`
- parses `true` as `'repeat'`
- parses `'col'` as `'repeat-y'`
- parses `'row'` as `'repeat-x'`

#### `bgSize` -> `backgroundSize`

- parses one or more values
- parses `'fill'` as `'cover'`
- parses `'fit'` as `'contain'`
- parses `'auto'` as `'auto'`
- parses `{ height: val, width: val }` as `'{width} {height}'`
- parses `{ height: number, width: number }` as `'{width}rem {height}rem'`

#### `borderColor` -> `borderBottomColor borderLeftColor borderRightColor borderTopColor`

- parses sides `{ left, right, top, bottom, row, col }`
- parses any valid value

#### `borderKind` -> `borderBottomStyle borderLeftStyle borderRightStyle borderTopStyle`

- parses `true` as `'solid'`
- parses `false` as `'none'`
- parses sides `{ left, right, top, bottom, row, col }`
- parses any valid value

#### `borderSize` -> `borderBottomWidth borderLeftWidth borderRightWidth borderTopWidth`

- parses sides `{ left, right, top, bottom, row, col }`
- parses `number` as `'{number}px'`
- parses any valid value

#### `case` -> `textTransform`

- parses `'upper'` as `'uppercase'`
- parses `'lower'` as `'lowercase'`
- parses `false` as `'none'`

#### `colEnd` -> `gridColumnEnd`

- parses `number` as `'{number}'`
- parses `[number, true]` as `'span {number}'`

#### `colorBox` -> `backgroundColor`

- parses any valid value

#### `colorText` -> `color`

- parses any valid value

#### `cols` -> `gridTemplateColumns`

- parses one or more values
- parses `false` as `'none'`
- parses `1` as `1fr`
- parses `[1, auto]` as `'repeat(1, auto)'`
- parses `[fill, auto]` as `'repeat(auto-fill, auto)'`
- parses `[fit, auto]` as `'repeat(auto-fit, auto)'`
- parses `{ min: val, max: val }` as `'minmax({val}, {val})'`
- parses `{ min: number, max: number }` as `'minmax({number}fr, {number}fr)'`
- parses `{}` as `'minmax(auto, auto)'`
- parses any valid value

#### `colsPseudo` -> `gridAutoColumns`

- parses one or more values
- parses `false` as `'none'`
- parses `1` as `1fr`
- parses `[1, auto]` as `'repeat(1, auto)'`
- parses `[fill, auto]` as `'repeat(auto-fill, auto)'`
- parses `[fit, auto]` as `'repeat(auto-fit, auto)'`
- parses `{ min: val, max: val }` as `'minmax({val}, {val})'`
- parses `{ min: number, max: number }` as `'minmax({number}fr, {number}fr)'`
- parses `{}` as `'minmax(auto, auto)'`
- parses any valid value

#### `colStart` -> `gridColumnStart`

- parses `number` as `'{number}'`

#### `content` -> `content`

- parses `true` as `'""'`
- parses any valid value

#### `corner` -> `borderBottomLeftRadius borderBottomRightRadius borderTopLeftRadius borderTopRightRadius`

- parses sides `{ leftTop, rightTop, leftBottom, rightBottom, left, right, top, bottom }`
- parses `val` as `'{val}'`
- parses `[val, val]` as `'{val} / {val}'`
- parses `number` as `'{number}px'`
- parses `[number, number]` as `'{number}px / {number}px'`

#### `decoration` -> `textDecoration`

- parses `'top'` as `'overline'`
- parses `'center'` as `'line-through'`
- parses `'bottom'` as `'underline'`

#### `direction` -> `flexDirection`

- parses `'row'` as `'row'`
- parses `['row', true]` as `'row-reverse'`
- parses `'col'` as `'column'`
- parses `['col', true]` as `'column-reverse'`

#### `fill` -> `fill`

- parses any valid value

#### `font` -> `fontFamily`

- parses one or more values
- parses any valid value

#### `grow` -> `flexGrow`

- parses any valid value

#### `hasSuffix` -> `textOverflow`

- parses `true` as `'ellipsis'`
- parses `false` as `'clip'`

#### `height` -> `height`

- parses any valid value

#### `heightMax` -> `maxHeight`

- parses `false` as `none`
- parses any valid value

#### `heightMin` -> `minHeight`

- parses any valid value

#### `isInteractive` -> `cursor`

- parses `true` as `'pointer'`
- parses `false` as `'auto'`

#### `isItalic` -> `fontStyle`

- parses `true` as `'italic'`
- parses `false` as `'normal'`

#### `kind` -> `display`

- parses `'box'` as `'block'`
- parses `'text'` as `'inline'`
- parses `1` as `'flex'`
- parses `2` as `'grid'`
- parses `false` as `'none'`

#### `line` -> `lineHeight`

- parses any valid value

#### `move` -> `left right top bottom`

- parses sides `{ left, right, top, bottom, row, col }`
- parses any valid value

#### `mustBreakWords` -> `overflowWrap`

- parses `true` as `'break-word'`
- parses `false` as `'normal'`

#### `mustHandleEvents` -> `pointerEvents`

- parses `true` as `'auto'`
- parses `false` as `'none'`

#### `opacity` -> `opacity`

- parses `number` as `{number / 100}`

#### `orderMajor` -> `order`

- parses any valid value

#### `orderMinor` -> `zIndex`

- parses any valid value

#### `origin` -> `flexBasis`

- parses any valid value

#### `overflowCol` -> `overflowY`

- parses `true` as `'visible'`
- parses `false` as `'hidden'`
- parses `'auto'` as `'auto'`
- parses `['auto', true]` as `'scroll'`

#### `overflowDirection` -> `flexWrap`

- parses `1` as `wrap`
- parses false as `'nowrap'`
- parses `-1` as `wrap-reverse`


#### `overflowRow` -> `overflowX`

- parses `true` as `'visible'`
- parses `false` as `'hidden'`
- parses `'auto'` as `'auto'`
- parses `['auto', true]` as `'scroll'`

#### `placeDirection` -> `gridAutoFlow`

- parses `col` as `column`
- parses `row` as `row`

#### `placeMajor` -> `justifyContent`

- parses `'start` as `'start'`
- parses `'end` as `'end'`
- parses `'center` as `'center'`
- parses `'space-between'` as `'space-between'`
- parses `'space-around'` as `'space-around'`
- parses `['space-around', true]` as `'space-evenly'`

#### `placeContent` -> `justifyContent`

- parses `'start` as `'flex-start'`
- parses `'end` as `'flex-end'`
- parses `'center` as `'center'`
- parses `'space-between'` as `'space-between'`
- parses `'space-around'` as `'space-around'`
- parses `['space-around', true]` as `'space-evenly'`

#### `placeMinor` -> `alignContent`

- parses `'start` as `'start'`
- parses `'end` as `'end'`
- parses `'center` as `'center'`
- parses `'space-between'` as `'space-between'`
- parses `'space-around'` as `'space-around'`
- parses `['space-around', true]` as `'space-evenly'`

#### `position` -> `position`

- parses `true` as `'fixed'`
- parses `'relative'` as `'relative'`
- parses `'absolute'` as `'absolute'`
- parses `false` as `'static'`

#### `rowEnd` -> `gridRowEnd`

- parses `number` as `'{number}'`
- parses `[number, true]` as `'span {number}'`

#### `rows` -> `gridTemplateRows`

- parses one or more values
- parses `false` as `'none'`
- parses `1` as `1fr`
- parses `[1, auto]` as `'repeat(1, auto)'`
- parses `[fill, auto]` as `'repeat(auto-fill, auto)'`
- parses `[fit, auto]` as `'repeat(auto-fit, auto)'`
- parses `{ min: val, max: val }` as `'minmax({val}, {val})'`
- parses `{ min: number, max: number }` as `'minmax({number}fr, {number}fr)'`
- parses `{}` as `'minmax(auto, auto)'`
- parses any valid value

#### `rowsPseudo` -> `gridAutoRows`

- parses one or more values
- parses `false` as `'none'`
- parses `1` as `1fr`
- parses `[1, auto]` as `'repeat(1, auto)'`
- parses `[fill, auto]` as `'repeat(auto-fill, auto)'`
- parses `[fit, auto]` as `'repeat(auto-fit, auto)'`
- parses `{ min: val, max: val }` as `'minmax({val}, {val})'`
- parses `{ min: number, max: number }` as `'minmax({number}fr, {number}fr)'`
- parses `{}` as `'minmax(auto, auto)'`
- parses any valid value

#### `rowStart` -> `gridRowStart`

- parses `number` as `'{number}'`

#### `shadowBox` -> `boxShadow`

- parses one or more values
- parses `false` as `'none'`
- parses `{}` as `'0 0 0 0'`
- parses `{ col, row, blur, size }` as `'{col} {row} {blur} {size}'`
- parses `{ col, row, blur, size, color }` as `'{col} {row} {blur} {size} {color}'`
- parses `{ col, row, blur, size, color, isReversed: true }` as `'{col} {row} {blur} {size} {color} inset'`
- parses `{ col: 0, row: 0, blur: 0, size: 0, color }` as `'0 0 0 0 {color} '`
- parses `{ col: number, row: number, blur: number, size: number, color }` as `'{col}px {row}px {blur}px {size}px {color}'`
- parses any valid value

#### `shadowText` -> `textShadow`

- parses one or more values
- parses `false` as `'none'`
- parses `{}` as `'0 0 0'`
- parses `{ col, row, blur }` as `'{col} {row} {blur}'`
- parses `{ col, row, blur, color }` as `'{col} {row} {blur} {color}'`
- parses `{ col: 0, row: 0, blur: 0, color }` as `'0 0 0 {color}'`
- parses `{ col: number, row: number, blur: number, color }` as `'{col}px {row}px {blur}px {color}'`
- parses any valid value

#### `shrink` -> `flexShrink`

- parses any valid value

#### `size` -> `fontSize`

- parses any valid value

#### `spaceBreak` -> `whiteSpace`

- parses `true` as `'normal'`
- parses `false` as `'nowrap'`
- parses `'raw'` as `'pre'`
- parses `['raw', true]` as `'pre-wrap'`
- parses `['raw', false]` as `'pre-line'`

#### `spaceChar` -> `letterSpacing`

- parses any valid value

#### `spaceCol` -> `gridColumnGap`

- parses `number` as `{number}fr`
- parses `{ repeat: [val, val, val] }` as `'repeat({val},{val},{val})'`
- parses `{ min: val, max: val }` as `'minmax({val}, {val})'`
- parses `{ min: number, max: number }` as `'minmax({number}fr, {number}fr)'`
- parses `{}` as `'minmax(auto, auto)'`
- parses any valid value

#### `spaceInner` -> `padding`

- parses sides `{ left, right, top, bottom, row, col }`
- parses any valid value

#### `spaceOuter` -> `margin`

- parses sides `{ left, right, top, bottom, row, col }`
- parses any valid value

#### `spaceRow` -> `gridRowGap`

- parses `number` as `{number}fr`
- parses `{ repeat: [val, val, val] }` as `'repeat({val},{val},{val})'`
- parses `{ min: val, max: val }` as `'minmax({val}, {val})'`
- parses `{ min: number, max: number }` as `'minmax({number}fr, {number}fr)'`
- parses `{}` as `'minmax(auto, auto)'`
- parses any valid value

#### `spaceWord` -> `wordSpacing`

- parses any valid value

#### `strokeColor` -> `stroke`

- parses any valid value

#### `strokeDashes` -> `strokeDasharray`

- parses one or more values
- parses any valid value

#### `strokeSize` -> `strokeWidth`

- parses any valid value

#### `strokeSpace` -> `strokeDashoffset`

- parses any valid value

#### `template` -> `gridTemplateAreas`

- parses `[[...],[...],[...]]` as `'"...""...""..."'`
- parses `null` as `'.'`
- parses any valid value

#### `modify` -> `transform`

- parses `false` as `none`
- parses one or more values
- parses any valid value

#### `weight` -> `fontWeight`

- parses any valid value

#### `width` -> `width`

- parses any valid value

#### `widthMax` -> `maxWidth`

- parses `false` as `none`
- parses any valid value

#### `widthMin` -> `minWidth`

- parses any valid value

#### `transition` -> `transitionProperty transitionDelay transitionDuration transitionTimingFunction`

- parses one or more values
- parses any valid value
- parses `'colorBox'` as `'background-color'`
- parses `'colorText'` as `'color'`
- parses `'modify'` as `'transform'`

#### `animationDelay` -> `animationDelay`

- parses one or more values
- parses number as ms
- parses any valid value

#### `animationDuration` -> `animationDuration`

- parses one or more values
- parses number as `'{number}ms'`
- parses any valid value

#### `animationFn` -> `animationTimingFunction`

- parses one or more values
- parses any valid value

#### `custom`

- contains any custom rules


## License

Skin is licensed under the [MIT License](http://opensource.org/licenses/MIT)

Created by [RocketStation](http://rstation.io)
