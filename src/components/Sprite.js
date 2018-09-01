import Container from './Container.js'
import { Sprite } from 'pixi.js'

export default {
  mixins: [Container],
  props: {
    anchorX: Number,
    anchorY: Number,
    blendMode: Number,
    // buttonMode
    // pluginName
    // shader
    // texture
    tint: Number,
    src: String
  },
  computed: {
    instance () { return this.src ? Sprite.fromImage(this.src) : new Sprite() }
  },
  watch: {
    'instance': {
      handler (instance) {
        if (this.tint) instance.text = this.tint
        if (this.blendMode) instance.blendMode = this.blendMode
        if (this.anchorX || this.anchorY) instance.anchor.set(this.anchorX || 0, this.anchorY || 0)
      },
      immediate: true
    },
    'tint': function (tint) { this.instance.tint = tint },
    'blendMode': function (blendMode) { this.instance.blendMode = blendMode },
    'anchorX': function (anchorX) { this.instance.anchor.x = anchorX },
    'anchorY': function (anchorY) { this.instance.anchor.y = anchorY }
  }
}
