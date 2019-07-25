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


[attr](src/attr/README.md)

[attr-contains](src/attr-contains/README.md)

[attr-contains-str](src/attr-contains-str/README.md)

[attr-ends-with-str](src/attr-ends-with-str/README.md)

[attr-equals](src/attr-equals/README.md)

[attr-starts](src/attr-starts/README.md)

[attr-starts-with-str](src/attr-starts-with-str/README.md)

[img](src/img/README.md)

[its](src/its/README.md)

[its-after](src/its-after/README.md)

[its-before](src/its-before/README.md)

[its-children](src/its-children/README.md)

[its-first](src/its-first/README.md)

[its-highlight](src/its-highlight/README.md)

[its-last](src/its-last/README.md)

[its-next-multiple](src/its-next-multiple/README.md)

[its-next-single](src/its-next-single/README.md)

[its-placeholder](src/its-placeholder/README.md)

[limit](src/limit/README.md)

[linear](src/linear/README.md)

[matrix](src/matrix/README.md)

[matrix-3d](src/matrix-3d/README.md)

[on-active](src/on-active/README.md)

[on-focus](src/on-focus/README.md)

[on-hover](src/on-hover/README.md)

[perspective](src/perspective/README.md)

[radial](src/radial/README.md)

[repeat](src/repeat/README.md)

[rotate](src/rotate/README.md)

[rotate-3d](src/rotate-3d/README.md)

[rotate-x](src/rotate-x/README.md)

[rotate-y](src/rotate-y/README.md)

[rotate-z](src/rotate-z/README.md)

[scale](src/scale/README.md)

[scale-3d](src/scale-3d/README.md)

[scale-x](src/scale-x/README.md)

[scale-y](src/scale-y/README.md)

[scale-z](src/scale-z/README.md)

[screen](src/screen/README.md)

[screen-between](src/screen-between/README.md)

[screen-from](src/screen-from/README.md)

[screen-to](src/screen-to/README.md)

[skew](src/skew/README.md)

[skew-x](src/skew-x/README.md)

[skew-y](src/skew-y/README.md)

[translate](src/translate/README.md)

[translate-3d](src/translate-3d/README.md)

[translate-x](src/translate-x/README.md)

[translate-y](src/translate-y/README.md)

[translate-z](src/translate-z/README.md)

### Alias


[align](src/alias/align/README.md)

[align-content](src/alias/align-content/README.md)

[align-major](src/alias/align-major/README.md)

[align-minor](src/alias/align-minor/README.md)

[align-self](src/alias/align-self/README.md)

[align-self-major](src/alias/align-self-major/README.md)

[align-self-minor](src/alias/align-self-minor/README.md)

[animation](src/alias/animation/README.md)

[animation-count](src/alias/animation-count/README.md)

[animation-delay](src/alias/animation-delay/README.md)

[animation-direction](src/alias/animation-direction/README.md)

[animation-duration](src/alias/animation-duration/README.md)

[animation-fn](src/alias/animation-fn/README.md)

[animation-is-active](src/alias/animation-is-active/README.md)

[animation-origin](src/alias/animation-origin/README.md)

[bg](src/alias/bg/README.md)

[bg-move-x](src/alias/bg-move-x/README.md)

[bg-move-y](src/alias/bg-move-y/README.md)

[bg-origin](src/alias/bg-origin/README.md)

[bg-overflow](src/alias/bg-overflow/README.md)

[bg-position](src/alias/bg-position/README.md)

[bg-repeat](src/alias/bg-repeat/README.md)

[bg-size](src/alias/bg-size/README.md)

[border-color-bottom](src/alias/border-color-bottom/README.md)

[border-color-left](src/alias/border-color-left/README.md)

[border-color-right](src/alias/border-color-right/README.md)

[border-color-top](src/alias/border-color-top/README.md)

[border-kind-bottom](src/alias/border-kind-bottom/README.md)

[border-kind-left](src/alias/border-kind-left/README.md)

[border-kind-right](src/alias/border-kind-right/README.md)

[border-kind-top](src/alias/border-kind-top/README.md)

[border-size-bottom](src/alias/border-size-bottom/README.md)

[border-size-left](src/alias/border-size-left/README.md)

[border-size-right](src/alias/border-size-right/README.md)

[border-size-top](src/alias/border-size-top/README.md)

[case](src/alias/case/README.md)

[col-end](src/alias/col-end/README.md)

[col-start](src/alias/col-start/README.md)

[color-box](src/alias/color-box/README.md)

[color-text](src/alias/color-text/README.md)

[cols](src/alias/cols/README.md)

