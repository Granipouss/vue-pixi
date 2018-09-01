<template lang="html">
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded">
        <input class="input is-small" type="number" :min="0" :max="255" placeholder="Red" v-model="_r" />
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded">
        <input class="input is-small" type="number" :min="0" :max="255" placeholder="Green" v-model="_g" />
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded">
        <input class="input is-small" type="number" :min="0" :max="255" placeholder="Blue" v-model="_b" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: { type: Object, required: true }
  },
  computed: {
    '_r': {
      get () { return +this.color.r },
      set (value) { this.color.r = +value }
    },
    '_g': {
      get () { return +this.color.g },
      set (value) { this.color.g = +value }
    },
    '_b': {
      get () { return +this.color.b },
      set (value) { this.color.b = +value }
    }
  },
  watch: {
    'color.r': 'computeHex',
    'color.g': 'computeHex',
    'color.b': 'computeHex'
  },
  created () {
    this.computeHex()
  },
  methods: {
    computeHex () {
      this.color.hex = 0 +
        this.color.r * 0x010000 +
        this.color.g * 0x000100 +
        this.color.b * 0x000001
    }
  }
}
</script>

<style lang="css">
.times-icon {
  margin-right: 0.75rem;
  font-weight: bold;
  line-height: 2;
}
</style>
