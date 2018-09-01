# Vue-PIXI

> A [Vue.js](https://vuejs.org) plugin for [PIXI.js](https://pixijs.io). Currently it is more a proof of concept that an actual library but it will get there eventually.
Greatly inspired by [Vue-gl](https://vue-gl.github.io).

## Getting Started

First install the package.
```
npm install --save vue-pixi
```

Then add it to Vue.js
```js
import Vue from 'vue'
import VuePIXI from 'vue-pixi'

Vue.use(VuePIXI)
```

## Example
```html
<template lang="html">
  <section>
    <pixi-renderer
      @tick="update"
      :backgroundColor="0x0078FF"
      :height="480"
      :width="640"
    >
      <pixi-container
        :x="320" :y="240"
        :rotation="-t / 40"
      >
        <pixi-sprite v-for="(sprite, key) in sprites" :key="key"
          src="/img/logo.png"
          :x="sprite.x" :y="sprite.y"
          :scaleX="sprite.scale" :scaleY="sprite.scale"
          :anchorX="0.5" :anchorY="0.5"
          :rotation="sprite.angle + t / 60" />
      </pixi-container>
    </pixi-renderer>
  </section>
</template>

<script>
export default {
  data () {
    return { t: 0, sprites: [] }
  },
  methods: {
    addSprite () {
      this.sprites.push({
        x: 640 * (0.5 - Math.random()),
        y: 480 * (0.5 - Math.random()),
        angle: 2 * Math.PI * Math.random(),
        scale: 0.25 + 0.5 * Math.random(),
      })
    },
    update (dt) { this.t += dt }
  },
  created () {
    this.addSprite()
    this.addSprite()
    this.addSprite()
  }
}
</script>
```

## Project setup
```
npm install
```

### Compiles and hot-reloads the demo for development
```
npm run serve
```

### Compiles and minifies the library for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
