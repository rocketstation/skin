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


[attr](src/attr)

[attr-contains](src/attr-contains)

[attr-contains-str](src/attr-contains-str)

[attr-ends-with-str](src/attr-ends-with-str)

[attr-equals](src/attr-equals)

[attr-starts](src/attr-starts)

[attr-starts-with-str](src/attr-starts-with-str)

[img](src/img)

[its](src/its)

[its-after](src/its-after)

[its-before](src/its-before)

[its-children](src/its-children)

[its-first](src/its-first)

[its-highlight](src/its-highlight)

[its-last](src/its-last)

[its-next-multiple](src/its-next-multiple)

[its-next-single](src/its-next-single)

[its-placeholder](src/its-placeholder)

[limit](src/limit)

[linear](src/linear)

[matrix](src/matrix)

[matrix-3d](src/matrix-3d)

[on-active](src/on-active)

[on-focus](src/on-focus)

[on-hover](src/on-hover)

[perspective](src/perspective)

[radial](src/radial)

[repeat](src/repeat)

[rotate](src/rotate)

[rotate-3d](src/rotate-3d)

[rotate-x](src/rotate-x)

[rotate-y](src/rotate-y)

[rotate-z](src/rotate-z)

[scale](src/scale)

[scale-3d](src/scale-3d)

[scale-x](src/scale-x)

[scale-y](src/scale-y)

[scale-z](src/scale-z)

[screen](src/screen)

[screen-between](src/screen-between)

[screen-from](src/screen-from)

[screen-to](src/screen-to)

[skew](src/skew)

[skew-x](src/skew-x)

[skew-y](src/skew-y)

[translate](src/translate)

[translate-3d](src/translate-3d)

[translate-x](src/translate-x)

[translate-y](src/translate-y)

[translate-z](src/translate-z)

### Alias


[align](src/alias/align)

[align-content](src/alias/align-content)

[align-major](src/alias/align-major)

[align-minor](src/alias/align-minor)

[align-self](src/alias/align-self)

[align-self-major](src/alias/align-self-major)

[align-self-minor](src/alias/align-self-minor)

[animation](src/alias/animation)

[animation-count](src/alias/animation-count)

[animation-delay](src/alias/animation-delay)

[animation-direction](src/alias/animation-direction)

[animation-duration](src/alias/animation-duration)

[animation-fn](src/alias/animation-fn)

[animation-is-active](src/alias/animation-is-active)

[animation-origin](src/alias/animation-origin)

[bg](src/alias/bg)

[bg-move-x](src/alias/bg-move-x)

[bg-move-y](src/alias/bg-move-y)

[bg-origin](src/alias/bg-origin)

[bg-overflow](src/alias/bg-overflow)

[bg-position](src/alias/bg-position)

[bg-repeat](src/alias/bg-repeat)

[bg-size](src/alias/bg-size)

[border-color-bottom](src/alias/border-color-bottom)

[border-color-left](src/alias/border-color-left)

[border-color-right](src/alias/border-color-right)

[border-color-top](src/alias/border-color-top)

[border-kind-bottom](src/alias/border-kind-bottom)

[border-kind-left](src/alias/border-kind-left)

[border-kind-right](src/alias/border-kind-right)

[border-kind-top](src/alias/border-kind-top)

[border-size-bottom](src/alias/border-size-bottom)

[border-size-left](src/alias/border-size-left)

[border-size-right](src/alias/border-size-right)

[border-size-top](src/alias/border-size-top)

[case](src/alias/case)

[col-end](src/alias/col-end)

[col-start](src/alias/col-start)

[color-box](src/alias/color-box)

[color-text](src/alias/color-text)

[cols](src/alias/cols)

[cols-pseudo](src/alias/cols-pseudo)

[content](src/alias/content)

[corner-left-bottom](src/alias/corner-left-bottom)

[corner-left-top](src/alias/corner-left-top)

[corner-right-bottom](src/alias/corner-right-bottom)

[corner-right-top](src/alias/corner-right-top)

[custom](src/alias/custom)

[decoration](src/alias/decoration)

[direction](src/alias/direction)

[fill](src/alias/fill)

[font](src/alias/font)

[grow](src/alias/grow)

[has-suffix](src/alias/has-suffix)

[height-max](src/alias/height-max)

[height-min](src/alias/height-min)

[is-interactive](src/alias/is-interactive)

[is-italic](src/alias/is-italic)

[kind](src/alias/kind)

[line](src/alias/line)

[modify](src/alias/modify)

[modify-origin](src/alias/modify-origin)

[move-bottom](src/alias/move-bottom)

[move-left](src/alias/move-left)

[move-right](src/alias/move-right)

[move-top](src/alias/move-top)

[must-break-words](src/alias/must-break-words)

[must-handle-events](src/alias/must-handle-events)

[opacity](src/alias/opacity)

[order-major](src/alias/order-major)

[order-minor](src/alias/order-minor)

[origin](src/alias/origin)

[outline-color](src/alias/outline-color)

[outline-kind](src/alias/outline-kind)

[outline-size](src/alias/outline-size)

[outline-space](src/alias/outline-space)

[overflow-direction](src/alias/overflow-direction)

[overflow-x](src/alias/overflow-x)

[overflow-y](src/alias/overflow-y)

[place-content](src/alias/place-content)

[place-direction](src/alias/place-direction)

[place-major](src/alias/place-major)

[place-minor](src/alias/place-minor)

[position](src/alias/position)

[row-end](src/alias/row-end)

[row-start](src/alias/row-start)

[rows](src/alias/rows)

[rows-pseudo](src/alias/rows-pseudo)

[shadow-box](src/alias/shadow-box)

[shadow-text](src/alias/shadow-text)

[shrink](src/alias/shrink)

[size](src/alias/size)

[space-break](src/alias/space-break)

[space-char](src/alias/space-char)

[space-inner-bottom](src/alias/space-inner-bottom)

[space-inner-left](src/alias/space-inner-left)

[space-inner-right](src/alias/space-inner-right)

[space-inner-top](src/alias/space-inner-top)

[space-outer-bottom](src/alias/space-outer-bottom)

[space-outer-left](src/alias/space-outer-left)

[space-outer-right](src/alias/space-outer-right)

[space-outer-top](src/alias/space-outer-top)

[space-word](src/alias/space-word)

[space-x](src/alias/space-x)

[space-y](src/alias/space-y)

[stroke-color](src/alias/stroke-color)

[stroke-dashes](src/alias/stroke-dashes)

[stroke-size](src/alias/stroke-size)

[stroke-space](src/alias/stroke-space)

[template](src/alias/template)

[text-cols-amount](src/alias/text-cols-amount)

[text-cols-border-color](src/alias/text-cols-border-color)

[text-cols-border-kind](src/alias/text-cols-border-kind)

[text-cols-border-size](src/alias/text-cols-border-size)

[text-cols-space](src/alias/text-cols-space)

[text-cols-width](src/alias/text-cols-width)

[transition](src/alias/transition)

[transition-delay](src/alias/transition-delay)

[transition-duration](src/alias/transition-duration)

[transition-fn](src/alias/transition-fn)

[weight](src/alias/weight)

[width-max](src/alias/width-max)

[width-min](src/alias/width-min)

## Challenges

- Document all services
- Document all alias

## License

Skin is licensed under the [MIT License](http://opensource.org/licenses/MIT)

Created by [RocketStation](http://rstation.io)
