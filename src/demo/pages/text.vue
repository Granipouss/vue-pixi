<template lang="html">
  <main>
    <section class="canvas-section">
      <pixi-renderer
        @tick="update"
        :backgroundColor="0x0078FF"
        :height="480"
        :width="640"
      >
        <pixi-text :text="text"
          :x="position.x" :y="position.y"
          :anchorX="anchor.x" :anchorY="anchor.y"
          :skewX="skew.x" :skewY="skew.y"
          :scaleX="scale.x" :scaleY="scale.y"
          :pivotX="pivot.x" :pivotY="pivot.y"
          :rotation="Math.PI / 180 * rotation"
          :alpha="alpha"
        />
      </pixi-renderer>
    </section>

    <section>
      <h1 class="title">PIXI Text</h1>
      <div class="field is-horizontal">
        <div class="field-label is-small">
          <label class="label">Text</label>
        </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input is-small" type="text" v-model="text" />
              </p>
            </div>
          </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-small">
          <label class="label">Position</label>
        </div>
        <CoordinateField :coordinate="position" />
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-small">
          <label class="label">Anchor</label>
        </div>
        <CoordinateField :coordinate="anchor" :step="0.1" :max="1" />
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-small">
          <label class="label">Scale</label>
        </div>
        <CoordinateField :coordinate="scale" :step="0.1" :max="10" />
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-small">
          <label class="label">Skew</label>
        </div>
        <CoordinateField :coordinate="skew" :step="0.1" :max="10" />
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-small">
          <label class="label">Pivot</label>
        </div>
        <CoordinateField :coordinate="pivot" :min="-100" :max="100" />
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-small">
          <label class="label">Rotation</label>
        </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input is-small" type="number" :min="0" :max="360" v-model="rotation" />
              </p>
            </div>
          </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-small">
          <label class="label">Alpha</label>
        </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input is-small" type="number" :min="0" :max="1" :step="0.1" v-model="alpha" />
              </p>
            </div>
          </div>
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
      text: 'Hello world',
      position: { x: 320, y: 240 },
      anchor: { x: 0.5, y: 0.5 },
      scale: { x: 1, y: 1 },
      pivot: { x: 0, y: 0 },
      skew: { x: 0, y: 0 },
      rotation: 0,
      alpha: 1
    }
  },
  computed: {
    hexColor () {
      return 0 +
        this.color.r * 0x010000 +
        this.color.g * 0x000100 +
        this.color.b * 0x000001
    }
  },
  methods: {
    update (dt) {
      this.t += dt
    }
  }
}
</script>
