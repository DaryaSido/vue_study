<template>
  <div class="counter">
    <h2 :style="[changeCounterTxt, countTitleColor]">{{ title }}</h2>
    <div>Count: {{ count }}</div>
    <div>Double count {{ doubleCount }}</div>
  </div>
  <button @click="count++" :style="changeCounterBtn">Increment++</button>
  <button @click="decrement" :style="changeCounterBtn">Decrement--</button>
  <button @click="reset" :style="changeCounterBtn">Reset</button>
</template>

<script lang="ts">
import { defineComponent, type CSSProperties, type PropType } from 'vue'

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
   changeCounterTxt: {
    type: Object as PropType<CSSProperties>,
    default: () => ({})
   },
     changeCounterBtn: {
      type: Object as PropType<CSSProperties>,
      default: () => ({})
    }
  },
  emits: ['decrement'],
  computed: {
    doubleCount() {
      return 2 * this.count
    },
    countTitleColor() {
      if(this.count >5) 
      return {
    'color': 'red'
  }
  else 
  return {}
      // return { color: this.count > 5 ? 'red' : 'black' }
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
