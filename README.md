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
import { RendererProvider as FelaProvider } from 'react-fela'

const MyComponent = ({ name, ...props }) =>
  $(
    'div',
    {
      onClick: () => { console.log('test') },
      skin: [
        {
          colorBox: 'white',
          colorText: 'black',
        },
        skin.on(['focused', 'hovered'], {
          colorBox: 'black',
          colorText: 'white',
        }),
        skin.if('isCurr', { isItalic: true }),
        skin.its('children', { weight: 'bold' }),
        skin.screen(960, { size: '120%' }),
      ],
      ...props
    },
    'Hello',
    $('span', name),
    '!'
  )

const renderer = createRenderer({ plugins: [pluginCustomProperty(skin.layout)] })

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

### screen

`screen(config, ...rules)` - screen helper

sets `@media screen and ...` based on config

- if config is number, returns
  ```javascript
  {
    '@media screen and (max-width: {number-1/16}em)' : arguments[1],
    '@media screen and (min-width: {number/16}em)': arguments[2],
  }
  ```
- if config is object
  - it parses `from` as `(min-width: {number/16}em)`
  - it parses `to` as `(max-width: {(number - 1)/16}em)`
  - it parses `{ key: val }` as `(key: val)`

### its

`its([...configs], ...rules)` - domains helper

- if config is string
  - parses `'children'` as `'>*'`
  - parses `'before'` as `'::before'`
  - parses `'after'` as `'::after'`
  - parses `'around'` as `'::before,::after'`
  - parses `'placeholder'` as `'::placeholder'`
  - parses `'next'` as `'+*'`
  - parses `'highlight'` as `'::selection'`
- if config is object
  - parses `kind` string as element
  - parses `class` string or array as class, adds `.` to each of them, joins them
  - parses `id` string or array as id, adds `#` to each of them, joins them

by default it returns string with prefix `' '`. However it can be changed using `modifier` & `isStrict`

 - if `modifier` is `children`, returns string with prefix `'>'`
 - if `modifier` is `next`, returns string with prefix `'+'`
 - if `modifier` is `next` and `isStrict` is `false`, returns string with prefix `'~'`

it returns one or more strings divided by `','` based on amount of configs

### if

`if([...configs], ...rules)` - modifiers helper

- if config is string
  - parses `'active'` as `':active'`
  - parses `'focus'` as `':focus'`
  - parses `'hover'` as `':hover'`
  - parses `'last'` as `':nth-child(1)'`
  - parses `'first'` as `':nth-last-child(1)'`
  - parses `'isActive'` as `':checked'`
  - parses `'isNotActive'` as `':not(:checked)'`
  - parses `'isCurr'` as `':target'`
  - parses `'isNotCurr'` as `':not(:target)'`
  - parses `'isEmpty'` as `':empty'`
  - parses `'isNotEmpty'` as `':not(:empty)'`
  - parses `isNew` as `':visited'`
  - parses `isNotNew` as `':not(:visited)'`
  - parses `'isOnly'` as `':target'`
  - parses `'isNotOnly'` as `':not(:target)'`
  - parses `'isDisabled'` as `':disabled'`
  - parses `'isNotDisabled'` as `':enabled'`
  - parses `'isReadOnly'` as `':read-only'`
  - parses `'isNotReadOnly'` as `':not(:read-only)'`
- if config is object joins all props to string
  - parses `kind` string as element
  - parses `class` string or array as class, adds `.` to each of them, joins them
  - parses `id` string or array as id, adds `#` to each of them, joins them
  - parses `{ nth: 'last' }` as `':nth-child(1)'`
  - parses `{ nth: 'first' }` as `':nth-last-child(1)'`
  - parses `{ isActive: true }` as `':checked'`
  - parses `{ isActive: false }` as `':not(:checked)'`
  - parses `{ isCurr: true }` as `':target'`
  - parses `{ isCurr: false }` as `':not(:target)'`
  - parses `{ isEmpty: true }` as `':empty'`
  - parses `{ isEmpty: false }` as `':not(:empty)'`
  - parses `{ isNew: true }` as `':visited'`
  - parses `{ isNew: false }` as `':not(:visited)'`
  - parses `{ isOnly: true }` as `':target'`
  - parses `{ isOnly: false }` as `':not(:target)'`
  - parses `{ isDisabled: true }` as `':disabled'`
  - parses `{ isDisabled: false }` as `':enabled'`
  - parses `{ isReadOnly: true }` as `':read-only'`
  - parses `{ isReadOnly: false }` as `':not(:read-only)'`
  - parses `{ event: 'val' }` as `:{val}`
  - parses `attr` as `'[{key}{modifier}{val}]'`
    - if `val` is not defined, returns `'[key]'`
    - if `modifier` is not defined, returns `'[{key}={val}]'`
    - if `modifier` is `'equals'`, returns `'[{key}={val}]'`
    - if `modifier` is `'contains'`, returns `'[{key}~={val}]'`
    - if `modifier` is `'starts'`, returns `'[{key}|={val}]'`
    - if `modifier` is `'startsWithStr'`, returns `'[{key}^={val}]'`
    - if `modifier` is `'containsStr'`, returns `'[{key}*={val}]'`
    - if `modifier` is `'endsWithStr'`, returns `'[{key}$={val}]'`
  - if `nth` is object
    - it parses `each` as counter like `{each}n`
    - it parses `from` as disp like `+{from}`
    - if `isReversed` is `true`, returns `':nth-last-...'`
    - if `isStrict` is `true`, returns `'...-of-type'`
    - if `isNot` is `true`, returns `':not(...)'`
  - if `isOnly` is object
    - if `isStrict` is `true`, returns `':only-of-type'
    - if `isNot` is `true`, returns `':not(...)'`

it returns one or more strings divided by `','` based on amount of configs

### layout

it contains props for Fela Plugin Custom Property



#### `align` -> `textAlign`

- parses `'start'` as `'left'`
- parses `'end'` as `'right'`
- parses `'center'` as `'center'`
- parses `'stretch'` as `'justify'`

#### `alignMajor` -> `justifyItems`

- parses `'start` as `'start'`
- parses `'end` as `'end'`
- parses `'center` as `'center'`
- parses `'stretch` as `'stretch'`

