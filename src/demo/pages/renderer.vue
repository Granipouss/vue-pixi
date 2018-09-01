<template lang="html">
  <main>
    <section class="canvas-section">
      <pixi-renderer
        @tick="update"
        :backgroundColor="color.hex"
        :height="dimensions.y"
        :width="dimensions.x"
      >
        <pixi-sprite  src="/img/logo.png" :x="dimensions.x / 2" :y="dimensions.y / 2 + 40 * Math.sin(t / 20)" :anchorX="0.5" :anchorY="0.5" />
      </pixi-renderer>
    </section>

    <section>
      <h1 class="title">PIXI Renderer</h1>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Size</label>
        </div>
        <CoordinateField :coordinate="dimensions" />
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Background</label>
        </div>
        <ColorField :color="color" />
      </div>
    </section>
  </main>
</template>

<script>
import CoordinateField from '../components/CoordinateField.vue'
import ColorField from '../components/ColorField.vue'

export default {
  components: { CoordinateField, ColorField },
  data () {
    return {
      t: 0,
      dimensions: { x: 640, y: 480 },
      color: { r: 0, g: 120, b: 255 }
    }
  },
  methods: {
    update (dt) {
      this.t += dt
    }
  }
}
</script>

<style scoped>
.canvas-section { min-height: 544px; }
</style>
