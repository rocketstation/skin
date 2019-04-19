module.exports = {
  between: function(min, max) {
    return (
      'minmax' +
      '(' +
      (min != null
        ? typeof min === 'number' && min !== 0
          ? min + 'rem'
          : min
        : 'auto') +
      ',' +
      (max != null
        ? typeof max === 'number' && max !== 0
          ? max + 'rem'
          : max
        : 'auto') +
      ')'
    )
  },
  img: function(v) {
    return 'url' + '(' + v + ')'
  },
  linear: function(k) {
    var v = ''

    for (var i = 1; i < arguments.length; i++) {
      v +=
        (v.length ? ',' : '') +
        (arguments[i].constructor === Array
          ? arguments[i][0] + ' ' + arguments[i][1] + '%'
          : arguments[i])
    }

    return 'linear-gradient' + '(' + k + 'deg' + ',' + v + ')'
  },
  matrix: function(a, b, c, d, x, y) {
    return (
      'matrix' + '(' + a + ',' + b + ',' + c + ',' + d + ',' + x + ',' + y + ')'
    )
  },
  matrix3d: function(
    a1,
    b1,
    c1,
    d1,
    a2,
    b2,
    c2,
    d2,
    a3,
    b3,
    c3,
    d3,
    a4,
    b4,
    c4,
    d4
  ) {
    return (
      'matrix3d' +
      '(' +
      a1 +
      ',' +
      b1 +
      ',' +
      c1 +
      ',' +
      d1 +
      ',' +
      a2 +
      ',' +
      b2 +
      ',' +
      c2 +
      ',' +
      d2 +
      ',' +
      a3 +
      ',' +
      b3 +
      ',' +
      c3 +
      ',' +
      d3 +
      ',' +
      a4 +
      ',' +
      b4 +
      ',' +
      c4 +
      ',' +
      d4 +
      ')'
    )
  },
  perspective: function(v) {
    return 'perspective' + '(' + (typeof v === 'number' ? v + 'rem' : v) + ')'
  },
  radial: function() {
    var v = ''

    for (var i = 0; i < arguments.length; i++) {
      v +=
        (v.length ? ',' : '') +
        (arguments[i].constructor === Array
          ? arguments[i][0] + ' ' + arguments[i][1] + '%'
          : arguments[i])
    }

    return 'radial-gradient' + '(' + v + ')'
  },
  repeat: function(key, val) {
    return (
      'repeat' +
      '(' +
      (key === 'fill' || key === 'fit' ? 'auto-' + key : key) +
      ',' +
      (val != null
        ? typeof val === 'number' && val !== 0
          ? val + 'fr'
          : val
        : '1fr') +
      ')'
    )
  },
  rotate: function(v) {
    return 'rotate(' + (typeof v === 'number' ? v + 'deg' : v) + ')'
  },
  rotate3d: function(x, y, z, angle) {
    return (
      'rotate3d(' +
      x +
      ',' +
      y +
      ',' +
      z +
      ',' +
      (typeof angle === 'number' ? angle + 'deg' : angle) +
      ')'
    )
  },
  rotateX: function(v) {
    return 'rotateX(' + (typeof v === 'number' ? v + 'deg' : v) + ')'
  },
  rotateY: function(v) {
    return 'rotateY(' + (typeof v === 'number' ? v + 'deg' : v) + ')'
  },
  rotateZ: function(v) {
    return 'rotateZ(' + (typeof v === 'number' ? v + 'deg' : v) + ')'
  },
  scale: function(x, y) {
    return 'scale(' + x + ',' + y + ')'
  },
  scale3d: function(x, y, z) {
    return 'scale3d(' + x + ',' + y + ',' + z + ')'
  },
  scaleX: function(v) {
    return 'scaleX' + '(' + v + ')'
  },
  scaleY: function(v) {
    return 'scaleY' + '(' + v + ')'
  },
  scaleZ: function(v) {
    return 'scaleZ' + '(' + v + ')'
  },
  skew: function(x, y) {
    return (
      'skew(' +
      (typeof x === 'number' ? x + 'deg' : x) +
      ',' +
      (typeof y === 'number' ? y + 'deg' : y) +
      ')'
    )
  },
  skewX: function(v) {
    return 'skewX(' + (typeof v === 'number' ? v + 'deg' : v) + ')'
  },
  skewY: function(v) {
    return 'skewY(' + (typeof v === 'number' ? v + 'deg' : v) + ')'
  },
  translate: function(x, y) {
    return (
      'translate(' +
      (typeof x === 'number' ? x + 'rem' : x) +
      ',' +
      (typeof y === 'number' ? y + 'rem' : y) +
      ')'
    )
  },
  translate3d: function(x, y, z) {
    return (
      'translate3d(' +
      (typeof x === 'number' ? x + 'rem' : x) +
      ',' +
      (typeof y === 'number' ? y + 'rem' : y) +
      ',' +
      (typeof z === 'number' ? z + 'rem' : z) +
      ')'
    )
  },
  translateX: function(v) {
    return 'translateX(' + (typeof v === 'number' ? v + 'rem' : v) + ')'
  },
  translateY: function(v) {
    return 'translateY(' + (typeof v === 'number' ? v + 'rem' : v) + ')'
  },
  translateZ: function(v) {
    return 'translateZ(' + (typeof v === 'number' ? v + 'rem' : v) + ')'
  },
}
