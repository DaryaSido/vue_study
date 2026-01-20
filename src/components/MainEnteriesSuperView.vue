<template>
  <div class="main_info">
    <h1>Страница подсчета кликов</h1>
    <div class="descr">Налетай, не скупись, кликать торопись!</div>
    <ClickCounter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ClickCounter from './ClickCounter.vue'

export default defineComponent({
  components: { ClickCounter },
})
</script>

<style scoped>
.main_info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.descr {
  display: block;
  font-size: 24px;
  font-style: italic;
  color: black;
}
</style>
