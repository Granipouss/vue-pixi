<template>
  <div class="pixi-renderer">
    <!-- All child <template> elements get added in here -->
    <slot></slot>
  </div>
</template>

<script>
import { Application } from 'pixi.js'

export default {
  props: {
    height: Number,
    width: Number,
    autoResize: Boolean,
    backgroundColor: Number,
    clearBeforeRender: Boolean,
    preserveDrawingBuffer: Boolean,
    resolution: Number,
    roundPixels: Boolean,
    transparent: Boolean
  },
  data () {
    let options = { width: this.width, height: this.height }
    if (this.autoResize) options.autoResize = this.autoResize
    if (this.backgroundColor) options.backgroundColor = this.backgroundColor
    if (this.clearBeforeRender) options.clearBeforeRender = this.clearBeforeRender
    if (this.preserveDrawingBuffer) options.preserveDrawingBuffer = this.preserveDrawingBuffer
    if (this.resolution) options.resolution = this.resolution
    if (this.roundPixels) options.roundPixels = this.roundPixels
    if (this.transparent) options.transparent = this.transparent
    return {
      app: new Application(options),
      pixiObjects: {}
    }
  },
  provide () {
    return {
      app: this.app,
      pixiObjects: this.pixiObjects
    }
  },
  computed: {
    stage () { return this.app.stage },
    instance () { return this.app.stage },
    renderer () { return this.app.renderer }
  },
  mounted () {
    this.$el.appendChild(this.app.view)
    this.app.ticker.add(delta => this.$emit('tick', delta))
  },
  watch: {
    'autoResize': function (autoResize) { this.renderer.autoResize = autoResize },
    'backgroundColor': function (backgroundColor) { this.renderer.backgroundColor = backgroundColor },
    'clearBeforeRender': function (clearBeforeRender) { this.renderer.clearBeforeRender = clearBeforeRender },
    'preserveDrawingBuffer': function (preserveDrawingBuffer) { this.renderer.preserveDrawingBuffer = preserveDrawingBuffer },
    'resolution': function (resolution) { this.renderer.resolution = resolution },
    'roundPixels': function (roundPixels) { this.renderer.roundPixels = roundPixels },
    'transparent': function (transparent) { this.renderer.transparent = transparent },
    'height': function (height) { this.renderer.resize(this.width, height) },
    'width': function (width) { this.renderer.resize(width, this.height) }
  }
}
</script>

<style>
.pixi-renderer {
  display: inline-block;
  line-height: 0;
}

.pixi-renderer div {
  display: none;
}
</style>