#### `alignMinor` -> `alignItems`

- parses `'start` as `'start'`
- parses `'end` as `'end'`
- parses `'center` as `'center'`
- parses `'stretch` as `'stretch'`

#### `alignContent` -> `alignItems`

- parses `'start` as `'flex-start'`
- parses `'end` as `'flex-end'`
- parses `'center` as `'center'`
- parses `'stretch` as `'stretch'`

#### `alignSelfMajor` -> `justifySelf`

- parses `'start` as `'start'`
- parses `'end` as `'end'`
- parses `'center` as `'center'`
- parses `'stretch` as `'stretch'`

#### `alignSelfMinor` -> `alignSelf`

- parses `'start` as `'start'`
- parses `'end` as `'end'`
- parses `'center` as `'center'`
- parses `'stretch` as `'stretch'`

#### `alignSelf` -> `alignSelf`

- parses `'start` as `'flex-start'`
- parses `'end` as `'flex-end'`
- parses `'center` as `'center'`
- parses `'stretch` as `'stretch'`

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
- parses `{ direction: true, bps: ['black', ['white', 50], 'black'] }` as `'radial-gradient(black, white 50%, black)'`
- parses `{ direction: 360, bps: ['black', ['white', 50], 'black'] }` as `'linear-gradient(360deg, black, white 50%, black)'`
- parses string as `'url({string})'`

#### `bgMove` -> `backgroundPosition`

- parses one or more values
- parses `{ [sideRow]: val, [sideCol]: val }` as `'{sideRow} {val} {sideCol} {val}'`
- parses `{ [sideRow]: 0, [sideCol]: 0 }` as `'{sideRow} 0 {sideCol} 0'`
- parses `{ [sideRow]: number, [sideCol]: number }` as `'{sideRow} {number}rem {sideCol} {number}rem'`
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
- parses `{ repeat: [val, val, val] }` as `'repeat({val},{val},{val})'`
- parses `{ min: val, max: val }` as `'minmax({val}, {val})'`
- parses `{ min: number, max: number }` as `'minmax({number}fr, {number}fr)'`
- parses `{}` as `'minmax(auto, auto)'`
- parses any valid value

#### `colsPseudo` -> `gridAutoColumns`

- parses `false` as `'none'`
- parses `1` as `1fr`
- parses `{ repeat: [val, val, val] }` as `'repeat({val},{val},{val})'`
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
- parses `'d1'` as `'flex'`
- parses `'d2'` as `'grid'`
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

#### `overflow` -> `overflowX overflowY`

- parses sides `{ row, col }`
- parses `true` as `'visible'`
- parses `false` as `'hidden'`
- parses `'auto'` as `'auto'`
- parses `['auto', true]` as `'scroll'`

#### `overflowDirection` -> `flexWrap`

- parses `1` as `wrap`
- parses `0` as `'nowrap'`
- parses `-1` as `wrap-reverse`

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

#### `placeContentMinor` -> `alignContent`

- parses `'start` as `'flex-start'`
- parses `'end` as `'flex-end'`
- parses `'center` as `'center'`
- parses `'space-between'` as `'space-between'`
- parses `'space-around'` as `'space-around'`
- parses `['space-around', true]` as `'space-evenly'`

#### `placeContentMajor` -> `justifyContent`

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
- parses `{ repeat: [val, val, val] }` as `'repeat({val},{val},{val})'`
- parses `{ min: val, max: val }` as `'minmax({val}, {val})'`
- parses `{ min: number, max: number }` as `'minmax({number}fr, {number}fr)'`
- parses `{}` as `'minmax(auto, auto)'`
- parses any valid value

#### `rowsPseudo` -> `gridAutoRows`

- parses `false` as `'none'`
- parses `1` as `1fr`
- parses `{ repeat: [val, val, val] }` as `'repeat({val},{val},{val})'`
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

- parses `{ key: [val, val, val] }` as `key(val, val, val)`

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
- parses from object props to transition rules
- parses from object key in camel case to animation property in kebab case
- if val is object
  - parses `duration` as `transitionProperty`
  - parses `delay` as `transitionDuration`
  - parses `fn` as `transitionTimingFunction`
- if val is not object, parses it as animation duration and sets default for other rules

#### `custom`

- contains any custom rules


## License

Skin is licensed under the [MIT License](http://opensource.org/licenses/MIT)

Created by [RocketStation](http://rstation.io)
