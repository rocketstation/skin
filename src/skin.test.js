const skin = require('./skin')

it('handles gradient radial', () => {
  expect(skin.radial('white', 'black')).toEqual('radial-gradient(white,black)')
  expect(skin.radial(['white', 0], ['black', 100])).toEqual(
    'radial-gradient(white 0%,black 100%)'
  )
})

it('handles gradient linear', () => {
  expect(skin.linear(360, 'white', 'black')).toEqual(
    'linear-gradient(360deg,white,black)'
  )
  expect(skin.linear(360, ['white', 0], ['black', 100])).toEqual(
    'linear-gradient(360deg,white 0%,black 100%)'
  )
})

it('handles img', () => {
  expect(skin.img('./bg.svg')).toEqual('url(./bg.svg)')
})

it('handles limit', () => {
  expect(skin.between(null, null)).toEqual('minmax(auto,auto)')
  expect(skin.between(1, 1)).toEqual('minmax(1rem,1rem)')
  expect(skin.between('1fr', '1fr')).toEqual('minmax(1fr,1fr)')
})

it('handles repeat', () => {
  expect(skin.repeat('fill', '1rem')).toEqual('repeat(auto-fill,1rem)')
  expect(skin.repeat('fit', '1rem')).toEqual('repeat(auto-fit,1rem)')
  expect(skin.repeat(3)).toEqual('repeat(3,1fr)')
  expect(skin.repeat(3, 1)).toEqual('repeat(3,1fr)')
  expect(skin.repeat(3, 'auto')).toEqual('repeat(3,auto)')
})

it('handles matrix', () => {
  expect(skin.matrix(1, 2, 3, 4, 5, 6)).toEqual('matrix(1,2,3,4,5,6)')
})

it('handles matrix3d', () => {
  expect(
    skin.matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)
  ).toEqual('matrix3d(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)')
})

it('handles translate', () => {
  expect(skin.translate(1, 1)).toEqual('translate(1rem,1rem)')
  expect(skin.translate('1rem', '1rem')).toEqual('translate(1rem,1rem)')
})

it('handles translate3d', () => {
  expect(skin.translate3d(1, 1, 1)).toEqual('translate3d(1rem,1rem,1rem)')
  expect(skin.translate3d('1rem', '1rem', '1rem')).toEqual(
    'translate3d(1rem,1rem,1rem)'
  )
})

it('handles translateX', () => {
  expect(skin.translateX(1)).toEqual('translateX(1rem)')
  expect(skin.translateX('1rem')).toEqual('translateX(1rem)')
})

it('handles translateY', () => {
  expect(skin.translateY(1)).toEqual('translateY(1rem)')
  expect(skin.translateY('1rem')).toEqual('translateY(1rem)')
})

it('handles translateZ', () => {
  expect(skin.translateZ(1)).toEqual('translateZ(1rem)')
  expect(skin.translateZ('1rem')).toEqual('translateZ(1rem)')
})

it('handles scale', () => {
  expect(skin.scale(1, 1)).toEqual('scale(1,1)')
})

it('handles scale3d', () => {
  expect(skin.scale3d(1, 1, 1)).toEqual('scale3d(1,1,1)')
})

it('handles scaleX', () => {
  expect(skin.scaleX(1)).toEqual('scaleX(1)')
})

it('handles scaleY', () => {
  expect(skin.scaleY(1)).toEqual('scaleY(1)')
})

it('handles scaleZ', () => {
  expect(skin.scaleZ(1)).toEqual('scaleZ(1)')
})

it('handles rotate', () => {
  expect(skin.rotate(1)).toEqual('rotate(1deg)')
  expect(skin.rotate('1deg')).toEqual('rotate(1deg)')
})

it('handles rotate3d', () => {
  expect(skin.rotate3d(1, 1, 1, 1)).toEqual('rotate3d(1,1,1,1deg)')
  expect(skin.rotate3d(1, 1, 1, '1deg')).toEqual('rotate3d(1,1,1,1deg)')
})

it('handles rotateX', () => {
  expect(skin.rotateX(1)).toEqual('rotateX(1deg)')
  expect(skin.rotateX('1deg')).toEqual('rotateX(1deg)')
})

it('handles rotateY', () => {
  expect(skin.rotateY(1)).toEqual('rotateY(1deg)')
  expect(skin.rotateY('1deg')).toEqual('rotateY(1deg)')
})

it('handles rotateZ', () => {
  expect(skin.rotateZ(1)).toEqual('rotateZ(1deg)')
  expect(skin.rotateZ('1deg')).toEqual('rotateZ(1deg)')
})

it('handles skew', () => {
  expect(skin.skew(1, 1)).toEqual('skew(1deg,1deg)')
  expect(skin.skew('1deg', '1deg')).toEqual('skew(1deg,1deg)')
})

it('handles skewX', () => {
  expect(skin.skewX(1)).toEqual('skewX(1deg)')
  expect(skin.skewX('1deg')).toEqual('skewX(1deg)')
})

it('handles skewY', () => {
  expect(skin.skewY(1)).toEqual('skewY(1deg)')
  expect(skin.skewY('1deg')).toEqual('skewY(1deg)')
})

it('handles perspective', () => {
  expect(skin.perspective(1)).toEqual('perspective(1rem)')
  expect(skin.perspective('1rem')).toEqual('perspective(1rem)')
})
