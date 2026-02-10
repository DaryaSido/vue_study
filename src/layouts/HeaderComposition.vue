<template>
  <div class="header">
    <div class="head">Кликай на хомяка - спасай планету!</div>
    <div class="button"><button @click="switchTheme" class="switcher" >Сменить тему</button></div>
  </div>
</template>

<script setup lang="ts">
import type { IHeaderCompositionEmit, IIsDark } from './types';

//props
const isDark = defineProps<IIsDark>()
//emits
const emit = defineEmits<{
  'theme-switch': []
}>()
//methods
const switchTheme = () => {
  emit('theme-switch')
} 

</script>

<style scoped>
.header {
  height: 70px;
  display: grid;
  grid-template-columns: repeat(3 1fr);
  align-content: space-around;
  font-size: 20px;
  color: white;
  background-color: blueviolet;
}

.head {
  grid-column: 3;
  align-items: center;
  font-size: 30px;
}
.button {
  grid-column: 4;
}

.switcher {
  
  background-color: white;
  border: 1px solid blueviolet;
  padding: 7px;
  font-size: 15px;
  font-weight: 600;
  color: blueviolet;
  border-radius: 5px;
}
</style>