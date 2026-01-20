<template>
  <div class="counter">
    <h2 :style="countTitleColor">{{ title }}</h2>
    <div>Count: {{ count }}</div>
    <div>Double count {{ doubleCount }}</div>
  </div>
  <button @click="count++">Increment++</button>
  <button @click="decrement">Decrement--</button>
  <button @click="reset">Reset</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count: 0,
    }
  },
  props: {
    title: {
      type: String,
      default: 'Default counter title',
    },
  },
  emits: ['decrement'],
  computed: {
    doubleCount() {
      return 2 * this.count
    },
    countTitleColor() {
      return { color: this.count > 5 ? 'red' : 'black' }
    },
  },
  methods: {
    decrement() {
      this.count--
      this.$emit('decrement', this.count)
    },
    reset() {
      this.count = 0
    },
  },
  watch: {
    count: {
      handler(newValue, oldValue) {
        console.log('newValue', newValue)
        console.log('oldValue', oldValue)
        // if (newValue === 0) alert('Счетчик равен нулю')
      },
      immediate: true,
      deep: true,
    },
  },
})
</script>

<style scoped>
button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: blueviolet;
  color: white;
  margin: 5px;
  cursor: pointer;
}
</style>
