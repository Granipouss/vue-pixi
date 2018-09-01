<template lang="html">
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded">
        <input class="input is-small" type="number" :min="min" :max="max" :step="step" placeholder="X" v-model="_x" />
      </p>
    </div>
    <span class="times-icon">&times;</span>
    <div class="field">
      <p class="control is-expanded">
        <input class="input is-small" type="number" :min="min" :max="max" :step="step" placeholder="Y" v-model="_y" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    coordinate: { type: Object, required: true },
    max: { type: Number, default: 800 },
    min: { type: Number, default: 0 },
    step: { type: Number, default: 1 }
  },
  computed: {
    '_x': {
      get () { return +this.coordinate.x },
      set (value) { this.coordinate.x = +value }
    },
    '_y': {
      get () { return +this.coordinate.y },
      set (value) { this.coordinate.y = +value }
    }
  }
}
</script>

<style lang="css">
.times-icon {
  margin-right: 0.75rem;
  font-weight: bold;
  line-height: 1.5;
}
</style>