[cols-pseudo](src/alias/cols-pseudo/README.md)

[content](src/alias/content/README.md)

[corner-left-bottom](src/alias/corner-left-bottom/README.md)

[corner-left-top](src/alias/corner-left-top/README.md)

[corner-right-bottom](src/alias/corner-right-bottom/README.md)

[corner-right-top](src/alias/corner-right-top/README.md)

[custom](src/alias/custom/README.md)

[decoration](src/alias/decoration/README.md)

[direction](src/alias/direction/README.md)

[fill](src/alias/fill/README.md)

[font](src/alias/font/README.md)

[grow](src/alias/grow/README.md)

[has-suffix](src/alias/has-suffix/README.md)

[height-max](src/alias/height-max/README.md)

[height-min](src/alias/height-min/README.md)

[is-interactive](src/alias/is-interactive/README.md)

[is-italic](src/alias/is-italic/README.md)

[kind](src/alias/kind/README.md)

[line](src/alias/line/README.md)

[modify](src/alias/modify/README.md)

[modify-origin](src/alias/modify-origin/README.md)

[move-bottom](src/alias/move-bottom/README.md)

[move-left](src/alias/move-left/README.md)

[move-right](src/alias/move-right/README.md)

[move-top](src/alias/move-top/README.md)

[must-break-words](src/alias/must-break-words/README.md)

[must-handle-events](src/alias/must-handle-events/README.md)

[opacity](src/alias/opacity/README.md)

[order-major](src/alias/order-major/README.md)

[order-minor](src/alias/order-minor/README.md)

[origin](src/alias/origin/README.md)

[outline-color](src/alias/outline-color/README.md)

[outline-kind](src/alias/outline-kind/README.md)

[outline-size](src/alias/outline-size/README.md)

[outline-space](src/alias/outline-space/README.md)

[overflow-direction](src/alias/overflow-direction/README.md)

[overflow-x](src/alias/overflow-x/README.md)

[overflow-y](src/alias/overflow-y/README.md)

[place-content](src/alias/place-content/README.md)

[place-direction](src/alias/place-direction/README.md)

[place-major](src/alias/place-major/README.md)

[place-minor](src/alias/place-minor/README.md)

[position](src/alias/position/README.md)

[row-end](src/alias/row-end/README.md)

[row-start](src/alias/row-start/README.md)

[rows](src/alias/rows/README.md)

[rows-pseudo](src/alias/rows-pseudo/README.md)

[shadow-box](src/alias/shadow-box/README.md)

[shadow-text](src/alias/shadow-text/README.md)

[shrink](src/alias/shrink/README.md)

[size](src/alias/size/README.md)

[space-break](src/alias/space-break/README.md)

[space-char](src/alias/space-char/README.md)

[space-inner-bottom](src/alias/space-inner-bottom/README.md)

[space-inner-left](src/alias/space-inner-left/README.md)

[space-inner-right](src/alias/space-inner-right/README.md)

[space-inner-top](src/alias/space-inner-top/README.md)

[space-outer-bottom](src/alias/space-outer-bottom/README.md)

[space-outer-left](src/alias/space-outer-left/README.md)

[space-outer-right](src/alias/space-outer-right/README.md)

[space-outer-top](src/alias/space-outer-top/README.md)

[space-word](src/alias/space-word/README.md)

[space-x](src/alias/space-x/README.md)

[space-y](src/alias/space-y/README.md)

[stroke-color](src/alias/stroke-color/README.md)

[stroke-dashes](src/alias/stroke-dashes/README.md)

[stroke-size](src/alias/stroke-size/README.md)

[stroke-space](src/alias/stroke-space/README.md)

[template](src/alias/template/README.md)

[text-cols-amount](src/alias/text-cols-amount/README.md)

[text-cols-border-color](src/alias/text-cols-border-color/README.md)

[text-cols-border-kind](src/alias/text-cols-border-kind/README.md)

[text-cols-border-size](src/alias/text-cols-border-size/README.md)

[text-cols-space](src/alias/text-cols-space/README.md)

[text-cols-width](src/alias/text-cols-width/README.md)

[transition](src/alias/transition/README.md)

[transition-delay](src/alias/transition-delay/README.md)

[transition-duration](src/alias/transition-duration/README.md)

[transition-fn](src/alias/transition-fn/README.md)

[weight](src/alias/weight/README.md)

[width-max](src/alias/width-max/README.md)

[width-min](src/alias/width-min/README.md)

## Challenges

- Document all services
- Document all alias

## License

Skin is licensed under the [MIT License](http://opensource.org/licenses/MIT)

Created by [RocketStation](http://rstation.io)
