<template lang="html">
  <main>
    <section class="canvas-section">
      <pixi-renderer
        @tick="update"
        :backgroundColor="0x0078FF"
        :height="480"
        :width="640"
      >
        <pixi-sprite :src="image"
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
      <h1 class="title">PIXI Sprite</h1>

      <div class="field is-horizontal">
        <div class="field-label is-small">
          <label class="label">Image</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <select class="input is-small" v-model="image">
                <option value="/img/001.png">Bulbizarre</option>
                <option value="/img/004.png">Salamèche</option>
                <option value="/img/007.png">Carapuce</option>
              </select>
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
      image: '/img/001.png',
      position: { x: 320, y: 240 },
      anchor: { x: 0.5, y: 0.5 },
      scale: { x: 1, y: 1 },
      pivot: { x: 0, y: 0 },
      skew: { x: 0, y: 0 },
      rotation: 0,
      alpha: 1
    }
  },
  methods: {
    update (dt) {
      this.t += dt
    }
  }
}
</script>
