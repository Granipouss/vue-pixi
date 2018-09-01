import DisplayObject from './DisplayObject.js'
import { Container } from 'pixi.js'

export default {
  mixins: [DisplayObject],
  props: {
    height: Number,
    width: Number,
    interactiveChildren: Boolean
  },
  computed: {
    instance: () => new Container()
  },
  watch: {
    'instance': {
      handler (instance) {
        if (this.width) instance.width = this.width
        if (this.height) instance.height = this.height
        if (this.interactiveChildren) instance.interactiveChildren = this.interactiveChildren
      },
      immediate: true
    },
    'width': function (width) { this.instance.width = width },
    'height': function (height) { this.instance.height = height },
    'interactiveChildren': function (interactiveChildren) { this.instance.interactiveChildren = interactiveChildren }
  },
  render (h) { return this.$slots.default ? h('div', this.$slots.default) : undefined }
}
