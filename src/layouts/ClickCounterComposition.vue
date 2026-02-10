<template>
     <div>
  <div class="counter">
     <h2 :style="countTitleColor">{{title}}</h2>
    <div>Count: {{ count }}</div>
    <div>Double count {{ doubleCount }}</div>
  </div>
  <button @click="count++" >Increment++</button>
  <button @click="decrement" >Decrement--</button>
  <button @click="reset" >Reset</button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, type CSSProperties } from 'vue';
import type { IClickCounterProps, IClickCounterEmits, IIsDark } from './types';
//data
const count= ref<number>(0)
//props


// обязательный пропс
const propsTitle = defineProps<IClickCounterProps & IIsDark>()

  // заголовок по дефолту
// const propsTitleDefault = withDefaults(defineProps<IClickCounterProps>(), {
//   title: 'Заглушка заголовка'
// })
//methods
const decrement= ()=> {
        count.value--
        emits('decrement', count.value)
    }
const reset = () => {
count.value=0
}
//computed
const doubleCount = computed(()=> count.value*2)
const countTitleColor = computed<CSSProperties>(()=> {
    return {
        color: count.value > 3 ? 'black' : 'green'
    }
})
//emits

const emits = defineEmits<IClickCounterEmits>()
watch(count, (newValue, oldValue) => {
  console.log('newValue', newValue)
  console.log('oldValue', oldValue)
},
{
  immediate: true,
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