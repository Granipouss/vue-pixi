<template lang="html">
  <main>
    <section class="canvas-section">
      <pixi-renderer
        @tick="update"
        :backgroundColor="0x0078FF"
        :height="480"
        :width="640"
      >
        <pixi-container
          :x="position.x" :y="position.y"
          :skewX="skew.x" :skewY="skew.y"
          :scaleX="scale.x" :scaleY="scale.y"
          :pivotX="pivot.x" :pivotY="pivot.y"
          :rotation="Math.PI / 180 * rotation"
          :alpha="alpha"
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

    <section>
      <h1 class="title">PIXI Container</h1>

      <div class="field is-horizontal">
        <div class="field-label is-small">
          <label class="label">{{ sprites.length }} Sprite{{ sprites.length > 1 ? "s" : "" }}</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <button class="button is-small" @click.prevent="addSprite">Add a Sprite</button>
              &nbsp;
              <button class="button is-small" @click.prevent="delSprite">Remove a Sprite</button>
              &nbsp;
              <button class="button is-small" @click.prevent="delSprites">Remove all Sprites</button>
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
      sprites: [],
      position: { x: 320, y: 240 },
      scale: { x: 1, y: 1 },
      pivot: { x: 0, y: 0 },
      skew: { x: 0, y: 0 },
      rotation: 0,
      alpha: 1
    }
  },
  methods: {
    addSprite () {
      this.sprites.push({
        x: 640 * (0.5 - Math.random()),
        y: 480 * (0.5 - Math.random()),
        angle: 2 * Math.PI * Math.random(),
        scale: 0.25 + 0.5 * Math.random()
      })
      console.log(this.sprites)
    },
    delSprite () {
      this.sprites.pop()
      console.log(this.sprites)
    },
    delSprites () {
      this.sprites = []
    },
    update (dt) {
      this.t += dt
    }
  },
  created () {
    this.addSprite()
    this.addSprite()
    this.addSprite()
  }
}
</script>

<style lang="css" scoped>
.wrapper {
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
