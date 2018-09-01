import Sprite from './Sprite.js'
import { Text } from 'pixi.js'

export default {
  mixins: [Sprite],
  props: {
    text: String
  },
  computed: {
    instance: () => new Text()
  },
  watch: {
    'instance': {
      handler (newInstance, oldInstance) {
        if (this.text) newInstance.text = this.text
      },
      immediate: true
    },
    'text': function (text) { this.instance.text = text }
  }
}
